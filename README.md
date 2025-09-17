# MediChain - Patient Care Management System

## Project Overview

MediChain is a comprehensive patient care management system designed for medical professionals and patients. It provides a modern, intuitive interface for managing medical records, appointments, prescriptions, and patient care workflows.

## Features

- **Patient Dashboard**: Comprehensive view of patient information and medical history
- **Doctor Dashboard**: Tools for managing appointments, prescriptions, and patient records
- **Appointment Management**: Schedule and manage medical appointments
- **Prescription Management**: Create and track prescriptions
- **Medical Records**: Secure storage and management of patient medical data
- **Consent Management**: Handle patient consent and privacy settings
- **Audit Logs**: Track all system activities for compliance

## Getting Started

### Prerequisites

- Node.js (v18 or higher) - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- npm or yarn package manager

### Installation

Follow these steps to set up the project locally:

```sh
# Step 1: Clone the repository
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory
cd medichain-patient-care

# Step 3: Install the necessary dependencies
npm install

# Step 4: Start the development server
npm run dev
```

The application will be available at `http://localhost:8080`

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Deployment

This project can be deployed to any static hosting service such as:

- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any other static hosting provider

### Build for Production

```sh
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request
