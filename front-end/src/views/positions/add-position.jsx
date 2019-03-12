import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { addPositionAction } from '../../store/actions/position-actions';
import Input from '../../common/Input';
import Button from '../../common/Button';
import singleNameValidator from '../../utils/singleNameValidator';
import toastr from 'toastr';

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
    if (!singleNameValidator(this.state.name)) return
    this.props.addPosition(this.state.name)
  }

  componentWillReceiveProps(nextProps) {
    debugger
    if (nextProps.addPositionError.hasError) {
      //toastr.error(nextProps.createProductError.message)
    } else if (nextProps.addPositionSuccess) {
      //this.props.redirect()
      toastr.success('Position created successfully')
      this.props.history.push('/positions/all')
    }
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <section>
            <form method="post" onSubmit={this.onSubmit}>
              <Input
                className='form-control'
                type='text'
                name='name'
                label='Name'
                placeholder='Position name'
                onChange={this.onChange} />
              <Button type='submit' className='btn btn-primary' value='Save' />
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
    addPositionSuccess: state.addPosition.success,
    addPositionError: state.addPositionError
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addPosition: (name) => dispatch(addPositionAction(name)),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddPosition))