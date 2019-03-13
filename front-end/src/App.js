import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './views/home';
import EmployeeManagement from './views/employees/employee-management.jsx';
import FormerEmployeeManagement from './views/employees/former-employee-management.jsx';
import Login from './views/login';
import PrivateRoute from './Routes/PrivateRoute';
import Auth from './utils/auth';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutAction } from './store/actions/auth-actions';
import AddDepartment from './views/departments/add-department.jsx';
import AddPosition from './views/positions/add-position.jsx';
import DepartmentManagement from './views/departments/department-management';
import positionManagement from './views/positions/position-management';
import AddEmployee from './views/employees/add-employee';
import MyRequests from './views/requests/my-requests';
import AddRequest from './views/requests/add-request';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loggedIn: false
    }

    this.logout = this.logout.bind(this)
  }

  componentWillMount() {
    if (Auth.isUserAuthenticated()) {
      this.setState({ loggedIn: true })
    }
  }

  componentWillReceiveProps(props) {
    if (props.loginSuccess) {
      this.setState({ loggedIn: true })
    }
  }

  logout() {
    this.props.logout()
    //toastr.success('Logout successful')
    this.props.history.push('/login')
    this.setState({ loggedIn: false })
  }

  render() {
    const isAdmin = Auth.isUserAdmin()

    return (
      <div>
        <BrowserRouter>
          <Fragment>
            <Header
              loggedIn={this.state.loggedIn}
              isAdmin={isAdmin}
              logout={this.logout} />
            <Switch>
              <Route path='/login' component={() => <Login loggedIn={this.state.loggedIn} />} />
              <PrivateRoute path="/departments/all" exact component={DepartmentManagement}></PrivateRoute>
              <PrivateRoute path="/departments/add" exact component={AddDepartment}></PrivateRoute>
              <PrivateRoute path="/positions/all" exact component={positionManagement}></PrivateRoute>
              <PrivateRoute path="/positions/add" exact component={AddPosition}></PrivateRoute>
              <PrivateRoute path="/employees/all" exact component={EmployeeManagement}></PrivateRoute>
              <PrivateRoute path="/employees/former" exact component={FormerEmployeeManagement}></PrivateRoute>
              <PrivateRoute path="/employees/add" exact component={AddEmployee}></PrivateRoute>
              <PrivateRoute path="/requests/my" exact component={MyRequests}></PrivateRoute>
              <PrivateRoute path="/requests/new" exact component={AddRequest}></PrivateRoute>
              <Route path='/' component={() => <Home loggedIn={this.state.loggedIn} />} />
            </Switch>
            <Footer />
          </Fragment>
        </BrowserRouter>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loginSuccess: state.login.success
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(logoutAction()),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))
