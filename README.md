# Upscale Mail Website

A modern, mobile-friendly website for Upscale Mail - your trusted partner for professional business services.

## Features

- Responsive design that works on all devices
- Modern, clean user interface
- Contact form with backend API
- Docker containerization for easy deployment
- Services showcase for all business offerings

## Services Offered

- **Printing Services** - High-quality printing for documents and business materials
- **Shipping Services** - Reliable domestic and international shipping
- **Mailbox Rental** - Secure 24/7 mailbox access
- **Notary Services** - Certified notary public services
- **Business Services** - Faxing, copying, scanning, and administrative support
- **Laminating** - Professional document protection
- **Flyers & Mailers** - Custom marketing materials

## Prerequisites

- Node.js 18 or higher
- Docker and Docker Compose (for containerized deployment)

## Installation

### Local Development

1. Clone the repository:
```bash
git clone <repository-url>
cd "Upscale Mail Site"
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3000`

### Docker Deployment

1. Build and run with Docker Compose:
```bash
docker-compose up -d
```

2. Access the website at `http://localhost:3000`

3. Stop the container:
```bash
docker-compose down
```

## Project Structure

```
.
├── index.html          # Main HTML file
├── styles.css          # Styling and responsive design
├── script.js           # Client-side JavaScript
├── server.js           # Express server for API
├── package.json        # Node.js dependencies
├── Dockerfile          # Docker configuration
├── docker-compose.yml  # Docker Compose setup
└── submissions/        # Contact form submissions (created automatically)
```

## API Endpoints

### POST /api/contact
Submit a contact form request.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "555-1234",
  "service": "printing",
  "message": "I need help with printing services"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Thank you for your message! We will get back to you soon."
}
```

### GET /api/health
Health check endpoint for monitoring.

## Configuration

### Environment Variables

- `PORT` - Server port (default: 3000)
- `NODE_ENV` - Environment mode (development/production)

### Docker Volumes

Contact form submissions are persisted in the `./submissions` directory via Docker volume mounting.

## Development

To run in development mode with auto-reload:

```bash
npm run dev
```

## Production

The application is production-ready and can be deployed using Docker:

```bash
docker-compose up -d
```

## Contact Form Submissions

Form submissions are saved in two formats:
1. Individual JSON files in `submissions/submission_[timestamp].json`
2. Aggregated log file in `submissions/all_submissions.log`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

ISC

## Support

For questions or support, please use the contact form on the website.
