import React, { useState } from "react";

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [darkMode, setDarkMode] = useState(true);

    const addTodo = () => {
        inputValue.length? setTodos([...todos, inputValue]) : null;
        setInputValue("");
    };

    const deleteTodo = i =>{
        let newArr = [...todos];
        newArr.splice(i, 1);
        setTodos(newArr);
    };

    const darkModeToggle = () => {
        darkMode? setDarkMode(false) : setDarkMode(true);
    };

    return (
        <div className={"todo-list" + (darkMode? "-dark" : "")}>
            <div className="dark-mode">
                <button onClick={darkModeToggle}>
                    <i className="fa-solid fa-circle-half-stroke"></i>
                </button>
            </div>
            <div className="todo-list-container">
                <div className="add-todo">
                    <input type="text" placeholder="Add to do" onKeyPress={e => e.key == "Enter"? addTodo() : null} onChange={e => setInputValue(e.target.value)} value={inputValue}/>
                </div>
                <div className="todos-container">
                    {todos.map((todo, i) => {
                        return (
                            <div key={i} className="todo">
                                <p>{todo}</p>
                                <div className="todo-actions">
                                    <i className="fa-solid fa-xmark" onClick={()=>deleteTodo(i)}></i>
                                </div> 
                            </div>
                        )
                    })}
                    {todos.length? <span>{todos.length} item left</span> : <span>No tasks! Add a task</span>}
                </div>
            </div>
            <div className="footer">
                Desing by <a href="https://github.com/s3rtr3s" target="_blank">Pedro Peña</a> with <i className="fa-solid fa-pencil"></i>
            </div>
        </div>
    )
};

export default TodoList;
