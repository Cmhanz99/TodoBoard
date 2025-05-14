import React, { useEffect, useState } from "react";
import { Input } from "./components/Input";
import { Board } from "./components/Board";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("item");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [dark, setDark] = useState(() => {
    const saveDark = localStorage.getItem("dark");
    if (saveDark === null || saveDark === "undefined") {
      return false;
    }
    return JSON.parse(saveDark);
  });

  useEffect(() => {
    localStorage.setItem("item", JSON.stringify(todos));
    localStorage.setItem("dark", JSON.stringify(dark));
  }, [todos, dark]);

  const handleClick = () => {
    setDark(!dark);
  };

  const handleDelete = (index) => {
    const updateTodo = todos.filter((_, i) => index !== i);
    setTodos(updateTodo);
  };

  return (
    <div className={`app_todo ${dark ? "active" : ""}`}>
      <div className="header_todo">
        <h1>02-Todo-Board</h1>
        <button onClick={handleClick} className={dark ? "btn_dark" : ""}>
          <i className={`fa fa-${dark ? "sun" : "moon"}`}></i>
        </button>
      </div>
      <Input setTodos={setTodos} todos={todos} />
      <Board
        setTodos={setTodos}
        handleDelete={handleDelete}
        todos={todos}
        dark={dark}
      />
    </div>
  );
};

export default App;
