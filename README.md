# 🧠 AIGITASDE – AI Mental Well-being Platform  

## 🌟 Overview  

**AIGITASDE** is a full-stack **AI-powered mental well-being web platform** designed to help users track emotions, improve mental health, and receive intelligent support.  

The platform combines:  
- ⚡ **FastAPI + Pydantic AI** for a high-performance backend  
- 🎨 **React.js** for a modern, responsive frontend  
- 🤖 **AI-driven insights** for emotional guidance and self-care  

This project aims to make mental health support **accessible, interactive, and personalized** through technology.

---

## 🚀 Key Features  

- 🤖 AI-powered emotional support  
- 📊 Mood tracking & mental health insights  
- ⚡ Fast REST API with FastAPI  
- 🔐 Strong validation using Pydantic  
- 🌐 Responsive web interface (React)  
- 🧘 Personalized well-being suggestions  
- 📈 Scalable architecture  

---

## 🛠 Tech Stack  

### Backend  
- Python  
- FastAPI  
- Pydantic AI  
- REST APIs  

### Frontend  
- React.js  
- HTML  
- CSS  
- JavaScript  

---



## ⚙️ Installation & Setup  

### 1️⃣ Clone Repository  

```bash
git clone https://github.com/param-gith/AIGITASDE.git
cd AIGITASDE
http://127.0.0.1:8000
cd frontend
npm install
npm start
http://localhost:3000


AIGITASDE/
│
├── backend/                     # FastAPI Backend
│   ├── app/
│   │   ├── main.py              # Entry point
│   │   ├── config.py            # App configuration
│   │   ├── database.py          # DB connection
│   │   │
│   │   ├── models/              # Pydantic models
│   │   │   └── user.py
│   │   │
│   │   ├── routes/              # API routes
│   │   │   ├── auth.py
│   │   │   ├── mood.py
│   │   │   └── wellbeing.py
│   │   │
│   │   ├── services/            # AI logic & business layer
│   │   │   └── ai_service.py
│   │   │
│   │   └── utils/               # Helper functions
│   │
│   ├── requirements.txt
│   └── .env
│
├── frontend/                    # React Frontend
│   ├── public/
│   └── src/
│       ├── assets/              # Images & icons
│       ├── components/          # Reusable UI components
│       │   ├── Navbar.jsx
│       │   ├── Footer.jsx
│       │   └── MoodCard.jsx
│       │
│       ├── pages/               # App screens
│       │   ├── Home.jsx
│       │   ├── Login.jsx
│       │   ├── Dashboard.jsx
│       │   └── Tracker.jsx
│       │
│       ├── services/            # API calls
│       │   └── api.js
│       │
│       ├── App.js
│       └── index.js
│
├── .gitignore
├── README.md
└── package.json

