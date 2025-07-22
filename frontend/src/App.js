import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// 🔹 Common
import Home from './components/common/Home';
import About from './components/common/About';
import Login from './components/common/Login';
import SignUp from './components/common/SignUp';
import ChatWindow from './components/common/ChatWindow';
import FooterC from './components/common/FooterC';

// 🔹 User
import Complaint from './components/user/Complaint';
import Status from './components/user/Status';
import HomePage from './components/user/HomePage';

// 🔹 Admin
import AdminHome from './components/admin/AdminHome';
import AgentInfo from './components/admin/AgentInfo';
import AdminDashboard from './components/admin/AdminDashboard';
import UserInfo from './components/admin/UserInfo';
import AccordionAdmin from './components/admin/AccordionAdmin';

// 🔹 Agent
import AgentHome from './components/agent/AgentHome';

// 🔐 Role-based PrivateRoute
const PrivateRoute = ({ children, role }) => {
  const userType = localStorage.getItem('userType'); // 'admin', 'agent', or 'user'
  return userType === role ? children : <Navigate to="/login" replace />;
};

function App() {
  return (
    <div>
      <Routes>
        {/* ✅ Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* 👤 User Routes */}
        <Route path="/user/home" element={<PrivateRoute role="user"><HomePage /></PrivateRoute>} />
        <Route path="/user/complaint" element={<PrivateRoute role="user"><Complaint /></PrivateRoute>} />
        <Route path="/user/status" element={<PrivateRoute role="user"><Status /></PrivateRoute>} />

        {/* 👨‍💼 Admin Routes */}
        <Route path="/admin/home" element={<PrivateRoute role="admin"><AdminHome /></PrivateRoute>} />
        <Route path="/admin/agents" element={<PrivateRoute role="admin"><AgentInfo /></PrivateRoute>} />
        <Route path="/admin/users" element={<PrivateRoute role="admin"><UserInfo /></PrivateRoute>} />
        <Route path="/admin/accordion" element={<PrivateRoute role="admin"><AccordionAdmin /></PrivateRoute>} />
        <Route path="/admin/dashboard" element={<PrivateRoute role="admin"><AdminDashboard /></PrivateRoute>} />

        {/* 🧑‍💼 Agent Routes */}
        <Route path="/agent/home" element={<PrivateRoute role="agent"><AgentHome /></PrivateRoute>} />

        {/* 💬 Common */}
        <Route path="/chat" element={<ChatWindow />} />

        {/* ❌ 404 fallback (optional) */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <FooterC />
    </div>
  );
}

export default App;
