import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './views/home';
import EmployeeManagement from './views/employees/employee-mgmt.jsx';
import FormerEmployeeManagement from './views/employees/former-employee-mgmt.jsx';
import Login from './views/login';
import PrivateRoute from './Routes/PrivateRoute';
import AdminRoute from './Routes/AdminRoute';
import Auth from './utils/auth';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { logoutAction } from './store/actions/auth-actions';
import DepartmentComponent from './views/departments/department.jsx';
import DepartmentManagement from './views/departments/departments-mgmt';
import PositionManagement from './views/positions/position-mgmt';
import EmployeeComponent from './views/employees/employee';
import MyRequests from './views/requests/my-requests';
import AddRequest from './views/requests/add-request';
import PendingRequests from './views/requests/pending-requests';
import ApprovedRequests from './views/requests/approved-requests';
import PositionComponent from './views/positions/position.jsx';
import toastr from 'toastr'

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
    toastr.success('Logout successful')
    this.props.history.push('/login')
    this.setState({ loggedIn: false })
  }

  render() {
    const isAdmin = Auth.isUserAdmin()
    const username = Auth.getUsername()

    return (
      <div>
        <BrowserRouter>
          <Fragment>
            <Header
              loggedIn={this.state.loggedIn}
              isAdmin={isAdmin}
              logout={this.logout}
              username={username} />
            <Switch>
              <Route path='/login' component={() => <Login loggedIn={this.state.loggedIn} />} />
              <Route path="/departments/all" exact component={DepartmentManagement}></Route>
              <AdminRoute path="/departments/add" exact component={DepartmentComponent}></AdminRoute>
              <AdminRoute path="/departments/:id" exact component={DepartmentComponent}></AdminRoute>
              <Route path="/positions/all" exact component={PositionManagement}></Route>
              <AdminRoute path="/positions/add" exact component={PositionComponent}></AdminRoute>
              <AdminRoute path="/positions/:id" exact component={PositionComponent}></AdminRoute>
              <PrivateRoute path="/employees/all" exact component={EmployeeManagement}></PrivateRoute>
              <PrivateRoute path="/employees/former" exact component={FormerEmployeeManagement}></PrivateRoute>
              <AdminRoute path="/employees/add" exact component={EmployeeComponent}></AdminRoute>
              <PrivateRoute path="/requests/my" exact component={MyRequests}></PrivateRoute>
              <AdminRoute path="/requests/new" exact component={AddRequest}></AdminRoute>
              <AdminRoute path="/requests/pending" exact component={PendingRequests}></AdminRoute>
              <AdminRoute path="/requests/approved" exact component={ApprovedRequests}></AdminRoute>
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
