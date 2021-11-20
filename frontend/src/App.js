
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Bank from './components/Bank';
import Account from './components/Account';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand">CBSL APP</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                  <Link to={'/bank'} className="nav-link">Bank</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/account'} className="nav-link">Account</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/'} className="nav-link">Bank Details </Link>
                </li>
                <li className="nav-item">
                  <Link to={'/'} className="nav-link">Account Details </Link>
                </li>
              </ul>
            </div>
          </nav> <br/>
          <h2>Welcome CBSL Application </h2> <br/>
          <Switch>
              <Route exact path='/bank' component={Bank} />
              <Route exact path='/account' component={Account} />
             
              
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;