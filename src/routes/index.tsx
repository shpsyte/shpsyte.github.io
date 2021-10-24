import React from 'react';
import { Switch, Route } from 'react-router-dom';


function Dashboard()  {
  return (
    <h1>teste</h1>
  )
}
function About() {
  return (
    <h2>about</h2>
  )
}

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/about" exact component={About} />
    </Switch>
   )
};

export default Routes;
