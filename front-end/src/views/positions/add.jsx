import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { addPositionAction } from '../../store/actions/position-actions';

class AddPosition extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: ''
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  
  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()
    //if (!loginValidator(this.state.email, this.state.password)) return
    this.props.addPosition(this.state.name)
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <section>
            <form method="post" onSubmit={this.onSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="name" id="name" name="name" className="form-control" onChange={this.onChange} />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary">Save</button>
              </div>
            </form>
          </section>
        </div>
        <div className="col-md-4"></div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    addPositionSuccess: state.addPositionSuccess,
    addPositionError: state.addPositionError
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addPosition: (name) => dispatch(addPositionAction(name)),
    //redirect: () => dispatch(redirectAction())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddPosition))