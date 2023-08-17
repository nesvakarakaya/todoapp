import React, { useState } from 'react';

export const EditTodoForm = ({ editTodo, task }) => {
    const [editedTask, setEditedTask] = useState(task.task);

    const handleSubmit = e => {
        e.preventDefault();

        if (editedTask.trim() !== "") { // Boşlukları temizleyerek task'in içeriğini değerlendiriyoruz
            editTodo(editedTask, task.id);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
            className="todo-input"
                type="text"
                value={editedTask}
                onChange={e => setEditedTask(e.target.value)}
            />
            <button type="submit" className='todo-btn'>Save</button>
       
        </form>
    );
};
