import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './views/home';
import EmployeeManagement from './views/employees/employee-mgmt.jsx';
import FormerEmployeeManagement from './views/employees/former-employee-mgmt.jsx';
import Login from './views/login';
import PrivateRoute from './Routes/PrivateRoute';
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
              <PrivateRoute path="/departments/add" exact component={DepartmentComponent}></PrivateRoute>
              <PrivateRoute path="/departments/:id" exact component={DepartmentComponent}></PrivateRoute>
              <PrivateRoute path="/positions/all" exact component={PositionManagement}></PrivateRoute>
              <PrivateRoute path="/positions/add" exact component={PositionComponent}></PrivateRoute>
              <PrivateRoute path="/positions/:id" exact component={PositionComponent}></PrivateRoute>
              <PrivateRoute path="/employees/all" exact component={EmployeeManagement}></PrivateRoute>
              <PrivateRoute path="/employees/former" exact component={FormerEmployeeManagement}></PrivateRoute>
              <PrivateRoute path="/employees/add" exact component={EmployeeComponent}></PrivateRoute>
              <PrivateRoute path="/requests/my" exact component={MyRequests}></PrivateRoute>
              <PrivateRoute path="/requests/new" exact component={AddRequest}></PrivateRoute>
              <PrivateRoute path="/requests/pending" exact component={PendingRequests}></PrivateRoute>
              <PrivateRoute path="/requests/approved" exact component={ApprovedRequests}></PrivateRoute>
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
