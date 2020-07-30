import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import styled from 'styled-components';
import Nav from 'components/Nav';

const Wrapper = styled.div`
  border: 1px solid red;
  height: 100vh;
  display: flex;
  flex-direction: column
`;

const Main = styled.div`
  border: 1px solid green;
  flex-grow: 1;
  overflow: auto;
`;



function App() {
  return (
    <Router>
      <Wrapper>
        <Main>
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

        </Main>
        <Nav />

      </Wrapper>
    </Router>
  );
}

export default App;
function NotFound() {
  return <h2>404</h2>;
}
function Statistics() {
  return <h2>统计</h2>;
}

function Tags() {
  return <h2>标签</h2>;
}

function Money() {
  return <h2>记账</h2>;
}