import React from "react";
import { useDroppable } from "@dnd-kit/core";
import TodoItem from "./TodoItem";

const Column = ({ status, todos }) => {
  const { setNodeRef } = useDroppable({ id: status });

  return (
    <div ref={setNodeRef} className="column">
      <h3>{status}</h3>
      {todos.filter(todo => todo.status === status).map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default Column;