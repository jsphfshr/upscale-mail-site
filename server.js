const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname)));

// Contact form endpoint
app.post('/api/contact', (req, res) => {
    const { name, email, phone, service, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
        return res.status(400).json({
            error: 'Please provide name, email, and message'
        });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({
            error: 'Please provide a valid email address'
        });
    }

    // Create submission object
    const submission = {
        timestamp: new Date().toISOString(),
        name,
        email,
        phone: phone || 'N/A',
        service: service || 'N/A',
        message
    };

    // Save to file (in production, you'd save to a database)
    const submissionsDir = path.join(__dirname, 'submissions');
    if (!fs.existsSync(submissionsDir)) {
        fs.mkdirSync(submissionsDir);
    }

    const fileName = `submission_${Date.now()}.json`;
    const filePath = path.join(submissionsDir, fileName);

    try {
        fs.writeFileSync(filePath, JSON.stringify(submission, null, 2));

        // Also append to a master log file
        const logPath = path.join(submissionsDir, 'all_submissions.log');
        const logEntry = `\n--- ${submission.timestamp} ---\n${JSON.stringify(submission, null, 2)}\n`;
        fs.appendFileSync(logPath, logEntry);

        console.log('New contact form submission:', submission);

        res.status(200).json({
            success: true,
            message: 'Thank you for your message! We will get back to you soon.'
        });
    } catch (error) {
        console.error('Error saving submission:', error);
        res.status(500).json({
            error: 'Sorry, there was an error processing your request. Please try again later.'
        });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.status(200).json({
        status: 'healthy',
        timestamp: new Date().toISOString()
    });
});

// Serve index.html for root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        error: 'Route not found'
    });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('SIGTERM signal received: closing HTTP server');
    process.exit(0);
});

process.on('SIGINT', () => {
    console.log('SIGINT signal received: closing HTTP server');
    process.exit(0);
});
