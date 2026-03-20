# 🚀 Guilherme Mendes Portfolio

Professional portfolio built with React, TypeScript, and Node.js, showcasing projects, skills, and experiences of a Full Stack Developer.

## ✨ Features

- 🌓 **Dark/Light Mode**: Toggle between light and dark themes
- 🌍 **Internationalization**: Support for Portuguese and English
- 📱 **Responsive**: Adaptive design for all devices
- ⚡ **Performance**: Optimized with lazy loading and code splitting
- 🎨 **Animations**: Smooth transitions with Framer Motion
- 🔗 **GitHub Integration**: Automatic repository display
- 📧 **Contact Form**: Message sending system

## 🛠️ Technologies

### Frontend
- React 18 with TypeScript
- Framer Motion (animations)
- i18next (internationalization)
- Axios (HTTP requests)
- React Icons

### Backend
- Node.js with Express
- CORS for cross-origin
- GitHub API integration
- Nodemon for development

## 📦 Installation

### Prerequisites
- Node.js 14 or higher
- npm or yarn

### Frontend

```bash
cd portfolio-app
npm install
npm start
```

Frontend will be available at `http://localhost:3000`

### Backend

```bash
cd backend
npm install
npm run dev
```

Backend will be available at `http://localhost:5000`

## 🚀 Production Build

### Frontend
```bash
cd portfolio-app
npm run build
```

Production files will be in the `build/` folder

## 📁 Project Structure

```
Portfolio/
├── portfolio-app/          # React Frontend
│   ├── public/
│   └── src/
│       ├── components/     # React Components
│       ├── contexts/       # Context API
│       ├── i18n.ts        # Language configuration
│       ├── App.tsx
│       └── index.tsx
│
└── backend/               # Node.js Backend
    ├── server.js         # Express Server
    └── package.json
```

## 🌐 Free Deployment

### Option 1: Vercel (Recommended)

#### Frontend:
1. Create an account at [vercel.com](https://vercel.com)
2. Install CLI: `npm i -g vercel`
3. In the `portfolio-app` directory:
   ```bash
   vercel
   ```
4. Follow the terminal instructions

#### Backend:
1. In the `backend` directory:
   ```bash
   vercel
   ```
2. Configure environment variables in the Vercel dashboard

### Option 2: Netlify (Frontend) + Render (Backend)

#### Frontend on Netlify:
1. Create an account at [netlify.com](https://netlify.com)
2. Connect your GitHub repository
3. Configure:
   - Build command: `npm run build`
   - Publish directory: `build`

#### Backend on Render:
1. Create an account at [render.com](https://render.com)
2. Create a new "Web Service"
3. Connect your repository
4. Configure:
   - Build command: `npm install`
   - Start command: `npm start`

### Option 3: GitHub Pages (Static Frontend Only)

1. In the frontend `package.json`, add:
   ```json
   "homepage": "https://your-username.github.io/your-repo"
   ```

2. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

3. Add scripts in `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```

4. Run:
   ```bash
   npm run deploy
   ```

### Option 4: Railway (Frontend + Backend)

1. Create an account at [railway.app](https://railway.app)
2. Connect your GitHub repository
3. Railway will automatically detect Node.js
4. Configure environment variables

## 🔧 Configuration

### Environment Variables (Backend)

Create a `.env` file in the `backend` folder:

```env
PORT=5000
```

### Update Backend URL (Frontend)

In `src/components/Projects.tsx` and `src/components/Contact.tsx`, update the API URL:

```typescript
// Development
const response = await axios.get('http://localhost:5000/api/github/repos');

// Production (after backend deployment)
const response = await axios.get('https://your-backend.vercel.app/api/github/repos');
```

## 📱 Main Features

### 1. Theme System
- Toggle between light and dark mode
- Preference saved in localStorage
- Smooth transitions between themes

### 2. Internationalization
- Switch between Portuguese and English
- Complete interface translations
- Automatic browser language detection

### 3. GitHub Integration
- Automatic repository display
- Profile statistics
- Direct links to projects

### 4. Animations
- Scroll animations with Framer Motion
- Smooth transitions between sections
- Interactive hover effects

## 🎨 Customization

### Colors
Edit CSS variables in `src/index.css`:

```css
:root {
  --primary-color: #6366f1;
  --primary-hover: #4f46e5;
  /* ... other colors */
}
```

### Content
Update translations in `src/i18n.ts` to customize texts.

### Projects
Projects are automatically loaded from GitHub. To highlight specific projects, edit `src/components/Projects.tsx`.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Guilherme Mendes**
- GitHub: [@Guiilhermendes](https://github.com/Guiilhermendes)
- LinkedIn: [guilhermemnds](https://www.linkedin.com/in/guilhermemnds/)
- Email: guilhermemendeds@gmail.com

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

⭐ If this project helped you, consider giving it a star!
