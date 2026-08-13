\# Enterprise Resource Planning (ERP) Management System



A modern, full-stack \*\*Enterprise Resource Planning (ERP) Management System\*\* built with the \*\*MERN stack\*\*. The system provides a centralized platform for managing employees, customers, orders, authentication, and business operations through secure RESTful APIs and a responsive web interface.



The project is designed with a modular architecture that allows additional ERP modules such as inventory, products, finance, reporting, and analytics to be integrated as the system grows.



\---



\## 🚀 Project Overview



The ERP Management System helps organizations centralize their core business operations in a single platform.



Instead of maintaining separate systems for employees, customers, and sales, the application provides interconnected modules that share a centralized MongoDB database.



\### Core Objectives



\* Centralize business information

\* Reduce manual data management

\* Improve operational efficiency

\* Provide role-based access control

\* Automate common business processes

\* Provide secure RESTful APIs

\* Enable future expansion into a complete ERP platform



\---



\## 🏗️ System Architecture



```text

┌─────────────────────────────────────────────┐

│                Client Layer                 │

│                                             │

│          React.js + Vite                    │

│          React Router                       │

│          Axios                              │

└──────────────────────┬──────────────────────┘

&#x20;                      │

&#x20;                      │ HTTP / REST API

&#x20;                      ▼

┌─────────────────────────────────────────────┐

│               Application Layer             │

│                                             │

│          Node.js + Express.js               │

│                                             │

│  ┌────────────┐  ┌──────────────────────┐  │

│  │ Middleware │  │ Controllers           │  │

│  │ JWT / RBAC │  │ Business Logic       │  │

│  └────────────┘  └──────────────────────┘  │

└──────────────────────┬──────────────────────┘

&#x20;                      │

&#x20;                      │ Mongoose ODM

&#x20;                      ▼

┌─────────────────────────────────────────────┐

│                 Data Layer                  │

│                                             │

│              MongoDB Atlas                  │

│                                             │

│  Users │ Employees │ Customers │ Orders     │

└─────────────────────────────────────────────┘

```



\---



\# ✨ Features



\## 🔐 Authentication \& Authorization



\* User registration

\* Secure password hashing with bcrypt

\* JWT-based authentication

\* Protected API endpoints

\* Role-based access control

\* Token-based session management



\### Supported Roles



| Role     | Description                          |

| -------- | ------------------------------------ |

| Admin    | Full system access                   |

| Manager  | Manage operational data              |

| Employee | Access permitted business operations |



\---



\## 👥 Employee Management



The employee management module allows authorized users to manage organizational employee records.



\### Features



\* Create employee

\* View all employees

\* View individual employee

\* Update employee information

\* Delete employee

\* Department management

\* Position management

\* Salary information



\---



\## 👤 Customer Management



Manage customers and business contacts from a centralized platform.



\### Features



\* Create customer

\* View customers

\* View individual customer

\* Update customer information

\* Delete customer

\* Company information

\* Contact information

\* Address management



\---



\## 🛒 Order Management



The order management module manages customer orders and order items.



\### Features



\* Create orders

\* View orders

\* View individual orders

\* Update orders

\* Delete orders

\* Multiple items per order

\* Automatic order total calculation

\* Customer association

\* Order notes



Example:



```json

{

&#x20; "customer": "customer\_id",

&#x20; "items": \[

&#x20;   {

&#x20;     "productName": "Laptop",

&#x20;     "quantity": 2,

&#x20;     "price": 50000

&#x20;   },

&#x20;   {

&#x20;     "productName": "Mouse",

&#x20;     "quantity": 5,

&#x20;     "price": 500

&#x20;   }

&#x20; ],

&#x20; "notes": "Urgent delivery"

}

```



The system automatically calculates:



```text

(2 × 50,000) + (5 × 500)



= 100,000 + 2,500



= 102,500

```



\---



\# 📦 ERP Modules



The current system focuses on the following modules:



```text

ERP Management System

│

├── Authentication

│   ├── Registration

│   └── Login

│

├── User Management

│   └── Role-Based Access

│

├── Employee Management

│   ├── Create

│   ├── Read

│   ├── Update

│   └── Delete

│

├── Customer Management

│   ├── Create

│   ├── Read

│   ├── Update

│   └── Delete

│

└── Order Management

&#x20;   ├── Create

&#x20;   ├── Read

&#x20;   ├── Update

&#x20;   └── Delete

```



