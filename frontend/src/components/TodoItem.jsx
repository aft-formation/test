import React from 'react';

const TodoItem = ({ todo, onUpdate, onDelete }) => {
  return (
    <div>
      <input 
        type="checkbox" 
        checked={todo.completed} 
        onChange={() => onUpdate(todo.id, { completed: !todo.completed })} 
      />
      <span>{todo.title}</span>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
