const Todo = ({ text, id, deleteTodo }) => {
  return (
    <>
      <div>
        <span>{text}</span>
        <button onClick={() => deleteTodo(id)}>x</button>
      </div>
    </>
  );
};

export default Todo;
