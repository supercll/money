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
import Tag from 'views/Tag';




function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact strict from="/" to="/money" />

        <Route exact path="/tags">
          <Tags />
        </Route>
        <Route exact path="/tags/:tag">
          <Tag />
        </Route>
        <Route exact path="/money">
          <Money />
        </Route>
        <Route exact path="/statistics">
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




