import React from 'react';

const BlossomDashboard = ({ tasks }) => {
  const total =
    tasks.todo.length + tasks.inprogress.length + tasks.done.length;
  const completed = tasks.done.length;
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="bg-[#FFF2E2] p-6 rounded-2xl shadow-md text-center text-plum mt-10 w-[90%] max-w-3xl mx-auto font-poppins">
      <h2 className="text-xl font-comfortaa mb-3">🌸 Blossom Progress Dashboard</h2>

      {/* Vine-style Progress Bar */}
      <div className="w-full bg-[#FFE5EC] rounded-full h-5 overflow-hidden mb-2">
        <div
          className="h-5 bg-[#B7E4C7] transition-all ease-in-out duration-700"
          style={{ width: `${percent}%` }}
        />
      </div>

      <p className="text-sm">{percent}% Bloomed</p>
      <p className="text-xs italic text-[#B5838D] mt-1">You're blooming beautifully 🌷</p>

      {/* Optional Animated Garden */}
      <div className="flex justify-center gap-2 mt-4 text-2xl">
        {Array.from({ length: completed }).map((_, i) => (
          <span key={i} className="animate-bounce-slow">🌼</span>
        ))}
      </div>
    </div>
  );
};

export default BlossomDashboard;
