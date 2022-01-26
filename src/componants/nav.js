import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import RandUserClass from './RandUserClass';
import ClassComp from './classcomp';
 import Todo from './todo';
export default function Nav() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">to do</Link>
            </li>
            <li>
              <Link to="/classcomp">Class componant</Link>
            </li>
            <li>
              <Link to="/rand">Random Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/rand">
            <RandUserClass />
          </Route>
          <Route path="/classcomp">
            <ClassComp />
          </Route>
          <Route path="/">
            <Todo />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}