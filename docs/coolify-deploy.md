# Deploy na Coolify

Este projeto foi preparado para deploy na Coolify com 2 recursos separados:

- frontend em `https://kaiofontenele.pro`
- backend em `https://api.kaiofontenele.pro`

## 1. Recurso do backend

- Tipo: `Application`
- Fonte: repositório Git `Kiwada/portfolio`
- Build Pack: `Dockerfile`
- Base Directory: `backend`
- Dockerfile Location: `backend/Dockerfile`
- Porta exposta: `5000`
- Domínio: `https://api.kaiofontenele.pro`
- Health Check Path: `/api/health`

### Variáveis do backend

- `PORT=5000`
- `GITHUB_USERNAME=Kiwada`
- `GITHUB_TOKEN=` opcional, recomendado para evitar limite baixo da API do GitHub
- `CONTACT_TO_EMAIL=kaiocfontenele@gmail.com`
- `CORS_ORIGIN=https://kaiofontenele.pro,https://www.kaiofontenele.pro`
- `EMAIL_USER=...`
- `EMAIL_PASS=...`

## 2. Recurso do frontend

- Tipo: `Application`
- Fonte: repositório Git `Kiwada/portfolio`
- Build Pack: `Dockerfile`
- Base Directory: `portfolio-app`
- Dockerfile Location: `portfolio-app/Dockerfile`
- Porta exposta: `80`
- Domínios:
  - `https://kaiofontenele.pro`
  - `https://www.kaiofontenele.pro`

### Build Arg do frontend

- `REACT_APP_API_URL=https://api.kaiofontenele.pro`

## 3. DNS na Hostinger

Configure os registros para a IP pública da VPS:

- `A` para `@` apontando para a IP da VPS
- `A` para `api` apontando para a IP da VPS
- `CNAME` para `www` apontando para `kaiofontenele.pro`

## 4. Ordem recomendada

1. Suba o backend e confirme `https://api.kaiofontenele.pro/api/health`
2. Suba o frontend com `REACT_APP_API_URL=https://api.kaiofontenele.pro`
3. Valide formulário, navegação e assets estáticos
