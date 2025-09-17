// frontend/src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

// Placeholder components for now
const Login = () => <div>Login Page - Coming Soon</div>;
const Register = () => <div>Register Page - Coming Soon</div>;
const PasswordReset = () => <div>Password Reset Page - Coming Soon</div>;
const Referral = () => <div>Referral Page - Coming Soon</div>;
const Dashboard = () => <div>Dashboard - Coming Soon</div>;

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset-password" element={<PasswordReset />} />
          <Route path="/referral" element={<Referral />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<div className="min-h-screen flex items-center justify-center">404 - Page Not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;