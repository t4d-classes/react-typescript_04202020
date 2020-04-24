import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './index.css';

const Home = () => {
  console.log(window.location);
  return <h2>Home</h2>;
};

const About = () =>  {
 console.log(window.location);
 return <h2>About</h2>; 
};

const Contact = () => <h2>Contact</h2>;

ReactDOM.render(
  <Router>
    <header>
      <h1>My Cool Company</h1>
    </header>
    <nav id="main-menu">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
    <div>
      <Switch>
        <Route path="/" exact>
            <Home />
        </Route>
        <Route path="/about">
            <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </div>
  </Router>,
  document.querySelector('#root'),
);