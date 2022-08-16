import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { About } from "./components/About";
// import Alert from "./components/Alert";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Navbar } from "./components/Navbar";
import { Signup } from "./components/Signup";
import Notestate from "./context/notes/noteState";
import First from "./components/First";


function App() {
  return (
    <>
      <Notestate>
    {/* <First />    */}
          
          {/* <Alert message = "this is amezing"  /> */}
          {/* <div className="First-height"> */}
        <Router>
          <Navbar />
            <Switch >
              <Route exact path="/">
              <First />
              </Route>
              <Route exact path="/home">
                <Home />
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/login">
                <Login/>
              </Route>
              <Route exact path="/signup">
                <Signup/>
              </Route>
            </Switch>
        </Router>
          {/* </div> */}
      </Notestate>
    </>
  );
}

export default App;
