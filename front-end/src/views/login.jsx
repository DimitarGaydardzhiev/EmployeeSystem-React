import React, { Component } from 'react'
import loginValidator from '../utils/loginValidator';
import { loginAction } from '../store/actions/auth-actions';
import { Redirect } from 'react-router-dom'
import Auth from '../utils/auth';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: ''
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

    this.renderRedirect = () => {
      if (props.loggedIn) {
        return <Redirect to='/' />
      }
    }
  }
  
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()
    if (!loginValidator(this.state.email, this.state.password)) return
    this.props.login(this.state.email, this.state.password)
  }

  render() {
    return (
      <div className="row text-center">
        {this.renderRedirect()}
        <br />
        <div className="col-md-4"></div>
        <div className="col-md-4 border-shadow">
          <h2>Login</h2>
          <hr />
          <section>
            <form method="post" onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" className="form-control" onChange={this.onChange} />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" className="form-control" onChange={this.onChange} />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-info">Log in</button>
              </div>
            </form>
          </section>
        </div>
        <div className="col-md-4"></div>
      </div >
    )
  }
}

function mapStateToProps(state) {
  return {
    loginSuccess: state.login.success,
    loginError: state.loginError
  }
}

function mapDispatchToProps(dispatch) {
  return {
    login: (email, password) => dispatch(loginAction(email, password)),
    //redirect: () => dispatch(redirectAction())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))