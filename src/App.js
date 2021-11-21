import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import {createStore,combineReducers} from "redux";
import {Provider} from "react-redux";
import tweetsReducer from  "./reducers/tweetsReducer"
import profileReducer from "./reducers/profileReducer"
import whoReducer from "./reducers/whoReducer";
import Build from "./components/a8/Build/Build";
import Practice from "./components/a8/Practice/Practice"
import ProfileScreen from "./components/a8/Build/ProfileScreen/ProfileScreen";
import ExploreScreen from "./components/a8/twitter/ExploreScreen/ExploreScreen";

const reducer = combineReducers({tweetsReducer, profileReducer,whoReducer})
const store = createStore(reducer);

function App() {
  return (
      <Provider store={store}>
        <BrowserRouter>
            <div className="container">
                <Route path={["/","/a8", "/a8/practice"]} exact={true}>
                    <Practice/>
                </Route>
                <Route path={["/a8/twitter", "/a8/twitter/Home"]} exact={true}>
                    <Build/>
                </Route>

                <Route path={["/a8/twitter/Explore"]} exact={true}>
                    <ExploreScreen/>
                </Route>

                <Route path={["/a8/twitter/Profile"]} exact={true}>
                    <ProfileScreen/>
                </Route>

            </div>
        </BrowserRouter>
      </Provider>
  );
}

export default App;
