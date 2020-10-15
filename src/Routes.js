import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useValues } from 'kea'
import logic from './store'
import R1 from "./Route1";
import R2 from "./Route2";

const Home = () => {
  const { counter } = useValues(logic)
  return (
    <div>
      <h3>Current value of counter: {counter}</h3>
      <ul>
        <li>Here we are using the value</li>
        <li><b>Step 1: </b>Go to Route1 and add some values to counter</li>
        <li><b>Step 2: </b>Go come back here, the counter is keeping his value</li>
        <li><b>Step 3: </b>Now go to Route 2 (which is not using either store actions or values)</li>
        <li><b>Step 4: </b>Come back and the store will be reseted (0)</li>
        <li><b>Step 5: </b>Help me please :(</li>
      </ul>
    </div>
  )
}

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/r1">Route1</Link>
            </li>
            <li>
              <Link to="/r2">Route2</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/r1">
            <R1 />
          </Route>
          <Route path="/r2">
            <R2 />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}