# Kaio Fontenele Portfolio

Professional portfolio application designed to present projects, skills, experience, education, certifications, and contact channels through a single public-facing website.

## Overview

This repository is structured as a compact monorepo composed of:

- a React + TypeScript frontend for the public portfolio
- an Express backend for contact handling and GitHub-related endpoints
- static assets for resume, diplomas, and course certificates
- Dockerfiles prepared for deployment on self-hosted Coolify

## Features

- Bilingual interface with Portuguese and English content
- Light and dark theme switching
- Responsive one-page portfolio layout
- Curated featured projects section
- Professional experience timeline
- Education and certifications section with downloadable course certificates
- Resume download section
- Contact form backed by Express + Nodemailer
- GitHub API integration for reusable portfolio endpoints
- Framer Motion animations for section transitions and cards
- Docker-based deployment flow for self-hosted Coolify

## Architecture

### Frontend

The frontend lives in `portfolio-app/` and is responsible for:

- rendering the one-page portfolio experience
- handling language switching with `i18next`
- managing theme state with React Context
- exposing certificates, resume, and featured project assets
- calling the backend contact API through `REACT_APP_API_URL`

Main sections rendered in the app:

- Hero
- About
- Skills
- Projects
- Experience
- Education & Certifications
- Resume
- Contact

### Backend

The backend lives in `backend/` and exposes a lightweight API used by the site:

- `GET /api/health`
- `GET /api/github/repos`
- `GET /api/github/stats`
- `POST /api/contact`

Primary responsibilities:

- contact message delivery through SMTP
- GitHub profile and repository data retrieval
- CORS protection for the public frontend domain
- healthcheck support for production environments

## Project Structure

```text
portfolio/
├── backend/
│   ├── Dockerfile
│   ├── server.js
│   ├── package.json
│   └── .env.example
├── portfolio-app/
│   ├── Dockerfile
│   ├── nginx.conf
│   ├── public/
│   │   ├── certificates/
│   │   ├── diplomas/
│   │   └── resumes/
│   ├── src/
│   │   ├── components/
│   │   ├── contexts/
│   │   ├── data/
│   │   ├── i18n.ts
│   │   └── App.tsx
│   └── .env.example
└── README.md
```

## Technologies

### Frontend

- React
- TypeScript
- Framer Motion
- i18next
- Axios
- React Icons
- CSS modules / custom CSS

### Backend

- Node.js
- Express
- Nodemailer
- Axios
- CORS

### Infrastructure

- Docker
- Nginx
- Coolify

## Local Development

### Prerequisites

- Node.js 18 or higher
- npm

### Backend

```bash
cd backend
npm install
npm run dev
```

Default URL:

```text
http://localhost:5000
```

### Frontend

```bash
cd portfolio-app
npm install
npm start
```

Default URL:

```text
http://localhost:3000
```

To override the API URL during local development:

```bash
REACT_APP_API_URL=http://127.0.0.1:5051 npm start
```

## Environment Variables

### Backend

Use `backend/.env.example` as reference.

```env
PORT=5000
GITHUB_USERNAME=Kiwada
GITHUB_TOKEN=
CONTACT_TO_EMAIL=kaiocfontenele@gmail.com
CORS_ORIGIN=https://kaiofontenele.pro,https://www.kaiofontenele.pro
EMAIL_USER=
EMAIL_PASS=
```

### Frontend

Use `portfolio-app/.env.example` as reference.

```env
REACT_APP_API_URL=https://api.kaiofontenele.pro
```

## Production Build

### Frontend

```bash
cd portfolio-app
npm run build
```

### Backend

The backend does not require a compile step and runs directly with:

```bash
node server.js
```

## Deployment

This repository is prepared for deployment on self-hosted Coolify with two separate applications:

- frontend served at `https://kaiofontenele.pro`
- backend served at `https://api.kaiofontenele.pro`

Recommended production setup:

- frontend resource using `portfolio-app/Dockerfile`
- backend resource using `backend/Dockerfile`
- DNS pointing both root domain and `api` subdomain to the VPS IP

## Author

**Kaio Fontenele**

- GitHub: [Kiwada](https://github.com/Kiwada)
- LinkedIn: [kaio-fontenele-139a151b1](https://www.linkedin.com/in/kaio-fontenele-139a151b1/)
- Email: [kaiocfontenele@gmail.com](mailto:kaiocfontenele@gmail.com)
