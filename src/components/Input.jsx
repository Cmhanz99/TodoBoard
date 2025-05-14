import { useState } from "react";

export const Input = ({setTodos, todos}) => {
  const [task, setTask] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim() === "") return
    setTodos([...todos, task]);

    setTask("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="todo_input">
        <input
          type="text"
          placeholder="Add Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Add</button>
      </div>
    </form>
  );
};
