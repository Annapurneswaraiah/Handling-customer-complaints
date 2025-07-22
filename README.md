
# 🛠️ **ResolveNow: Your Platform for Online Complaints**

ResolveNow is a full-stack web application that streamlines the process of lodging, tracking, and resolving complaints online. It offers a modern interface for users, agents, and admins, built with the MERN stack and powered by real-time features.

---

## 🚀 **Demo**

🎥 Watch the full video demo here:



https://github.com/user-attachments/assets/a3911806-9b8e-44b8-978c-d5d8dff18df8



## 📚 **Table of Contents**

* [Features](#features)
* [Tech Stack](#tech-stack)
* [Getting Started](#getting-started)
* [Project Structure](#project-structure)
* [Application Flow](#application-flow)
* [Database](#database)
* [Architecture](#architecture)
* [Screenshots](#screenshots)
* [Demo Highlights](#demo-highlights)
* [Contributors](#contributors)

---

## ✅ **Features**

### 👤 User

* Register & Login
* Submit complaints with detailed information & attachments
* Track complaint status in real time
* Chat with the assigned agent
* Manage profile

### 🧑‍💼 Agent

* View complaints assigned by the admin
* Update complaint status
* Communicate with users

### 👨‍💼 Admin

* Assign complaints to agents based on expertise/workload
* Monitor user and agent activity
* Manage all platform data and policies

---

## 🧰 **Tech Stack**

| Layer           | Technology                            |
| --------------- | ------------------------------------- |
| Frontend        | React.js, Bootstrap, Material UI, AOS |
| Backend         | Node.js, Express.js                   |
| Database        | MongoDB, Mongoose                     |
| Real-time       | Socket.io, WebRTC *(planned)*         |
| Version Control | Git, GitHub                           |

---

## 🛠️ **Getting Started**

### 📦 Prerequisites

* Node.js & npm: [Download](https://nodejs.org/en/download)
* MongoDB (local or Atlas): [Download](https://www.mongodb.com/try/download/community)
* Git: [Download](https://git-scm.com/downloads)

### 🧑‍💻 Installation

```bash
# Clone the repository
git clone https://github.com/M-vinay17/ResolveNow-Your-Platform-for-Online-Complaints

# Backend setup
cd ResolveNow/backend
npm install

# Frontend setup
cd ../frontend
npm install

# Run backend
cd ../backend
npm start

# Run frontend
cd ../frontend
npm start
```

---

## 🗂️ **Project Structure**

```
ResolveNow/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── db-config.js
├── frontend/
│   ├── components/
│   ├── pages/
│   └── App.jsx
```

---

## 🔄 **Application Flow**

### 👥 Customer

1. Register/Login
2. Submit complaint
3. Track status
4. Chat with agent
5. View updates

### 🧑‍💼 Agent

1. Login
2. View assigned complaints
3. Chat with users
4. Update status

### 👨‍💼 Admin

1. Monitor all complaints
2. Assign complaints
3. Manage users & agents

---

## 🧾 **Database Schema**

### 🧍 User Schema

* name, email, password, phone, userType

### 📮 Complaint Schema

* userId, name, address, city, comment, status

### 📌 Assigned Complaint Schema

* agentId, complaintId, status

### 💬 Message Schema

* name, message, complaintId

📷 ER Diagram is available in the `/database/ERD.png`

---

## 🏗️ **Architecture Overview**

* **Frontend:** React + Axios for API calls
* **Backend:** Express.js handles routes & logic
* **Database:** MongoDB with Mongoose ODM
* **Real-Time:** Socket.io + WebRTC (upcoming)

📶 Client-server architecture with RESTful APIs





## 🎯 **Demo Highlights**

✔️ Full authentication system
✔️ Dynamic complaint submission & status tracking
✔️ Real-time agent interaction (coming soon)
✔️ Admin dashboard for complaint routing
✔️ Clean UI with animations and responsive design









