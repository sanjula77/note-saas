
# 🚀 Deployment Guide for Note-SaaS App

This guide walks you through deploying the Note-SaaS application.

---

## ✅ Prerequisites

Ensure the following are installed/configured before deployment:

- Node.js v18+
- MongoDB (Atlas instance)
- Docker & Docker Compose (for containerized setup)
- Git
- An EC2 instance (Ubuntu recommended)
- A registered domain (optional, for production)
- SSL certificate (via Let's Encrypt or custom)

---

## 📦 Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/note-saas.git
cd note-saas
```

---

## ⚙️ Setup `.env` Files

Create `.env` files in:

- `root/`
- `frontend/`
- `server/`

Example for `server/.env`:

```
PORT=3000
MONGO_URI=mongodb://localhost:27017/notes
JWT_SECRET=your_secret_key
```

Example for `frontend/.env`:

```
VITE_API_URL=http://localhost:3000/api
```

---

## 🧪 Development

```bash
# Start backend
cd server
npm install
npm run dev

# In another terminal, start frontend
cd frontend
npm install
npm run dev
```

Access the app at `http://localhost:5173`.

---

## 🚀 Production (Docker Compose)

```bash
docker-compose -f docker-compose.prod.yml up --build -d
```

This sets up:
- Backend on port `3000`
- Frontend on port `8080`
- MongoDB (if configured)

---

## 🔁 CI/CD Details

The app is configured with GitHub Actions to:

- Run lint, test, and audit checks on each push
- Automatically update dependencies weekly (`Automated Dependency Updates` workflow)
- Trigger Blue-Green deployment using Docker and NGINX proxy

Secrets used in CI:
- `GH_TOKEN`
- Any secrets for external services (e.g., Mongo Atlas, SMTP)

---

## 🧪 Smoke Testing Post-Deployment

- Visit `/` to ensure frontend loads.
- Test login/register.
- Check `/api/health` for backend health.

---

## 📩 Contact

For issues or deployment help, contact: `sanjulagihan94@gmail.com`
