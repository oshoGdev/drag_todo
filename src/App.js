import React, { useEffect, useState } from "react";
import { DndContext, closestCorners } from "@dnd-kit/core";
import Column from "./components/Column";
import axios from "axios";
import "./styles/styles.css";

const statuses = ["Completed", "In Progress", "Pending"];

export default function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/todos").then((response) => {
      setTodos(response.data.todos.map(todo => ({ ...todo, status: "Pending" })));
    });
  }, []);

  const onDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;

    setTodos((prevTodos) =>
      prevTodos.map(todo =>
        todo.id === parseInt(active.id) ? { ...todo, status: over.id } : todo
      )
    );
  };

  return (
    <DndContext collisionDetection={closestCorners} onDragEnd={onDragEnd}>
      <div className="board-container">
        {statuses.map((status) => (
          <Column key={status} status={status} todos={todos} />
        ))}
      </div>
    </DndContext>
  );
}