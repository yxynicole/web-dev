import React from "react";
import {useSelector} from "react-redux";

const Todos = () => {
    const todos = useSelector(state => state.todos);
    //todos = data in todo.js, Array[2]
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
            </ul>
        </>
    );
};
export default Todos;