\### Planned Modules



```text

├── Product Management

├── Inventory Management

├── Supplier Management

├── Invoice Management

├── Finance Management

├── Attendance Management

├── Leave Management

├── Dashboard Analytics

└── Business Reports

```



\---



\# 🛠️ Technology Stack



\## Frontend



\* React.js

\* Vite

\* React Router

\* Axios

\* JavaScript ES6+

\* Tailwind CSS



\## Backend



\* Node.js

\* Express.js

\* RESTful API

\* JWT

\* bcryptjs



\## Database



\* MongoDB

\* MongoDB Atlas

\* Mongoose



\## Development Tools



\* Git

\* GitHub

\* Postman

\* VS Code

\* npm



\---



\# 📁 Project Structure



```text

ERP-Management-System/

│

├── frontend/

│   │

│   ├── src/

│   │   ├── components/

│   │   ├── pages/

│   │   ├── services/

│   │   ├── context/

│   │   ├── hooks/

│   │   └── App.jsx

│   │

│   ├── package.json

│   └── vite.config.js

│

├── backend/

│   │

│   ├── config/

│   │   └── db.js

│   │

│   ├── controllers/

│   │   ├── authController.js

│   │   ├── employeeController.js

│   │   ├── customerController.js

│   │   └── orderController.js

│   │

│   ├── middleware/

│   │   ├── auth.js

│   │   └── authorize.js

│   │

│   ├── models/

│   │   ├── User.js

│   │   ├── Employee.js

│   │   ├── Customer.js

│   │   └── Order.js

│   │

│   ├── routes/

│   │   ├── authRoutes.js

│   │   ├── employees.js

│   │   ├── customers.js

│   │   └── orders.js

│   │

│   ├── .env

│   ├── .gitignore

│   ├── server.js

│   └── package.json

│

└── README.md

```



\---



\# 🔌 REST API



\## Authentication



Authentication endpoints are publicly accessible.



| Method | Endpoint             | Description         | Access |

| ------ | -------------------- | ------------------- | ------ |

| POST   | `/api/auth/register` | Register a new user | Public |

| POST   | `/api/auth/login`    | Authenticate user   | Public |



\---



\## Employees



| Method | Endpoint             | Description        | Access                  |

| ------ | -------------------- | ------------------ | ----------------------- |

| GET    | `/api/employees`     | Get all employees  | All authenticated users |

| GET    | `/api/employees/:id` | Get employee by ID | All authenticated users |

| POST   | `/api/employees`     | Create employee    | Admin, Manager          |

| PUT    | `/api/employees/:id` | Update employee    | Admin, Manager          |

| DELETE | `/api/employees/:id` | Delete employee    | Admin                   |



\---



\## Customers



| Method | Endpoint             | Description        | Access                  |

| ------ | -------------------- | ------------------ | ----------------------- |

| GET    | `/api/customers`     | Get all customers  | All authenticated users |

| GET    | `/api/customers/:id` | Get customer by ID | All authenticated users |

| POST   | `/api/customers`     | Create customer    | Admin, Manager          |

| PUT    | `/api/customers/:id` | Update customer    | Admin, Manager          |

| DELETE | `/api/customers/:id` | Delete customer    | Admin                   |



\---



\## Orders



| Method | Endpoint          | Description     | Access                   |

| ------ | ----------------- | --------------- | ------------------------ |

| GET    | `/api/orders`     | Get all orders  | All authenticated users  |

| GET    | `/api/orders/:id` | Get order by ID | All authenticated users  |

| POST   | `/api/orders`     | Create order    | Admin, Manager, Employee |

| PUT    | `/api/orders/:id` | Update order    | Admin, Manager           |

| DELETE | `/api/orders/:id` | Delete order    | Admin                    |



\---



\# 🔑 API Authentication



Protected endpoints require a JWT token.



Add the following HTTP header:



```text

Authorization: Bearer <JWT\_TOKEN>

```



Example:



```text

Authorization: Bearer eyJhbGciOiJIUzI1NiIs...

```



\---



\# 📋 API Examples



\## Register User



\### Request



```http

POST /api/auth/register

```



