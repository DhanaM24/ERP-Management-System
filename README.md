# 🏢 Enterprise Resource Planning (ERP) Management System

A modern **full-stack ERP Management System** built with the **MERN Stack**. The system centralizes employee, customer, order, and authentication management through secure RESTful APIs and a responsive React interface.

🚧 **Status:** In Development

---

## ✨ Features

### 🔐 Authentication & Authorization

* User registration & login
* JWT authentication
* Password hashing with bcrypt
* Role-Based Access Control (RBAC)
* Protected API routes

**Roles:** `Admin` · `Manager` · `Employee`

### 👥 Employee Management

* Create, view, update & delete employees
* Department & position management
* Salary information

### 👤 Customer Management

* Customer CRUD operations
* Company & contact information
* Address management

### 🛒 Order Management

* Create & manage orders
* Multiple items per order
* Automatic total calculation
* Customer association
* Order notes

---

## 🛠️ Tech Stack

**Frontend**

* ⚛️ React.js
* ⚡ Vite
* 🧭 React Router
* 📡 Axios
* 🎨 Tailwind CSS

**Backend**

* 🟢 Node.js
* 🚂 Express.js
* 🔑 JWT
* 🔒 bcryptjs
* 🌐 REST API

**Database**

* 🍃 MongoDB
* ☁️ MongoDB Atlas
* 📦 Mongoose

**Tools**

* Git & GitHub
* Postman
* VS Code
* npm

---

## 🏗️ Architecture

```text
React + Vite
     │
     │ REST API
     ▼
Node.js + Express
     │
     ├── JWT Authentication
     ├── RBAC Middleware
     └── Controllers
     │
     ▼
MongoDB Atlas
     ├── Users
     ├── Employees
     ├── Customers
     └── Orders
```

---

## 📁 Project Structure

```text
ERP-Management-System/
│
├── frontend/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── services/
│       ├── context/
│       └── App.jsx
│
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── .env
│
└── README.md
```

---

## 🔌 REST API

### 🔐 Authentication

| Method | Endpoint             | Access |
| ------ | -------------------- | ------ |
| POST   | `/api/auth/register` | Public |
| POST   | `/api/auth/login`    | Public |

### 👥 Employees

| Method | Endpoint             | Access         |
| ------ | -------------------- | -------------- |
| GET    | `/api/employees`     | Authenticated  |
| GET    | `/api/employees/:id` | Authenticated  |
| POST   | `/api/employees`     | Admin, Manager |
| PUT    | `/api/employees/:id` | Admin, Manager |
| DELETE | `/api/employees/:id` | Admin          |

### 👤 Customers

| Method | Endpoint             | Access         |
| ------ | -------------------- | -------------- |
| GET    | `/api/customers`     | Authenticated  |
| GET    | `/api/customers/:id` | Authenticated  |
| POST   | `/api/customers`     | Admin, Manager |
| PUT    | `/api/customers/:id` | Admin, Manager |
| DELETE | `/api/customers/:id` | Admin          |

### 🛒 Orders

| Method | Endpoint          | Access                   |
| ------ | ----------------- | ------------------------ |
| GET    | `/api/orders`     | Authenticated            |
| GET    | `/api/orders/:id` | Authenticated            |
| POST   | `/api/orders`     | Admin, Manager, Employee |
| PUT    | `/api/orders/:id` | Admin, Manager           |
| DELETE | `/api/orders/:id` | Admin                    |

---

## 🔑 API Authentication

Protected endpoints require a JWT token:

```http
Authorization: Bearer <JWT_TOKEN>
```

---

## ⚙️ Installation

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/DhanaM24/ERP-Management-System.git
cd ERP-Management-System
```

### 2️⃣ Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

Start the backend:

```bash
npm run dev
```

Backend: `http://localhost:5000`

### 3️⃣ Frontend Setup

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend: `http://localhost:5173`

---

## 🧪 API Testing

Recommended testing flow:

```text
Register
   ↓
Login
   ↓
Get JWT Token
   ↓
Add Bearer Token
   ↓
Test Employee / Customer / Order APIs
```

APIs can be tested using **Postman**, **Thunder Client**, or **Insomnia**.

---

## 🔒 Security

* 🔑 JWT authentication
* 🔐 bcrypt password hashing
* 🛡️ Role-based authorization
* 🔒 Protected routes
* 🌱 Environment variables
* ✅ Mongoose validation
* 🚫 `.env` excluded from Git

> ⚠️ Never commit database credentials, API keys, or JWT secrets to GitHub.

---

## 🚀 Future Enhancements

* 📦 Product Management
* 📊 Inventory Management
* 🚚 Supplier Management
* 🧾 Invoice Management
* 💰 Finance Management
* 📈 Dashboard & Analytics
* 📑 Business Reports
* 🔔 Notifications
* 📄 PDF/Excel Reports
* 🔍 Advanced Search & Filtering

---

## 🎯 Project Goals

This project demonstrates practical experience in:

`MERN Stack` · `REST APIs` · `CRUD` · `MongoDB` · `JWT` · `RBAC` · `MVC` · `Git & GitHub`

---

## 👨‍💻 Author

**Dhananji Mansala Pallegedara**

🎓 BSc (Hons) in Information Technology — SLIIT

💻 **Technologies:**
`React` `Node.js` `Express.js` `MongoDB` `JavaScript` `JWT` `REST API`

---

⭐ If you find this project useful, consider giving it a **star** on GitHub.

**Built as a practical Full-Stack MERN ERP application.**
