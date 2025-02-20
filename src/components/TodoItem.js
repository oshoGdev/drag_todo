import React from "react";
import { useDraggable } from "@dnd-kit/core";

const TodoItem = ({ todo }) => {
  const { attributes, listeners, setNodeRef } = useDraggable({ id: todo.id.toString() });

  return (
    <div style={{background:"gray"}} ref={setNodeRef} {...attributes} {...listeners} className="todo-item">
      {todo.todo}
    </div>
  );
};

export default TodoItem;