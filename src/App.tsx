import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import styled from 'styled-components';
import Layout from 'components/Layout';




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
function Statistics() {
  return (
    <Layout >
      <h2>统计</h2>
    </Layout>
  );
}

function Tags() {
  return (
    <Layout>
      <h2>标签</h2>
    </Layout>
  );
}

function Money() {
  return (
    <Layout>
      <h2>账单</h2>
    </Layout>
  );
}