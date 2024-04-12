// Tasks.jsx
import React, { useState } from "react";

const Tasks = ({ task, onDeleteTask, onUpdateTask }) => {
  const [editedTask, setEditedTask] = useState(null); // Estado para almacenar la tarea actualmente editada
  const [editedTitle, setEditedTitle] = useState(''); // Estado para el título editado

  const handleEdit = (id, title) => {
    setEditedTask(id); // Almacena el ID de la tarea actualmente editada
    setEditedTitle(title); // Almacena el título de la tarea actualmente editada
  };

  const handleCancelEdit = () => {
    setEditedTask(null); // Cancela la edición estableciendo el ID de la tarea actualmente editada como null
    setEditedTitle(''); // Limpia el título editado
  };

  const handleSaveEdit = () => {
    onUpdateTask(editedTask, editedTitle); // Llama a la función onUpdateTask con el ID de la tarea y el nuevo título
    setEditedTask(null); // Finaliza la edición estableciendo el ID de la tarea actualmente editada como null
    setEditedTitle(''); // Limpia el título editado
  };

  return (
    <>
      <h1>Tasks</h1>
      <ul>
        {task.map((task) => (
          <li key={task.id}>
            {editedTask === task.id ? (
              // Si la tarea está siendo editada, muestra un campo de entrada para editar el título
              <>
                <input
                  type="text"
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                />
                <button onClick={handleSaveEdit}>Save</button>
                <button onClick={handleCancelEdit}>Cancel</button>
              </>
            ) : (
              // Si la tarea no está siendo editada, muestra el título y botones de edición y eliminación
              <>
                {task.title}
                <button onClick={() => onDeleteTask(task.id)}>Delete</button>
                <button onClick={() => handleEdit(task.id, task.title)}>Edit</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Tasks;
