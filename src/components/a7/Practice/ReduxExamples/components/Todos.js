import React,{useState} from "react";
import {useSelector, useDispatch} from "react-redux";

const Todos = () => {
    const todos = useSelector(state => state.todos);
    //todos = data in todo.js, Array[2]

    const [todo, setTodo] = useState({do:""})

    const todoChangeHandler = (event) =>{
        setTodo(event.target.value);
    }

    const dispatch =useDispatch();
    const createTodoClickHandler = () =>{
        const action = {
            type:'create-todo',
            todo                        //payload
        };
        dispatch(action);
    }
    return(
        <>
            <h3>Todos</h3>
            <ul className="list-group">

                <li className="list-group-item">
                    <input onChange={todoChangeHandler}
                            value = {todo.do}
                            className = "form-control"/>

                    <button onClick={createTodoClickHandler}
                            className="btn btn-primary">
                        Create New Todo
                    </button>
                </li>

                {
                    todos.map(todo =>
                                  <li className="list-group-item">
                                      {todo.do}
                                  </li>
                    )
                }


            </ul>
        </>
    );
};
export default Todos;
