import React from 'react';
import { Draggable } from '@hello-pangea/dnd';

const TaskCard = ({ task, index, onToggleSubtask, onDelete }) => {
  const getPriorityStyle = (priority) => {
    switch (priority) {
      case 'High':
        return 'border-rose-400 shadow-lg';
      case 'Medium':
        return 'border-yellow-300 shadow';
      case 'Low':
        return 'border-green-300 shadow';
      default:
        return 'border-[#EAC7C7]';
    }
  };

  const isOverdue = task.dueDate && new Date(task.dueDate) < new Date();

  return (
    <Draggable draggableId={task.id.toString()} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`bg-white p-3 rounded-lg mb-3 text-[#B5838D] font-quicksand ${isOverdue ? 'ring-2 ring-lavender' : ''}`}
        >
          <div className={`rounded-xl p-4 border ${getPriorityStyle(task.priority)}`}>
            <div className="flex justify-between items-start mb-2">
              <p className="font-poppins text-base font-semibold">{task.title}</p>
              <button
                onClick={() => onDelete(task.id)}
                className="text-rose-400 text-sm hover:text-rose-600"
                title="Delete task"
              >
                🗑️
              </button>
            </div>

            {task.dueDate && (
              <div className="text-sm flex items-center gap-1 mt-1">
                📅 <span>{task.dueDate}</span>
              </div>
            )}

            {task.priority && (
              <div className="text-sm mt-1 text-rose-500 font-poppins">
                {task.priority === 'High' && '⭐ High Priority'}
                {task.priority === 'Medium' && '☆ Medium Priority'}
                {task.priority === 'Low' && '✩ Low Priority'}
              </div>
            )}

            {task.subtasks?.length > 0 && (
              <div className="mt-3">
                <p className="text-xs text-[#B5838D] font-semibold mb-1">💖 Subtasks:</p>
                <ul className="text-sm flex flex-col gap-1">
                  {task.subtasks.map((sub, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={sub.done}
                        onChange={() => onToggleSubtask(task.id, i)}
                        className="accent-pink-500"
                      />
                      <span className={`${sub.done ? 'line-through opacity-60' : ''}`}>
                        {sub.title}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {task.tags?.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-2">
                {task.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-[#FFEDC2] text-[#B5838D] text-xs px-2 py-0.5 rounded-full border border-[#EAC7C7] shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </Draggable>
  );
};

export default TaskCard;
