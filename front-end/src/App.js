import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './views/home';
import DepartmentManagement from './views/department-management';
import PositionManagement from './views/position-management';
import EmployeeManagement from './views/employee-management.jsx';
import FormerEmployeeManagement from './views/former-employee-management.jsx';
import Login from './views/login';
import PrivateRoute from './Routes/PrivateRoute';
import Auth from './utils/auth';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loggedIn: false
    }

    //this.logout = this.logout.bind(this)
  }

  componentWillMount() {
    debugger
    if (Auth.isUserAuthenticated()) {
      this.setState({ loggedIn: true })
    }
  }

  render() {
    const isAdmin = Auth.isUserAdmin()

    return (
      <div>
        <Router>
          <Fragment>
            <Header
              loggedIn={this.state.loggedIn}
              isAdmin={isAdmin} />
            <Switch>
              <Route path='/login' component={() => <Login loggedIn={this.state.loggedIn} />} />
              <PrivateRoute path="/departments/all" exact component={DepartmentManagement}></PrivateRoute>
              <PrivateRoute path="/positions/all" exact component={PositionManagement}></PrivateRoute>
              <PrivateRoute path="/employees/all" exact component={EmployeeManagement}></PrivateRoute>
              <PrivateRoute path="/employees/former" exact component={FormerEmployeeManagement}></PrivateRoute>
              <PrivateRoute path='/' component={Home} />
            </Switch>
            <Footer />
          </Fragment>
        </Router>
      </div>
    );
  }
}

export default App;
