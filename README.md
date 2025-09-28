# MERN Todo App 

A full-stack **Todo application** built with **MongoDB, Express, React, Node.js (MERN)**, styled using **Tailwind CSS**.  
This app supports **CRUD operations**: Create, Read, Update, Delete todos.

---

## 🔹 Features

- Add, view, update, and delete todos.
- Mark todos as completed.
- Clean UI with Tailwind CSS.
- Backend structured with **models**, **routes**, and **DB connection**.
- Environment variables support for MongoDB URI and server port.

---

## 🔹 Project Structure

TODO/
│
├─ backend/
│  ├─ models/
│  │   └─ Todo.js        # Mongoose model
│  ├─ db.js              # MongoDB connection
│  ├─ server.js          # Express server
│  ├─ package.json
│
├─ frontend/
│  ├─ src/
│  │   ├─ component/
│  │   │    └─ Loading.jsx
│  │   │    └─ TodoBody.jsx
│  │   │    └─ TodoList.jsx
│  │   └─ App.jsx        # React app
│  │   └─ index.css      # Tailwind CSS
│  └─ package.json
│
└─ README.md



---

## 🔹 Prerequisites

- Node.js installed (v18+ recommended)
- MongoDB installed locally or MongoDB Atlas account
- npm (Node Package Manager)

---

## 🔹 Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/hbhandari0005/TODO
cd TODO

cd backend
npm i
Put your mongoDB URI in .env file
npm run dev

cd frontend
npm i
Put your backend URl (http://localhost:5000) in .env file
npm run dev














