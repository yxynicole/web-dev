import React,{useState} from "react";
import {useSelector} from "react-redux";

const Todos = () => {
    const todos = useSelector(state => state.todos);
    //todos = data in todo.js, Array[2]

    const [todo, setTodo] = useState({do:""})

    const todoChangeHandler = (event) =>{
        setTodo(event.target.value);
    }
    return(
        <>
            <h3>Todos</h3>
            <ul className="list-group">
                {
                    todos.map(todo =>
                                  <li className="list-group-item">
                                      {todo.do}
                                  </li>
                    )
                }
                <li className="list-group-item">
                    <input onChange={todoChangeHandler}
                            value = {todo.do}
                            className = "form-control"/>
                </li>


            </ul>
        </>
    );
};
export default Todos;
