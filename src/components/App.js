
import React from "react";
import './../styles/App.css';
import { useState } from "react";

const TodoList = () => {
  // State to store the current input and the list of todos
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  // Function to handle adding a new todo
  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, inputValue]);
      console.log(todos)
      setInputValue(""); // Clear input field after adding
    }
  };

  // Function to handle deleting a todo
  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>To-Do List</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter a task"
       
      />
      <button onClick={addTodo}>Add Todo</button>
      <ul style={{ listStyleType: "none", padding: "0", marginTop: "20px" }}>
        {todos.map((todo, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            {todo}
            <button
              onClick={() => deleteTodo(index)}
              style={{
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
