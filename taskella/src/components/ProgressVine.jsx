import React from 'react'

const ProgressVine = ({totalTasks, doneTasks}) => {
    const progress = totalTasks > 0 ? (doneTasks/totalTasks) * 100 : 0;
    const numFlowers = Math.floor(progress/10);
  return (
    <div className='w-full max-w-4xl mx-auto my-4 px-4'>
        <h3 className='text-center font-comfortaa text-plum text-sm mb-2'>🌿 Productivity Vine</h3>
            <div className="w-full bg-[#FFE5EC] h-4 rounded-full shadow-inner overflow-hidden">
        <div
          className="bg-gradient-to-r from-lavender to-pink-300 h-4 rounded-full transition-all duration-700"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="flex justify-between mt-2 text-lg">
        {[...Array(10)].map((_, i) => (
          <span key={i} className={`transition-transform ${i < numFlowers ? 'scale-110' : 'opacity-40'}`}>
            🍃
          </span>
        ))}
      </div>

      <p className="text-xs text-center text-[#B5838D] mt-1">
        {doneTasks} / {totalTasks} tasks completed ({Math.round(progress)}%)
      </p>
    </div>
  )
}

export default ProgressVine