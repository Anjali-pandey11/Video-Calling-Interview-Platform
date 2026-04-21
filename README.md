# 🧠 TalentIQ — Full-Stack Interview Platform

<div align="center">

![TalentIQ Banner](https://img.shields.io/badge/TalentIQ-Interview%20Platform-6366f1?style=for-the-badge&logo=react&logoColor=white)

[![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)](https://reactjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=mongodb&logoColor=white)](https://mongodb.com/)
[![Express](https://img.shields.io/badge/Express.js-000000?style=flat-square&logo=express&logoColor=white)](https://expressjs.com/)
[![Clerk](https://img.shields.io/badge/Clerk-6C47FF?style=flat-square&logo=clerk&logoColor=white)](https://clerk.com/)
[![Stream](https://img.shields.io/badge/Stream-005FFF?style=flat-square&logo=stream&logoColor=white)](https://getstream.io/)

A real-time technical interview platform with **live video calls**, **collaborative code editor**, and **AI-powered feedback** — built with the MERN stack.

[🚀 Live Demo](#) • [📺 Tutorial Video](https://youtu.be/PJ0ARnSKfgw) • [🐛 Report Bug](../../issues) • [💡 Request Feature](../../issues)

</div>

---

## 📸 Preview

> A full-featured platform to conduct, manage, and evaluate technical interviews in real time.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🧑‍💻 **VSCode-Powered Code Editor** | In-browser code editor with syntax highlighting |
| 🔐 **Authentication via Clerk** | Secure sign-up/sign-in with Clerk |
| 🎥 **1-on-1 Video Interview Rooms** | Real-time video calls powered by Stream Video |
| 🧭 **Dashboard with Live Stats** | Track interviews, results, and performance |
| 🔊 **Mic, Camera, Screen Share & Recording** | Full media controls during interviews |
| 💬 **Real-time Chat Messaging** | In-call messaging via Stream Chat |
| ⚙️ **Secure Code Execution** | Run code in an isolated sandbox environment |
| 🎯 **Auto Feedback System** | Pass/Fail verdict based on test case results |
| 🎉 **Confetti & Notifications** | Celebrate success; get notified on failure |
| 🧩 **Practice Problems Page** | Solo coding mode for self-practice |
| 🔒 **Room Locking** | Restricts rooms to only 2 participants |
| 🧠 **Background Jobs with Inngest** | Async task processing for scalability |
| 🧰 **REST API** | Clean API built with Node.js & Express |
| ⚡ **TanStack Query** | Efficient data fetching, caching & sync |

---

## 🛠️ Tech Stack

### Frontend
- **React.js** — UI framework
- **Tailwind CSS + DaisyUI** — Styling
- **TanStack Query** — Data fetching & caching
- **Stream Video & Chat SDK** — Video calls and messaging
- **Clerk** — Authentication UI components

### Backend
- **Node.js + Express.js** — REST API server
- **MongoDB + Mongoose** — Database
- **Clerk SDK** — Server-side auth verification
- **Stream SDK** — Video/chat token generation
- **Inngest** — Background job processing

---

## 📁 Project Structure

```
talent-iq/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middleware/
│   │   └── inngest/
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   └── lib/
│   └── index.html
├── package.json
└── README.md
```

---

## ⚙️ Environment Variables Setup

### Backend — `/backend/.env`

```env
PORT=3000
NODE_ENV=development

# MongoDB
DB_URL=your_mongodb_connection_url

# Inngest
INNGEST_EVENT_KEY=your_inngest_event_key
INNGEST_SIGNING_KEY=your_inngest_signing_key

# Stream
STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret

# Clerk
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Client
CLIENT_URL=http://localhost:5173
```

### Frontend — `/frontend/.env`

```env
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_API_URL=http://localhost:3000/api
VITE_STREAM_API_KEY=your_stream_api_key
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) v18+
- [MongoDB](https://mongodb.com/) (local or Atlas)
- Accounts on [Clerk](https://clerk.com/), [Stream](https://getstream.io/), and [Inngest](https://www.inngest.com/)

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/burakorkmez/talent-IQ.git
cd talent-iq
```

**2. Install root dependencies (if any)**
```bash
npm install
```

**3. Run the Backend**
```bash
cd backend
npm install
npm run dev
```

**4. Run the Frontend** *(in a new terminal)*
```bash
cd frontend
npm install
npm run dev
```

**5. Open in browser**
```
http://localhost:517


