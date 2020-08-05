import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Tags from 'views/Tags';
import Statistics from 'views/Statistics';
import Tag from 'views/Tag';
import styled from 'styled-components';
import Home from 'views/Home';


const Wrapper = styled.div`
position: relative;
color: #333;
max-width: 480px;
margin: 0 auto;
`;

function App() {
  return (
    <Wrapper>
      <Router>
        <Switch>
          <Redirect exact strict from="/" to="/tags" />

          <Route exact path="/tags">
            <Tags />
          </Route>
          <Route exact path="/tags/:id">
            <Tag />
          </Route>
          <Route exact path="/statistics">
            <Statistics />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="*" >
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </Wrapper>
  );
}

export default App;
function NotFound() {
  return <h2>404</h2>;
}




