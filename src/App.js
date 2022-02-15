import "./App.css";
import React from "react";
//import Nav from './componants/nav';
//import Text from './componants/text';
//import Todo from './componants/todo';
//import ShoHide from './componants/shoHide';
//import RandUserClass from './componants/RandUserClass';
//import To_do from "./componants/to_do";
//import ClassComp from './componants/classcomp';
//import Randuser from './componants/randomuser';
import Sign_up from "./componants/signup";
import Login from "./componants/login"
//import Dashboard from "./componants/dashboard";
import {
  BrowserRouter as Router,
  Routes,Switch,
  Route,
  Link,Redirect
} from "react-router-dom";
function App() {
  return (
    //<Login/>
    //<Dashboard/>
    //<Sign_up />
    //<To_do />
    <div className="App">
        <Router>
        <div className="container my-3" >
          <Routes>
          
              
          <Route path="/" element={<Login/>} />
            <Route path="/signup" element={<Sign_up/>} />
            
            
          </Routes>
          </div>
        </Router>
      </div>
  );
}
export default App;
