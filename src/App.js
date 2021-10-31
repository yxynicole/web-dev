import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import './App.css';
import HelloWorld from "../src/components/a6/HelloWorld";
import BuildIndex from "../src/components/a6/Build/index.js";
import PracticeIndex from "../src/components/a6/Practice/index.js";
import TwitterIndex from "../src/components/a6/twitter/index.js"
import {BrowserRouter,Route} from "react-router-dom";

function App() {
  return (
      <>
          <BrowserRouter>
              <div className="container">
                  <Route path = "/a6/HelloWorld.js" exact={true}>
                      <HelloWorld/>
                  </Route>
                  <Route path = {["/","/a6/Practice/index.js"]} exact={true}>
                      <PracticeIndex/>
                  </Route>
                  <Route path = "/a6/Build/index.js" exact={true}>
                      <BuildIndex/>
                  </Route>
                  <Route path = "/a6/twitter/index.js"  exact={true}>
                      <TwitterIndex/>
                  </Route>
              </div>
          </BrowserRouter>
      </>

  );
}

export default App;
