import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import {createStore,combineReducers} from "redux";
import {Provider} from "react-redux";
import tweetsReducer from  "./reducers/tweetsReducer"
import profileReducer from "./reducers/profileReducer"

import Build from "./components/a7/Build/Build";
import Practice from "./components/a7/Practice/Practice"
import ProfileScreen from "./components/a7/Build/ProfileScreen/ProfileScreen";
import ExploreScreen from "./components/a7/twitter/ExploreScreen/ExploreScreen";
import EditProfile from "./components/a7/Build/ProfileScreen/EditProfile";

const reducer = combineReducers({tweetsReducer, profileReducer})
const store = createStore(reducer);

function App() {
  return (
      <Provider store={store}>
        <BrowserRouter>
            <div className="container">
                <Route path={["/","/a7", "/a7/practice"]} exact={true}>
                    <Practice/>
                </Route>
                <Route path={["/a7/twitter", "/a7/twitter/Home"]} exact={true}>
                    <Build/>
                </Route>

                <Route path={["/a7/twitter/Explore"]} exact={true}>
                    <ExploreScreen/>
                </Route>

                <Route path={["/a7/twitter/Profile"]} exact={true}>
                    <ProfileScreen/>
                </Route>

            </div>
        </BrowserRouter>
      </Provider>
  );
}

export default App;
