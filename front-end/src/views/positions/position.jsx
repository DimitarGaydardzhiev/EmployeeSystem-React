import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { addPositionAction, getAllPositionsAction } from '../../store/actions/position-actions';
import Input from '../../common/Input';
import Button from '../../common/Button';
import singleNameValidator from '../../utils/singleNameValidator';
import toastr from 'toastr';

class PositionComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      id: 0
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.positionId = Number(this.props.match.params.id)
  }

  componentWillMount() {
    this.props.getAllPositions()
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()
    if (!singleNameValidator(this.state.name)) return
    this.props.addPosition(this.state.name, this.state.id)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.addPositionError.hasError) {
      toastr.error(`Error: ${nextProps.addPositionError.message}`)
    } else if (nextProps.addPositionSuccess) {
      toastr.success('Position saved successfully')
      window.location = '/positions/all'
    } else {
      if (this.positionId && nextProps.positions.positions.length) {
        let position = nextProps.positions.positions.find(d => d.id === this.positionId)
        if (position) {
          this.setState({
            name: position.name,
            id: position.id
          })
        }
      }
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
                onChange={this.onChange}
                value={this.state.name} />
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
    addPositionError: state.addPositionError,
    positions: state.positions
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addPosition: (name, id) => dispatch(addPositionAction(name, id)),
    getAllPositions: () => dispatch(getAllPositionsAction())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PositionComponent))