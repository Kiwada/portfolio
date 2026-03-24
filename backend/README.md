# Backend - Portfolio API

Node.js backend for the portfolio, providing endpoints for GitHub API integration and contact form.

## Endpoints

### GET /api/github/repos
Returns the most recent GitHub repositories

### GET /api/github/stats
Returns GitHub profile statistics

### POST /api/contact
Receives messages from the contact form

## Installation

```bash
npm install
npm run dev
```

## Deployment

This backend is intended to be deployed with Docker, either locally or through Coolify.

Make sure to configure the necessary environment variables.
