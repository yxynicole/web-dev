import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import './App.css';
// import PracticeIndex from "../src/components/a7/Practice/index.js";
// import TwitterIndex from "../src/components/a7/twitter/index.js"
import {BrowserRouter,Route} from "react-router-dom";
import HomeScreen from "./components/a7/twitter/HomeScreen/HomeScreen";
import ExploreScreen from "./components/a7/twitter/ExploreScreen/ExploreScreen";
import Practice from "./components/a7/Practice";
import Build from "./components/a7/Build";
import tweets from "./reducers/tweetsReducer";
import who from "./reducers/who"
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import hello from "./components/a7/Practice/ReduxExamples/reducers/hello";
import todos from "./components/a7/Practice/ReduxExamples/reducers/todo";


const reducer = combineReducers({tweets, who})
const store = createStore(reducer);

function App() {
  return (

          <Provider store = {store}>
              <BrowserRouter>
                  <div className="container">
                      <Route path={["/", "/a7", "/a7/practice"]} exact={true}>
                          <Practice/>
                      </Route>
                      <Route path="/a7/twitter">
                          <Build/>
                      </Route>
                      {/*<Route path = "/a7/twitter/home" exact={true}>*/}
                      {/*    <HomeScreen/>*/}
                      {/*</Route>*/}
                      {/*<Route path = "/a7/twitter/explore"  exact={true}>*/}
                      {/*    <ExploreScreen/>*/}
                      {/*</Route>*/}
                  </div>
              </BrowserRouter>
          </Provider>



  );
}

export default App;
