// src/pages/Profile.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Profile = () => {
  const [avatar, setAvatar] = useState('🌷');
  const [theme, setTheme] = useState('blush');
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [defaultView, setDefaultView] = useState('kanban');
  const [reminders, setReminders] = useState(true);
  const [motion, setMotion] = useState(true);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('taskella-profile'));
    if (stored) {
      setAvatar(stored.avatar || '🌷');
      setTheme(stored.theme || 'blush');
      setName(stored.name || '');
      setBio(stored.bio || '');
      setDefaultView(stored.defaultView || 'kanban');
      setReminders(stored.reminders ?? true);
      setMotion(stored.motion ?? true);
    }
  }, []);

  const handleSave = () => {
    const data = {
      avatar,
      theme,
      name,
      bio,
      defaultView,
      reminders,
      motion,
    };
    localStorage.setItem('taskella-profile', JSON.stringify(data));
    alert('Profile saved! 🌸');
  };

const navigate = useNavigate();

const handleSaveAndRedirect = () => {
    handleSave();
    navigate('/');
};

return (
    <div className="min-h-scree w-full px-6 py-10 bg-gradient-to-br from-petal to-lavender dark:from-[#1f1f1f] dark:to-[#2c2c2c] text-[#B5838D] dark:text-[#c34667] font-poppins">
        <div className="max-w-3xl mx-auto bg-[#FFF2E2] dark:bg-[#2c2c2c] p-8 rounded-xl shadow-xl">
            <Link to='/'><button className='rounded-full bg-[#FFBABA] hover:bg-[#F59FA5] text-plum hover:text-amber-800 mb-5  text-sm'>Back</button></Link>
            <h1 className="text-3xl font-comfortaa mb-6 text-center">🌸 My Profile</h1>

            {/* Avatar Picker */}
            <div className="mb-4">
                <label className="block font-semibold mb-1">Avatar Flower</label>
                <select
                    className="w-full p-2 rounded bg-white border"
                    value={avatar}
                    onChange={(e) => setAvatar(e.target.value)}
                >
                    <option value="🌷">🌷 Tulip</option>
                    <option value="🌻">🌻 Sunflower</option>
                    <option value="🌼">🌼 Daisy</option>
                    <option value="🌹">🌹 Rose</option>
                </select>
            </div>

            {/* Theme Selector */}
            <div className="mb-4">
                <label className="block font-semibold mb-1">Theme</label>
                <select
                    className="w-full p-2 rounded bg-white border"
                    value={theme}
                    onChange={(e) => setTheme(e.target.value)}
                >
                    <option value="blush">🌸 Blush Bloom</option>
                    <option value="sunny">🌞 Sunny Gold</option>
                    <option value="lavender">💜 Lavender Dream</option>
                </select>
            </div>

            {/* Name and Bio */}
            <div className="mb-4">
                <label className="block font-semibold mb-1">Name</label>
                <input
                    type="text"
                    className="w-full p-2 rounded bg-white border"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="mb-4">
                <label className="block font-semibold mb-1">Bio</label>
                <textarea
                    rows="2"
                    className="w-full p-2 rounded bg-white border"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                ></textarea>
            </div>

            {/* Preferences */}
            <div className="mb-4">
                <label className="block font-semibold mb-1">Default View</label>
                <select
                    className="w-full p-2 rounded bg-white border"
                    value={defaultView}
                    onChange={(e) => setDefaultView(e.target.value)}
                >
                    <option value="kanban">🌱 Kanban Board</option>
                    <option value="calendar">🗓️ Calendar</option>
                </select>
            </div>

            <div className="flex items-center gap-2 mb-4">
                <input
                    type="checkbox"
                    checked={reminders}
                    onChange={() => setReminders(!reminders)}
                />
                <label className="text-sm">Enable Reminders</label>
            </div>

            <div className="flex items-center gap-2 mb-6">
                <input
                    type="checkbox"
                    checked={motion}
                    onChange={() => setMotion(!motion)}
                />
                <label className="text-sm">Enable Sound / Motion</label>
            </div>

            <button
                onClick={handleSaveAndRedirect}
                className="bg-coral hover:bg-rose-400 text-white px-5 py-2 rounded-full font-semibold"
            >
                Save Preferences
            </button>
        </div>
    </div>
);
};

export default Profile;
