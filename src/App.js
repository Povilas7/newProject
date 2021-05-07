
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Toolbar from "./components/Toolbar";
import Food from "./components/Food";
import FoodGallery from "./components/FoodGallery";
import SingleRecipe from "./components/SingleRecipe";
import Favorite from "./components/Favorite";

function App() {
  return (
      <Router>
        <div className="App">
          <Toolbar/>

          <div className="d-flex">

            <div className='page'>
              <Switch>
                <Route exact path='/'>
                </Route>

                <Route path='/home'>
                    <Food/>
                </Route>
                <Route path='/foodgallery'>
                  <FoodGallery/>
                </Route>
                <Route path='/recipe/:id'>
                  <SingleRecipe/>
                </Route>
                <Route path='/favorite'>
                  <Favorite/>
                </Route>

              </Switch>
            </div>
          </div>

        </div>
      </Router>
  );
}

export default App;
