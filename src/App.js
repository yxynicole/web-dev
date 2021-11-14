import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import React from "react";
import {BrowserRouter, Link, Route} from "react-router-dom";
import {createStore,combineReducers} from "redux";
import {Provider} from "react-redux";
import tweetsReducer from  "./reducers/tweetsReducer"

import A7Homepage from "./components/a7/A7Homepage";
import HomeScreen from "./components/a7/twitter/HomeScreen/HomeScreen"
import ExploreScreen from "./components/a7/twitter/ExploreScreen/ExploreScreen"
import Build from "./components/a7/Build/Build";
import Practice from "./components/a7/Practice/Practice"
import ProfileScreen from "./components/a7/Build/ProfileScreen/ProfileScreen";

const reducer = combineReducers({tweetsReducer,})
const store = createStore(reducer);

function App() {
  return (
      <Provider store={store}>
        <BrowserRouter>
            <div className="container">
                <Route path="/" exact={true}>
                    <A7Homepage/>
                </Route>
                <Route path="/a7/twitter/home">
                    <HomeScreen/>
                </Route>
                <Route path = "/a7/twitter/explore" exact={true}>
                    <ExploreScreen/>
                </Route>
                <Route path ="/a7/practice" exact={true}>
                    <Practice/>
                </Route>
                <Route path = "/a7/build"  exact={true}>
                    <Build/>
                </Route>
                <Route path = "/a7/profile" exact = {true}>
                    <ProfileScreen/>
                </Route>
            </div>
        </BrowserRouter>
      </Provider>
  );
}

export default App;
