import React, { useState } from "react";
import "./todoApp.style.css";

const TodoApp = () => {
  const defaultTodo = localStorage.getItem("Alina'stodo")?.split(",");
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([...defaultTodo]);

  const onChangeHandler = (e) => {
    setTodo(e.target.value);
  };

  const onClickHandler = () => {
    setTodoList([...todoList, todo]);
    localStorage.setItem("Alina'stodo", [...todoList, todo]);
    console.log("Todo: todoList");
    console.log("DefaultTodo:", defaultTodo);
    setTodo("");
  };

  const showTodoList = todoList.map((el, index) => {
    return <p key={index}>{el}</p>;
  });

  return (
    <>
      <h1>Todo App</h1>
      <input
        type="text"
        value={todo}
        name=""
        placeholder="Please enter your todo"
        onChange={onChangeHandler}
      />
      <button onClick={onClickHandler}>Add </button>
      {showTodoList}
    </>
  );
};

export default TodoApp;
