import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './views/home';
import DepartmentManagement from './views/department-management';
import PositionManagement from './views/position-management';
import EmployeeManagement from './views/employee-management.jsx';
import FormerEmployeeManagement from './views/former-employee-management.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Fragment>
            <Header />
            <Switch>
              <Route path="/" exact component={Home}></Route>
              <Route path="/departments/all" exact component={DepartmentManagement}></Route>
              <Route path="/positions/all" exact component={PositionManagement}></Route>
              <Route path="/employees/all" exact component={EmployeeManagement}></Route>
              <Route path="/employees/former" exact component={FormerEmployeeManagement}></Route>
            </Switch>
            <Footer />
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
