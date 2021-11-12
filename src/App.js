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

function App() {
  return (
      <>
          <BrowserRouter>
              <div className="container">
                  <Route path={["/a7", "/a7/practice"]} exact={true}>
                      <Practice/>
                  </Route>
                  <Route path="/a7/twitter">
                      <Build/>
                  </Route>
                  <Route path = "/a7/twitter/home" exact={true}>
                      <HomeScreen/>
                  </Route>
                  <Route path = "/a7/twitter/explore"  exact={true}>
                      <ExploreScreen/>
                  </Route>
              </div>
          </BrowserRouter>
      </>

  );
}

export default App;
