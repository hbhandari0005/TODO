
# MERN Todo App 
A full-stack **Todo application** built with **MongoDB, Express, React, Node.js (MERN)**, styled using **Tailwind CSS**.  
This app supports **CRUD operations**: Create, Read, Update, Delete todos.

---

## 📂 Project Structure

```
TODO/
├─ backend/
│  ├─ models/
│  │   └─ Todo.js        # Mongoose model
│  ├─ db.js              # MongoDB connection
│  ├─ server.js          # Express server
│  ├─ package.json
│  └─ .env               # Environment variables
├─ frontend/
│  ├─ src/
│  │   ├─ App.js         # React frontend
│  │   └─ index.css      # Tailwind CSS
│  └─ package.json
└─ README.md
```

---

## ⚙️ Instructions

### 1️⃣ Clone the repository
```bash
git clone https://github.com/hbhandari0005/TODO
cd TODO
```

---

### 2️⃣ Setup Backend
1. Navigate to the backend folder:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in `backend/` with your MongoDB URI:
```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

4. Start the backend server:
```bash
npm run dev
```
- Backend runs on `http://localhost:5000`

---

### 3️⃣ Setup Frontend
1. Navigate to the frontend folder:
```bash
cd ../frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in `frontend/` with your backend URL:
```
VITE_API_URL=http://localhost:5000
```

4. Start the frontend:
```bash
npm start
```
- Frontend runs on `http://localhost:3000`

---

## 🔹 API Endpoints

| Method | Endpoint        | Description                     |
|--------|----------------|---------------------------------|
| POST   | /todos          | Add a new todo                  |
| GET    | /todos          | Get all todos                   |
| PUT    | /todos/:id      | Update todo (text/completed)    |
| DELETE | /todos/:id      | Delete todo                     |

---

## 🔹 Features

- Add, view, update, and delete todos.  
- Mark todos as completed.  
- Clean and responsive UI with Tailwind CSS.  
- Modular backend: `models`, `db.js`, `server.js`.  
- Environment variable support for MongoDB URI and PORT.  

---

## 🔹 Technologies Used

- **Backend:** Node.js, Express.js, MongoDB, Mongoose  
- **Frontend:** React.js, Tailwind CSS, Axios  
- **Others:** dotenv, CORS, nodemon  

---

## 🔹 Notes

- Ensure **Node.js v18+** is installed.  
- MongoDB must be running locally or via Atlas.  
- Always run `npm run dev` **from the backend folder** to avoid module path errors.  

---

## 🔹 Author

**Harshit Bhandari**  
Email: hbhandari0005@gmail.com  
GitHub: [https://github.com/hbhandari0005](https://github.com/hbhandari0005)

---

## 🔹 License

This project is open-source and free to use.
