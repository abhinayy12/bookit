# BookIt — Experiences & Slots

Full-stack assignment: browse experiences, view availability, apply promo codes, and complete bookings end-to-end.

## Live Links
- **Frontend (Vercel):** https://bookit-ruby-nu.vercel.app
- **Backend (Render):** https://bookit-4nh6.onrender.com
- **API Examples:**
  - GET /experiences → https://bookit-4nh6.onrender.com/experiences
  - GET /experiences/:id
  - POST /promo/validate
  - POST /bookings

## Stack
- **Frontend:** Next.js + TypeScript + TailwindCSS
- **Backend:** Node.js (Express), MongoDB (Mongoose)
- **Hosting:** Vercel (FE), Render (BE)
- **Images:** Unsplash/Pexels (royalty-free)

## Local Setup

### Backend
```bash
cd server
npm install
# create .env
# MONGO_URI=MONGO_URI=mongodb+srv://mabhinay136:Il87UL1KGsCM9ih9@cluster0.opx6hio.mongodb.net/?appName=Cluster0
# PORT=5000
npm run dev
# seed once
node data/seed.js

Frontend
# from project root (Next.js)
npm install
# create .env.local
# NEXT_PUBLIC_API_BASE=https://bookit-4nh6.onrender.com
npm run dev

Deploy
Backend (Render)

Build: npm install

Start: npm start

Env:

MONGO_URI=...

FRONTEND_ORIGIN=https://bookit-ruby-nu.vercel.app

Frontend (Vercel)

Env:

NEXT_PUBLIC_API_BASE=https://bookit-4nh6.onrender.com

API

GET /experiences → list

GET /experiences/:id → details + days/slots

POST /promo/validate → { code, price, qty } → { valid, discount }

POST /bookings → { expId, name, email, date, time, qty, total } → { ref }

Notes

Validation: basic (name/email), sold-out guard on server, promo codes: SAVE10, FLAT100.

CORS: locked to frontend origin in production.

Attribution: Images sourced from Unsplash/Pexels for demo only.