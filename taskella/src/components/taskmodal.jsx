import React, { useState } from 'react';

const TaskModal = ({ onClose, onAdd }) => {
  const [title, setTitle] = useState('');
  const [subtasks, setSubtasks] = useState([]);
  const [subtaskInput, setSubtaskInput] = useState('');
  const [tagsInput, setTagsInput] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [dueDate, setDueDate] = useState('');

  const addSubtask = () => {
    if (subtaskInput.trim()) {
      setSubtasks([...subtasks, { title: subtaskInput, done: false }]);
      setSubtaskInput('');
    }
  };

  const handleAdd = () => {
    if (title.trim()) {
      const newTask = {
        id: Date.now().toString(),
        title,
        subtasks,
        tags: tagsInput
          .split(',')
          .map((tag) => tag.trim())
          .filter(Boolean),
        priority,
        dueDate,
      };

      onAdd(newTask);
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-[#FFF2E2] p-6 rounded-xl w-96 shadow-lg font-poppins">
        <h2 className="text-xl text-plum mb-4 font-comfortaa">🌸 Add New Task</h2>

        {/* Title */}
        <input
          type="text"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 mb-3 rounded border bg-white text-sm"
        />

        {/* Tags */}
        <input
          type="text"
          placeholder="Tags (comma separated, e.g. #work, #priority)"
          value={tagsInput}
          onChange={(e) => setTagsInput(e.target.value)}
          className="w-full p-2 mb-3 rounded border bg-white text-sm"
        />

        {/* Subtask */}
        <div className="mb-3">
          <input
            type="text"
            placeholder="Subtask..."
            value={subtaskInput}
            onChange={(e) => setSubtaskInput(e.target.value)}
            className="w-full p-2 rounded mb-2 text-sm"
          />
          <button
            onClick={addSubtask}
            className="bg-lavender text-gray-600 px-4 py-1 rounded-full text-xs hover:bg-plum"
          >
            ➕ Add Subtask
          </button>
        </div>

        {/* Subtask List */}
        {subtasks.length > 0 && (
          <ul className="mb-4 text-sm text-[#B5838D]">
            {subtasks.map((s, i) => (
              <li key={i}>💗 {s.title}</li>
            ))}
          </ul>
        )}

        {/* Due Date */}
        <div className="mb-4">
          <label className="text-sm text-plum font-poppins">Due Date</label>
          <input
            type="date"
            className="w-full mt-1 p-2 rounded bg-white border text-sm"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>

        {/* Priority */}
        <div className="mb-4">
          <label className="text-sm text-plum font-poppins">Priority</label>
          <select
            className="w-full mt-1 p-2 rounded bg-white border text-sm"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="High">⭐ High</option>
            <option value="Medium">☆ Medium</option>
            <option value="Low">✩ Low</option>
          </select>
        </div>

        {/* Buttons */}
        <div className="flex justify-end gap-3">
          <button onClick={onClose} className="text-sm text-plum hover:underline">
            Cancel
          </button>
          <button
            onClick={handleAdd}
            className="bg-coral text-white px-4 py-2 rounded text-sm hover:bg-rose-400"
          >
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
