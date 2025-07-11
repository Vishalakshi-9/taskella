import React, { useState, useEffect } from 'react';
import { DragDropContext } from '@hello-pangea/dnd';
import TaskModal from './taskmodal';
import Column from './column';
import BlossomDashboard from './Blossomdash';
import ProgressVine from './ProgressVine';
import { Link } from 'react-router-dom';

const KanbanBoard = () => {
    const [tasks, setTasks] = useState({todo: [], inprogress: [], done: []});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [undoBuffer, setUndoBuffer] = useState(null);
    const [activeTag, setActiveTag] = useState('');
    const [bloomCount, setBloomCount] = useState(0);
    const [milestoneMessage, setMilestoneMessage] = useState('');

    // Load from localStorage
    useEffect(() => {
        const stored = localStorage.getItem('taskella-tasks');
        if (stored) setTasks(JSON.parse(stored));
        const storedBlooms = localStorage.getItem('taskella-blooms');
        if (storedBlooms) setBloomCount(Number(storedBlooms));
    }, []);

    // Save to localStorage
    useEffect(() => {
        localStorage.setItem('taskella-tasks', JSON.stringify(tasks));
        localStorage.setItem('taskella-blooms', bloomCount);
    }, [tasks, bloomCount]);

    const handleAddTask = (newTask) => {
        setTasks((prev) => ({
            ...prev,
            todo: [newTask, ...prev.todo],
        }));
    };

    const handleDeleteTask = (taskId, columnId) => {
        const updatedColumn = tasks[columnId].filter((t) => t.id !== taskId);
        const deletedTask = tasks[columnId].find((t) => t.id === taskId);

        setTasks((prev) => ({
            ...prev,
            [columnId]: updatedColumn,
        }));

        setUndoBuffer({ task: deletedTask, column: columnId });

        setTimeout(() => setUndoBuffer(null), 5000);
    };

    const handleUndo = () => {
        if (!undoBuffer) return;
        const { task, column } = undoBuffer;
        setTasks((prev) => ({
            ...prev,
            [column]: [task, ...prev[column]],
        }));
        setUndoBuffer(null);
    };

    const filterTasks = (list) =>
        activeTag ? list.filter((task) => task.tags?.includes(activeTag)) : list;

    const onDragEnd = (result) => {
        const { source, destination } = result;
        if (!destination) return;

        const sourceCol = source.droppableId;
        const destCol = destination.droppableId;

        if (destCol === 'done' && sourceCol !== 'done') {
            const newCount = bloomCount + 1;
            setBloomCount(newCount);
            checkMilestones(newCount);
        }

        const draggedTask = tasks[sourceCol][source.index];
        const newSourceTasks = Array.from(tasks[sourceCol]);
        newSourceTasks.splice(source.index, 1);

        const newDestTasks = Array.from(tasks[destCol]);
        newDestTasks.splice(destination.index, 0, draggedTask);

        setTasks({
            ...tasks,
            [sourceCol]: newSourceTasks,
            [destCol]: newDestTasks,
        });
    };

    const toggleSubtask = (taskId, subIndex) => {
        const updatedTasks = { ...tasks };
        for (let column in updatedTasks) {
            const taskIndex = updatedTasks[column].findIndex((t) => t.id === taskId);
            if (taskIndex !== -1) {
                const task = updatedTasks[column][taskIndex];
                const updatedSubtasks = [...task.subtasks];
                updatedSubtasks[subIndex] = {
                    ...updatedSubtasks[subIndex],
                    done: !updatedSubtasks[subIndex].done,
                };
                updatedTasks[column][taskIndex] = {
                    ...task,
                    subtasks: updatedSubtasks,
                };
                break;
            }
        }
        setTasks(updatedTasks);
    };

    const checkMilestones = (newCount) => {
        const milestones = [5, 10, 25, 50];
        if (milestones.includes(newCount)) {
            setMilestoneMessage(`You've bloomed ${newCount} flowers! You're thriving 🌸`);
            setTimeout(() => setMilestoneMessage(''), 5000);
        }
    };

    return (
        <div className="w-screen min-h-screen flex flex-col items-center bg-gradient-to-br from-petal to-lavender dark:from-[#1f1f1f] dark:to-[#2c2c2c]">
            <section id='kanban'>
            <div className="w-full flex flex-col items-center flex-1">
                {/* Add Task Button and Filter */}
                <div className="w-full flex justify-between px-8 pt-6">
                     <Link to='/'><button className='rounded-full bg-[#FFBABA] hover:bg-[#F59FA5] text-plum hover:text-amber-800 mb-5  text-sm'>Back</button></Link>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-[#FFBABA] hover:bg-[#F59FA5] text-white px-5  rounded-full shadow font-poppins"
                    >
                        ➕ Add Task
                    </button>

                </div>
                <div className="flex justify-center items-center gap-2 my-4">
                    <label className="text-sm font-poppins dark:text-[#c34667]">Filter by Tag:</label>
                    <select
                        className="bg-[#FFF2E2] text-[#B5838D] border border-[#EAC7C7] rounded px-2 py-1 text-sm"
                        value={activeTag}
                        onChange={(e) => setActiveTag(e.target.value)}
                    >
                        <option value="">All</option>
                        <option value="#work">#work</option>
                        <option value="#selfcare">#selfcare</option>
                        <option value="#priority">#priority</option>
                    </select>
                </div>
                {undoBuffer && (
                    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-rose-100 border border-rose-300 text-rose-700 px-4 py-2 rounded shadow font-poppins z-50">
                        Task deleted.{" "}
                        <button
                            onClick={handleUndo}
                            className="underline text-rose-600 hover:text-rose-800 ml-2"
                        >
                            Undo?
                        </button>
                    </div>
                )}

                {/* Drag & Drop Columns */}
                <DragDropContext onDragEnd={onDragEnd}>
                    <div className="flex flex-row gap-8 w-full  px-8 py-6">
                        <Column
                            columnId="todo"
                            title="🌱 Seeds"
                            tasks={filterTasks(tasks.todo)}
                            onToggleSubtask={toggleSubtask}
                            onDeleteTask={handleDeleteTask}
                        />
                        <Column
                            columnId="inprogress"
                            title="🌿 Sprouts"
                            tasks={filterTasks(tasks.inprogress)}
                            onToggleSubtask={toggleSubtask}
                            onDeleteTask={handleDeleteTask}
                        />
                        <Column
                            columnId="done"
                            title="🌸 Blooms"
                            tasks={filterTasks(tasks.done)}
                            onToggleSubtask={toggleSubtask}
                            onDeleteTask={handleDeleteTask}
                        />
                    </div>
                </DragDropContext>

                {/* Modal */}
                {isModalOpen && (
                    <TaskModal onClose={() => setIsModalOpen(false)} onAdd={handleAddTask} />
                )}

                <BlossomDashboard tasks={tasks} />

                {milestoneMessage && (
                    <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 bg-petal border border-rose-300 text-plum px-4 py-2 rounded shadow font-poppins z-50 animate-fade-in">
                        {milestoneMessage}
                    </div>
                )}

                <div className="w-full flex flex-col-reverse md:flex-row gap-6 justify-between mt-10">
                    <ProgressVine
                        totalTasks={tasks.todo.length + tasks.inprogress.length + tasks.done.length}
                        doneTasks={tasks.done.length}
                    />
                </div>
            </div>
            </section>
        </div>
    );
};

export default KanbanBoard;
