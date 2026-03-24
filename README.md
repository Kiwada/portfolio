# Kaio Fontenele Portfolio

Professional portfolio monorepo built to present projects, experience, certifications, and contact channels through a bilingual public website, with a dedicated backend for contact delivery and GitHub-related endpoints.

## English

### Overview

This project was built as a two-application portfolio platform:

- a React + TypeScript frontend responsible for the public experience
- an Express backend responsible for contact handling and GitHub API endpoints
- Docker-based production packaging for self-hosted deployment on Coolify

The frontend delivers a one-page portfolio with language switching, theme support, curated project highlights, professional experience, certifications, and contact flows. The backend supports form delivery and reusable GitHub-based endpoints used by the public site.

### How It Was Built

The project follows a compact monorepo structure:

- `portfolio-app/`: frontend application
- `backend/`: API and contact service

Key implementation decisions:

- `React 19 + TypeScript` for the UI layer
- `react-scripts` for the frontend build pipeline
- `i18next` for English and Portuguese content management
- `Framer Motion` for transitions and section animations
- `Axios` for API communication
- `Express` for backend routing
- `Nodemailer` for contact form delivery
- `Docker + Nginx` for production packaging
- `Coolify` as the target self-hosted deployment platform

### Architecture

#### Frontend

The frontend renders the full public experience, including:

- Hero
- About
- Skills
- Featured Projects
- Professional Experience
- Education & Certifications
- Resume section
- Contact section

Main frontend responsibilities:

- render bilingual content
- switch between dark and light themes
- consume backend endpoints through `REACT_APP_API_URL`
- expose certificates and other public assets

#### Backend

The backend exposes:

- `GET /api/health`
- `GET /api/github/repos`
- `GET /api/github/stats`
- `POST /api/contact`

Main backend responsibilities:

- send contact form messages through SMTP
- fetch GitHub repositories and profile data
- apply CORS restrictions for the production domains
- provide a production healthcheck endpoint

### Technology Stack

#### Frontend

- React 19
- TypeScript
- react-scripts
- Framer Motion
- i18next / react-i18next
- Axios
- React Icons
- Custom CSS

#### Backend

- Node.js
- Express
- Nodemailer
- Axios
- CORS
- dotenv

#### Production / Infrastructure

- Docker
- Nginx
- Coolify
- Self-hosted VPS deployment

### Project Structure

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

### Local Development

#### Requirements

- Node.js 20 recommended
- npm

#### 1. Start the backend

```bash
cd backend
npm install
npm run dev
```

Default local URL:

```text
http://localhost:5000
```

#### 2. Start the frontend

```bash
cd portfolio-app
npm install
npm start
```

Default local URL:

```text
http://localhost:3000
```

If you want the frontend to consume a custom local backend URL:

```bash
REACT_APP_API_URL=http://127.0.0.1:5051 npm start
```

### Environment Variables

#### Backend

Reference file: `backend/.env.example`

```env
PORT=5000
GITHUB_USERNAME=Kiwada
GITHUB_TOKEN=
CONTACT_TO_EMAIL=kaiocfontenele@gmail.com
CORS_ORIGIN=https://kaiofontenele.pro,https://www.kaiofontenele.pro
EMAIL_USER=
EMAIL_PASS=
```

#### Frontend

Reference file: `portfolio-app/.env.example`

```env
REACT_APP_API_URL=https://api.kaiofontenele.pro
```

### Production Build

#### Frontend static build

```bash
cd portfolio-app
npm run build
```

This generates the static production files inside:

```text
portfolio-app/build
```

#### Backend production run

```bash
cd backend
npm start
```

#### Docker build commands

Frontend:

```bash
docker build \
  -t kaio-portfolio-frontend \
  --build-arg REACT_APP_API_URL=https://api.kaiofontenele.pro \
  -f portfolio-app/Dockerfile \
  portfolio-app
```

Backend:

```bash
docker build \
  -t kaio-portfolio-backend \
  -f backend/Dockerfile \
  backend
```

### Production Deployment

The repository is prepared for a self-hosted Coolify setup with two applications:

- frontend: `https://kaiofontenele.pro`
- backend: `https://api.kaiofontenele.pro`

Recommended production model:

- frontend deployed from `portfolio-app/Dockerfile`
- backend deployed from `backend/Dockerfile`
- both domains pointing to the same VPS

## Português (Brasil)

### Visão Geral

Este projeto foi construído como uma plataforma de portfólio com duas aplicações:

- um frontend em React + TypeScript responsável pela experiência pública
- um backend em Express responsável pelo envio de contato e pelos endpoints relacionados ao GitHub
- empacotamento de produção com Docker para deploy self-hosted na Coolify

