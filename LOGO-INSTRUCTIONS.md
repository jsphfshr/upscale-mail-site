# Logo Instructions

## Adding Your Logo

To display your logo in the navigation bar:

1. Place your logo file in the `png/` directory
2. Name the file: `logo-01.png`
3. The logo will automatically appear in the navigation bar

## Logo Specifications

**Recommended specifications:**
- **Format**: PNG (with transparent background preferred)
- **Height**: 50px - 100px (will be scaled to 50px in navbar)
- **Width**: Proportional to height
- **File size**: Under 100KB for optimal loading

## Current Logo Implementation

The logo is configured to:
- Display at 50px height on desktop
- Display at 40px height on mobile devices
- Show alongside the "Upscale Mail" text on desktop
- Show logo only (text hidden) on very small screens
- Link to the home section when clicked

## File Location

```
/Users/joefisher/Documents/code/Upscale Mail Site/png/logo-01.png
```

After adding your logo file, rebuild the Docker container:

```bash
docker-compose down
docker-compose up -d --build
```

The logo will then be visible at http://localhost:3000
