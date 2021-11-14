import React from "react";
import HelloReduxExampleComponent from "./HelloReduxExampleComponent";
import {Provider} from "react-redux";
import {createStore, combineReducers} from "redux";
import Todos from "./Todos";
import todos from "../reducers/todo";
import hello from "../reducers/hello";

const reducers = combineReducers({hello, todos})

const store = createStore(reducers);

const ReduxExamples = () => {
    return(
        <Provider store={store}>
            <div>
                <h2>Redux Examples</h2>
                <Todos/>
                <HelloReduxExampleComponent/>
            </div>
        </Provider>
    );
};
export default ReduxExamples;

