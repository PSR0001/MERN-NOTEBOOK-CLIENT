import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import { About } from "./components/About";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import Notestate from "./context/notes/noteContext";


function App() {
  return (
    <>
      <Notestate>
      <Router>
        <Navbar />

          <Switch >
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>

      </Router>
      </Notestate>
    </>
  );
}

export default App;
