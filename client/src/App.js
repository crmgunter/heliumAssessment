import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import EmployeesList from './components/Employees/EmployeesList';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/employees" component={EmployeesList}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
