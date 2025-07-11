import React, { useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [completed, setCompleted] = useState(); // bloom count
  const [streak, setStreak] = useState('Streak Incoming');
  const [tags, setTags] = useState([]);
  const [milestone, setMilestone] = useState('');

  useEffect(() => {
    if (completed >= 10 && completed < 25) setMilestone('10+ flowers bloomed! 🌸');
    if (completed >= 25 && completed < 50) setMilestone('Garden thriving with 25+ blooms! 🪻');
    if (completed >= 50) setMilestone('🌺 50+ Blossoms! You’re flourishing!');
  }, [completed]);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-petal to-cream-6 text-[#B5838D] px-6 py-10 font-poppins dark:from-[#1f1f1f] dark:to-[#2c2c2c]">
      <Link to='/'><button className='rounded-full text-plum hover:text-amber-800 mb-5 flex flex-col justify-end items-end text-sm'>Back</button></Link>
      <h1 className="text-4xl text-center font-comfortaa mb-8">Productivity Garden Dashboard</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {/* 🌼 Total Tasks Completed */}
        <div className="bg-[#FFF2E2] rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-2">🌸 Total Tasks Completed</h2>
          <p className="text-3xl">{completed}</p>
          <div className="mt-4 h-2 w-full bg-[#EAC7C7] rounded">
            <div className="h-full bg-petal rounded" style={{ width: `${Math.min(completed, 100)}%` }}></div>
          </div>
          {milestone && (
            <div className="mt-3 text-sm text-rose-500 font-quicksand">{milestone}</div>
          )}
        </div>

        {/* 🌞 Daily Streak */}
        <div className="bg-[#FFF2E2] rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-2">🌞 Daily Streak</h2>
          <p className="text-2xl">{streak} days</p>
          <p className="text-sm mt-1 text-rose-400">Keep your momentum blooming!</p>
        </div>

        {/* 🗓️ Calendar View */}
        <div className="bg-[#FFF2E2] rounded-xl p-6 shadow-lg col-span-2">
          <h2 className="text-xl font-semibold mb-4">🗓️ Calendar View</h2>
          <div className="grid grid-cols-7 gap-2 text-sm text-center  ">
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d) => (
              <div key={d} className="font-semibold">{d}</div>
            ))}
            {Array.from({ length: 31 }).map((_,i) => (
              <div
                key={i}
                className={`h-10 w-15 flex items-center justify-center rounded-full ${i % 3 === 0
                  ? 'bg-petal text-amber-800'
                  : 'hover:bg-[#FFE5EC]'
                  }`}
              >
                {i + 1}
              </div>
            ))}
          </div>
        </div>

        {/* 🏷️ Most Used Tags */}
        <div className="bg-[#FFF2E2] rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-2">🏷️ Most Used Tags</h2>
          <div className="flex gap-2 flex-wrap mt-2">
            {tags.map((tag, i) => (
              <span
                key={i}
                className="bg-[#FFEDC2] text-[#B5838D] text-xs px-3 py-1 rounded-full border border-[#EAC7C7] shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* 🌺 Bloom Tracker */}
        <div className="bg-[#FFF2E2] rounded-xl p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-2">🌺 Bloom Tracker</h2>
          <p className="text-sm mb-2">Track your garden growth milestones:</p>
          <ul className="list-disc list-inside text-sm">
            <li className={completed >= 10 ? 'text-rose-500' : ''}>10 flowers bloomed</li>
            <li className={completed >= 25 ? 'text-rose-500' : ''}>25 flowers bloomed</li>
            <li className={completed >= 50 ? 'text-rose-500' : ''}>50+ bloom explosion!</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
