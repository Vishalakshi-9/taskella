// src/pages/Settings.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Settings = () => {
  const [theme, setTheme] = useState(localStorage.getItem('taskella-theme-name') || 'blush');
  const [font, setFont] = useState(localStorage.getItem('taskella-font') || 'poppins');
  const [notifications, setNotifications] = useState(JSON.parse(localStorage.getItem('taskella-notifications')) || false);
  const [gardenAnimation, setGardenAnimation] = useState(JSON.parse(localStorage.getItem('taskella-garden')) || true);

  const navigate = useNavigate();

  const resetTasks = () => {
    localStorage.removeItem('taskella-tasks');
    localStorage.removeItem('taskella-blooms');
    alert('🌸 All tasks have been reset!');
    navigate('/');
    window.location.reload();
  };

  const exportData = () => {
    const tasks = localStorage.getItem('taskella-tasks');
    const blob = new Blob([tasks], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'taskella-tasks.json';
    link.click();
  };

  const saveSettings = () => {
    localStorage.setItem('taskella-theme-name', theme);
    localStorage.setItem('taskella-font', font);
    localStorage.setItem('taskella-notifications', JSON.stringify(notifications));
    localStorage.setItem('taskella-garden', JSON.stringify(gardenAnimation));
    alert('🎀 Settings saved!');
  };

  return (
    <div className="min-h-screen w-full px-6 py-8 bg-gradient-to-br from-petal to-lavender dark:from-[#1f1f1f] dark:to-[#2c2c2c] text-[#B5838D] dark:text-[#d74a70] font-poppins">
      <div className="max-w-xl mx-auto bg-[#FFF2E2] dark:bg-[#2c2c2c] p-6 rounded-xl shadow-lg">
        <Link to='/'><button className='rounded-full bg-[#FFBABA] hover:bg-[#F59FA5] text-plum hover:text-amber-800 mb-5  text-sm'>Back</button></Link>
        <h1 className="text-2xl font-comfortaa mb-6 text-center">⚙️ Settings</h1>

        {/* Theme Selector */}
        <label className="block mb-2">Theme</label>
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          className="w-full p-2 mb-4 rounded border"
        >
          <option value="blush">Blush Pink</option>
          <option value="lavender">Lavender Dream</option>
          <option value="mint">Mint Pastel</option>
        </select>

        {/* Font Selector */}
        <label className="block mb-2">Font</label>
        <select
          value={font}
          onChange={(e) => setFont(e.target.value)}
          className="w-full p-2 mb-4 rounded border"
        >
          <option value="poppins">Poppins</option>
          <option value="quicksand">Quicksand</option>
          <option value="comfortaa">Comfortaa</option>
        </select>

        {/* Notifications */}
        <div className="flex items-center justify-between mb-4">
          <label>🔔 Notifications</label>
          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
            className="accent-pink-400"
          />
        </div>

        {/* Garden Toggle */}
        <div className="flex items-center justify-between mb-6">
          <label>🌸 Garden Animation</label>
          <input
            type="checkbox"
            checked={gardenAnimation}
            onChange={() => setGardenAnimation(!gardenAnimation)}
            className="accent-pink-400"
          />
        </div>

        {/* Save */}
        <button
          onClick={saveSettings}
          className="w-full bg-plum text-white py-2 rounded mb-3 hover:bg-[#C47BA7]"
        >
          Save Settings
        </button>

        {/* Export + Reset */}
        <div className="flex justify-between mt-2 text-sm">
          <button onClick={exportData} className="underline hover:text-pink-700">Export Tasks</button>
          <button onClick={resetTasks} className=" hover:text-red-700 underline">Reset All</button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
