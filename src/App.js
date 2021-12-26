import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import { About } from "./components/About";
import Alert from "./components/Alert";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Navbar } from "./components/Navbar";
import { Signup } from "./components/Signup";
import Notestate from "./context/notes/noteState";


function App() {
  return (
    <>
      <Notestate>
        <Router>
          <Navbar />
          <Alert message = "this is amezing"  />
          <div className="container">
            <Switch >
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/login">
                <Login/>
              </Route>
              <Route path="/signup">
                <Signup/>
              </Route>
            </Switch>
          </div>
        </Router>
      </Notestate>
    </>
  );
}

export default App;
