import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import EmployeesList from './components/Employees/EmployeesList';
import SingleEmployeeView from './components/Employees/SingleEmployeeView';
import AddEmployeeForm from './components/Employees/AddEmployeeForm';


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/employees" component={EmployeesList}/>
            <Route exact path="/employees/new" component={AddEmployeeForm}/>
            <Route exact path="/employees/:employeeId" component={SingleEmployeeView}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