O frontend entrega um portfólio one-page com troca de idioma, suporte a tema, projetos em destaque, experiência profissional, certificações e contato. O backend dá suporte ao envio do formulário e aos endpoints reutilizáveis baseados no GitHub.

### Como o Projeto Foi Feito

O projeto segue uma estrutura enxuta de monorepo:

- `portfolio-app/`: aplicação frontend
- `backend/`: API e serviço de contato

Principais decisões de implementação:

- `React 19 + TypeScript` para a interface
- `react-scripts` como pipeline de build do frontend
- `i18next` para gerenciar o conteúdo em inglês e português
- `Framer Motion` para transições e animações entre seções
- `Axios` para comunicação com a API
- `Express` para roteamento no backend
- `Nodemailer` para envio do formulário de contato
- `Docker + Nginx` para empacotamento de produção
- `Coolify` como plataforma alvo de deploy self-hosted

### Arquitetura

#### Frontend

O frontend renderiza toda a experiência pública, incluindo:

- Hero
- Sobre Mim
- Habilidades
- Projetos em Destaque
- Experiência Profissional
- Educação & Certificações
- Seção de Currículo
- Seção de Contato

Responsabilidades principais do frontend:

- renderizar conteúdo bilíngue
- alternar entre tema claro e escuro
- consumir os endpoints do backend por `REACT_APP_API_URL`
- expor certificados e outros arquivos públicos

#### Backend

O backend expõe:

- `GET /api/health`
- `GET /api/github/repos`
- `GET /api/github/stats`
- `POST /api/contact`

Responsabilidades principais do backend:

- enviar mensagens do formulário por SMTP
- buscar repositórios e dados de perfil no GitHub
- aplicar restrição de CORS para os domínios de produção
- fornecer um endpoint de healthcheck para produção

### Tecnologias Utilizadas

#### Frontend

- React 19
- TypeScript
- react-scripts
- Framer Motion
- i18next / react-i18next
- Axios
- React Icons
- CSS customizado

#### Backend

- Node.js
- Express
- Nodemailer
- Axios
- CORS
- dotenv

#### Produção / Infraestrutura

- Docker
- Nginx
- Coolify
- Deploy self-hosted em VPS

### Estrutura do Projeto

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

### Execução Local

#### Requisitos

- Node.js 20 recomendado
- npm

#### 1. Subir o backend

```bash
cd backend
npm install
npm run dev
```

URL local padrão:

```text
http://localhost:5000
```

#### 2. Subir o frontend

```bash
cd portfolio-app
npm install
npm start
```

URL local padrão:

```text
http://localhost:3000
```

Se quiser apontar o frontend para outra URL local da API:

```bash
REACT_APP_API_URL=http://127.0.0.1:5051 npm start
```

### Variáveis de Ambiente

#### Backend

Arquivo de referência: `backend/.env.example`

```env
PORT=5000
GITHUB_USERNAME=Kiwada
GITHUB_TOKEN=
CONTACT_TO_EMAIL=kaiocfontenele@gmail.com
CORS_ORIGIN=https://kaiofontenele.pro,https://www.kaiofontenele.pro
EMAIL_USER=
EMAIL_PASS=
```

#### Frontend

Arquivo de referência: `portfolio-app/.env.example`

```env
REACT_APP_API_URL=https://api.kaiofontenele.pro
```

### Build de Produção

#### Build estático do frontend

```bash
cd portfolio-app
npm run build
```

Esse comando gera os arquivos estáticos de produção em:

```text
portfolio-app/build
```

#### Execução do backend em produção

```bash
cd backend
npm start
```

#### Comandos de build Docker

Frontend:

```bash
docker build \
  -t kaio-portfolio-frontend \
  --build-arg REACT_APP_API_URL=https://api.kaiofontenele.pro \
  -f portfolio-app/Dockerfile \
  portfolio-app
```

Backend:

```bash
docker build \
  -t kaio-portfolio-backend \
  -f backend/Dockerfile \
  backend
```

### Deploy em Produção

O repositório está preparado para uma estrutura self-hosted na Coolify com duas aplicações:

- frontend: `https://kaiofontenele.pro`
- backend: `https://api.kaiofontenele.pro`

Modelo recomendado de produção:

- frontend publicado a partir de `portfolio-app/Dockerfile`
- backend publicado a partir de `backend/Dockerfile`
- ambos os domínios apontando para a mesma VPS

## Author

**Kaio Fontenele**

- GitHub: [Kiwada](https://github.com/Kiwada)
- LinkedIn: [kaio-fontenele-139a151b1](https://www.linkedin.com/in/kaio-fontenele-139a151b1/)
- Email: [kaiocfontenele@gmail.com](mailto:kaiocfontenele@gmail.com)
