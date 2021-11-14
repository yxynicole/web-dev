import React,{useState} from "react";
import {useSelector, useDispatch} from "react-redux";

const Todos = () => {
    const todos = useSelector(state => state.todos); //
    //todos = data in todo.js, Array[2]

    const [todo, setTodo] = useState({do:"",done:false}) //add done property

    const todoChangeHandler = (event) =>{
        setTodo(event.target.value);
    }

    const dispatch =useDispatch();
    const createTodoClickHandler = (todo) =>{
        const action = {
            type:'create-todo',
            todo                        //payload
        };
        dispatch(action);
    }


    const deleteTodoClickHandler = (todo) =>{
        const action = {
            type:'delete-todo',
            todo
        };
        dispatch(action);
    }

    const updateTodoClickHandler =(todo) =>{
        const action ={
            type:'update-todo',
            todo
        };
        dispatch(action)
    }

    return(
        <>
            <h3>Todos</h3>
            <ul className="list-group">

                <li className="list-group-item">
                    <input onChange={todoChangeHandler}
                            value = {todo.do}
                            className = "form-control"/>

                    <button onClick={() => createTodoClickHandler(todo)}
                            className="btn btn-primary">
                        Create New Todo
                    </button>

                </li>

                {
                    todos.map(todo =>
                                  <li className="list-group-item">
                                      <input checked={todo.done}
                                      onChange = {event => updateTodoClickHandler(
                                          {...todo,
                                          done:event.target.checked}
                                          )}
                                            type = "checkbox"
                                      />
                                      {todo.do}
                                      <button onClick={() =>
                                          deleteTodoClickHandler(todo)}
                                              className="btn btn-danger float-end">
                                          Delete
                                      </button>
                                  </li>
                    )
                }


            </ul>
        </>
    );
};
export default Todos;
