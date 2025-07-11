
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';          
import KanbanBoard from './components/KanbanBoard'; 
import { ThemeProvider } from './context/ThemeContext';
import Dashboard from './components/Dashboard';
import Profile from './pages/profile';
import Settings from './pages/Settings';

function App() {
  return (
    <div className="min-h-screen w-screen flex flex-col items-center justify-center bg-gradient-to-br from-petal to-coral">
    <ThemeProvider>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/board" element={<KanbanBoard/>} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
    <Route path="/settings" element={<Settings />} />
    </Routes>
    </ThemeProvider>
    </div>
  );
}

export default App;