```json

{

&#x20; "name": "Admin User",

&#x20; "email": "admin@erp.com",

&#x20; "password": "Admin@123",

&#x20; "role": "admin"

}

```



\---



\## Login



\### Request



```http

POST /api/auth/login

```



```json

{

&#x20; "email": "admin@erp.com",

&#x20; "password": "Admin@123"

}

```



\### Response



```json

{

&#x20; "message": "Login successful",

&#x20; "token": "JWT\_TOKEN",

&#x20; "user": {

&#x20;   "id": "USER\_ID",

&#x20;   "name": "Admin User",

&#x20;   "email": "admin@erp.com",

&#x20;   "role": "admin"

&#x20; }

}

```



\---



\## Create Employee



\### Request



```http

POST /api/employees

```



```json

{

&#x20; "name": "John Smith",

&#x20; "email": "john@company.com",

&#x20; "phone": "9876543210",

&#x20; "department": "Sales",

&#x20; "position": "Sales Executive",

&#x20; "salary": 45000

}

```



\---



\## Create Customer



\### Request



```http

POST /api/customers

```



```json

{

&#x20; "name": "ABC Corp",

&#x20; "email": "contact@abc.com",

&#x20; "phone": "9123456789",

&#x20; "company": "ABC Corporation",

&#x20; "address": "123 Main Street"

}

```



\---



\## Create Order



\### Request



```http

POST /api/orders

```



```json

{

&#x20; "customer": "CUSTOMER\_ID",

&#x20; "items": \[

&#x20;   {

&#x20;     "productName": "Laptop",

&#x20;     "quantity": 2,

&#x20;     "price": 50000

&#x20;   },

&#x20;   {

&#x20;     "productName": "Mouse",

&#x20;     "quantity": 5,

&#x20;     "price": 500

&#x20;   }

&#x20; ],

&#x20; "notes": "Urgent delivery"

}

```



\---



\# 🔐 Role-Based Access Control



The application implements role-based authorization.



```text

&#x20;                    Authenticated User

&#x20;                           │

&#x20;                           ▼

&#x20;                      Check JWT

&#x20;                           │

&#x20;                           ▼

&#x20;                      Check Role

&#x20;                           │

&#x20;             ┌─────────────┼─────────────┐

&#x20;             ▼             ▼             ▼

&#x20;           Admin         Manager       Employee

&#x20;             │             │             │

&#x20;             ▼             ▼             ▼

&#x20;         Full Access   Limited Access  Operational

```



Example:



```javascript

router.delete(

&#x20;   "/:id",

&#x20;   auth,

&#x20;   authorize("admin"),

&#x20;   deleteEmployee

);

```



Only administrators can delete employees.



\---



\# 🗄️ Database Design



MongoDB collections:



```text

ERP Database

│

├── users

│

├── employees

│

├── customers

│

└── orders

```



\### User



```text

\_id

name

email

password

role

createdAt

updatedAt

```



\### Employee



```text

\_id

name

email

phone

department

position

salary

createdAt

updatedAt

```



\### Customer



```text

\_id

name

email

phone

company

address

createdAt

updatedAt

```



\### Order



```text

\_id

customer

items

total

notes

status

createdAt

updatedAt

```



\---



\# ⚙️ Installation



\## 1. Clone Repository



```bash

git clone https://github.com/DhanaM24/ERP-Management-System.git

```



```bash

cd ERP-Management-System

```



\---



\# 2. Backend Setup



```bash

cd backend

```



Install dependencies:



```bash

npm install

```



Create:



```text

.env

```



Add:



```env

PORT=5000



MONGO\_URI=your\_mongodb\_connection\_string



JWT\_SECRET=your\_jwt\_secret

```



Start development server:



```bash

npm run dev

```



Or:



```bash

npm start

```



Backend:



```text

http://localhost:5000

```



\---



\# 3. Frontend Setup



Open another terminal:



```bash

cd frontend

```



Install dependencies:



```bash

npm install

```



Start development server:



```bash

npm run dev

```



Frontend:



```text

http://localhost:5173

```



\---



\# 🧪 API Testing



The backend APIs can be tested using:



\* Postman

\* Thunder Client

\* Insomnia



Recommended testing sequence:



