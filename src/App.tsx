import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Tags from 'views/Tags';
import Money from 'views/Money';
import Statistics from 'views/Statistics';




function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/money" />
        <Route path="/tags">
          <Tags />
        </Route>
        <Route path="/money">
          <Money />
        </Route>
        <Route path="/statistics">
          <Statistics />
        </Route>
        <Route path="*" >
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
function NotFound() {
  return <h2>404</h2>;
}




