export const Board = ({ todos, handleDelete, dark }) => {
  return (
    <div className="todo_board">
      {todos.length === 0 ? "No task" : ""}
      {todos.map((todo, index) => {
        return (
          <div className={`todo_card ${dark === true ? "dark" : ""}`} key={index}>
            <p>{todo}</p>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};