```text

1\. Register User

&#x20;      ↓

2\. Login

&#x20;      ↓

3\. Copy JWT Token

&#x20;      ↓

4\. Add Bearer Token

&#x20;      ↓

5\. Create Employee

&#x20;      ↓

6\. Get Employees

&#x20;      ↓

7\. Update Employee

&#x20;      ↓

8\. Delete Employee

```



\---



\# 🔒 Security



The application follows several security practices:



\* Password hashing using bcrypt

\* JWT authentication

\* Protected API routes

\* Role-based authorization

\* Environment variables for secrets

\* CORS configuration

\* Mongoose schema validation

\* Sensitive configuration excluded from Git



> Never commit `.env` files, database credentials, API keys, or JWT secrets to GitHub.



\---



\# 📈 Future Enhancements



The system is designed to scale into a more complete ERP platform.



\### Phase 1 — Core ERP



\* \[x] Authentication

\* \[x] JWT authorization

\* \[x] Role-based access

\* \[x] Employee management

\* \[x] Customer management

\* \[x] Order management



\### Phase 2 — Business Operations



\* \[ ] Product management

\* \[ ] Inventory management

\* \[ ] Supplier management

\* \[ ] Stock tracking

\* \[ ] Invoice generation



\### Phase 3 — Analytics



\* \[ ] Admin dashboard

\* \[ ] Sales statistics

\* \[ ] Employee statistics

\* \[ ] Inventory statistics

\* \[ ] Revenue charts

\* \[ ] Business reports



\### Phase 4 — Enterprise Features



\* \[ ] Audit logs

\* \[ ] Notifications

\* \[ ] Email integration

\* \[ ] File/document management

\* \[ ] Advanced search

\* \[ ] Pagination

\* \[ ] Filtering and sorting

\* \[ ] Export reports to PDF/Excel



\---



\# 🧑‍💻 Development Roadmap



```text

Phase 1

Backend Foundation

&#x20;       │

&#x20;       ├── Express

&#x20;       ├── MongoDB

&#x20;       └── Mongoose

&#x20;       ↓

Phase 2

Authentication

&#x20;       │

&#x20;       ├── Register

&#x20;       ├── Login

&#x20;       ├── JWT

&#x20;       └── RBAC

&#x20;       ↓

Phase 3

ERP Modules

&#x20;       │

&#x20;       ├── Employees

&#x20;       ├── Customers

&#x20;       └── Orders

&#x20;       ↓

Phase 4

Frontend

&#x20;       │

&#x20;       ├── Dashboard

&#x20;       ├── Tables

&#x20;       ├── Forms

&#x20;       └── Authentication UI

&#x20;       ↓

Phase 5

Advanced ERP

&#x20;       │

&#x20;       ├── Inventory

&#x20;       ├── Products

&#x20;       ├── Reports

&#x20;       └── Analytics

&#x20;       ↓

Phase 6

Deployment

&#x20;       │

&#x20;       ├── Frontend

&#x20;       ├── Backend

&#x20;       └── MongoDB Atlas

```



\---



\# 🎯 Learning Objectives



This project demonstrates practical knowledge of:



\* Full-stack web application development

\* MERN architecture

\* REST API development

\* CRUD operations

\* MongoDB database design

\* Mongoose ODM

\* Authentication

\* JWT

\* Role-based authorization

\* Middleware

\* MVC architecture

\* API testing

\* Git and GitHub

\* Environment configuration

\* Deployment



\---



\# 📌 Project Status



\*\*Current Status:\*\* 🚧 In Development



\### Completed



\* Backend architecture

\* MongoDB connection

\* User authentication

\* JWT authorization

\* Role-based access control

\* Employee API

\* Customer API

\* Order API



\### Currently Working On



\* React frontend

\* Admin dashboard

\* ERP module interfaces

\* Reports and analytics



\---



\# 👨‍💻 Author



\*\*Dhananji Mansala Pallegedara\*\*



BSc (Hons) in Information Technology

SLIIT



\### Technologies



`React` `Node.js` `Express.js` `MongoDB` `JavaScript` `JWT` `REST API` `Git`



\---



\## ⭐ Project



If you find this project useful, consider giving the repository a ⭐ on GitHub.



\*\*Built as a practical Full-Stack MERN ERP application.\*\*



