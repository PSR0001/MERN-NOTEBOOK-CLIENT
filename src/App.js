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
    <First />
        <Router>
          
          {/* <Alert message = "this is amezing"  /> */}
          <div className="First-height">
          <Navbar />
            <Switch >
              {/* <Route path="/index">
              <First />
              </Route> */}
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
