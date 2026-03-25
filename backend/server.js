const express = require('express');
const cors = require('cors');
const axios = require('axios');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME || 'Kiwada';
const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'kaiocfontenele@gmail.com';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || '';
const CORS_ORIGIN = process.env.CORS_ORIGIN || '';
const allowedOrigins = CORS_ORIGIN.split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);
const githubHeaders = {
  Accept: 'application/vnd.github+json',
  'User-Agent': 'portfolio-backend',
  ...(GITHUB_TOKEN ? { Authorization: `Bearer ${GITHUB_TOKEN}` } : {})
};


app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.length === 0 || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error('Origin not allowed by CORS'));
    },
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type']
  })
);
app.use(express.json({ limit: '1mb' }));

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'portfolio-backend' });
});


app.get('/api/github/repos', async (req, res) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${GITHUB_USERNAME}/repos`, {
      params: {
        sort: 'updated',
        per_page: 6
      },
      headers: githubHeaders
    });

    const repos = response.data.map(repo => ({
      id: repo.id,
      name: repo.name,
      description: repo.description,
      html_url: repo.html_url,
      language: repo.language,
      stargazers_count: repo.stargazers_count,
      forks_count: repo.forks_count,
      updated_at: repo.updated_at,
      topics: repo.topics
    }));

    res.json(repos);
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    res.status(500).json({ error: 'Failed to fetch repositories' });
  }
});

// GitHub Stats Route
app.get('/api/github/stats', async (req, res) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${GITHUB_USERNAME}`, {
      headers: githubHeaders
    });

    const stats = {
      public_repos: response.data.public_repos,
      followers: response.data.followers,
      following: response.data.following,
      bio: response.data.bio,
      location: response.data.location,
      avatar_url: response.data.avatar_url,
      name: response.data.name
    };

    res.json(stats);
  } catch (error) {
    console.error('Error fetching GitHub stats:', error);
    res.status(500).json({ error: 'Failed to fetch GitHub stats' });
  }
});


app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return res.status(503).json({ error: 'Email service is not configured' });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: email,
      to: CONTACT_TO_EMAIL,
      subject: `Portfolio Contact: ${name}`,
      html: `
        <h2>Nova mensagem do formulário de contato</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message}</p>
      `,
      replyTo: email
    };

    await transporter.sendMail(mailOptions);

    console.log('Contact form submission sent to email:', { name, email });

    res.json({ success: true, message: 'Message received successfully' });
  } catch (error) {
    console.error('Error processing contact form:', error);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
