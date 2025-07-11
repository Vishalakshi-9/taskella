import React from 'react';
import { Droppable } from '@hello-pangea/dnd';
import TaskCard from './taskcard';

const Column = ({ columnId, title, tasks, onToggleSubtask, onDeleteTask }) => {
    return (
        <div className="bg-cream rounded-xl p-4 shadow w-72 min-h-[300px]">
            <h2 className="text-center font-poppins text-lg text-[#B5838D] mb-3">{title}</h2>

            <Droppable droppableId={columnId}>
                {(provided) => (
                    <div
                         {...provided.droppableProps}
                        ref={provided.innerRef}
                       
                        className="flex flex-col gap-2"
                    >
                        {tasks.map((task, index) => (
                            <TaskCard key={task.id} task={task} index={index} onToggleSubtask={onToggleSubtask} onDelete={()=>onDeleteTask(task.id, columnId)} />
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    );
};

export default Column;
