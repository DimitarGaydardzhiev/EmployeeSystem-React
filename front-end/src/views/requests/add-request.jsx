import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import toastr from 'toastr';
import requestValidator from '../../utils/requestValidator';
import Textarea from '../../common/Textarea';
import { addRequestAction, getRequestTypesAction } from '../../store/actions/request-actions';
import DatePicker from 'react-datepicker';
import { Form } from 'react-bootstrap'

class AddRequest extends Component {
  constructor(props) {
    super(props)

    this.state = {
      from: '',
      to: '',
      description: '',
      requestTypeId: ''
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.handleFromChange = this.handleFromChange.bind(this)
    this.handleToChange = this.handleToChange.bind(this)
  }

  getCurrentDate() {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();

    return `${yyyy}-${mm}-${dd}`
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()
    if (!requestValidator(this.state.from, this.state.to, this.state.requestTypeId)) return
    this.props.addRequest(this.state.from, this.state.to, this.state.description, this.state.requestTypeId)
  }

  handleFromChange(date) {
    this.setState({
      from: date
    });
  }

  handleToChange(date) {
    this.setState({
      to: date
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.requestTypes.requestTypes.length) {
      this.state.requestTypeId = nextProps.requestTypes.requestTypes[0].id
    }

    if (nextProps.addRequestError.hasError) {
      toastr.error(`Error: ${nextProps.addRequestError.message}`)
    } else if (nextProps.addRequestSuccess) {
      toastr.success('Request created successfully')
      this.props.history.push('/requests/my')
    }
  }

  componentWillMount() {
    this.props.getRequestTypes()
  }

  render() {
    const { requestTypes } = this.props.requestTypes
    console.log(requestTypes)
    return (
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-4">
          <form method="POST" onSubmit={this.onSubmit}>
            <hr />
            <div className="form-group text-right">
              From:
            <DatePicker
                selected={this.state.from}
                onChange={this.handleFromChange}
                className="form-control" />
            </div>
            <div className="form-group text-right">
              To:
            <DatePicker
                selected={this.state.to}
                onChange={this.handleToChange}
                className="form-control" />
            </div>
            <div className="form-group text-right">
              <Form.Control as="select" className='form-control' name="requestTypeId" onChange={this.onChange}>
                {
                  requestTypes.map(r => (<option key={r.id} value={r.id}>{r.name}</option>))
                }
              </Form.Control>
            </div>
            <div className="form-group text-right">
              <Textarea
                className='form-control'
                name='description'
                placeholder='Description ...'
                cols='5'
                rows='5'
                onChange={this.onChange} />
            </div>
            <div className="form-group col-md-6">
              <button type="submit" className="btn btn-primary">Save</button>
            </div>
          </form>
        </div>
        <div className="col-md-6"></div>
      </div >
    )
  }
}

function mapStateToProps(state) {
  return {
    addRequestSuccess: state.addRequest.success,
    addRequestError: state.addRequestError,
    requestTypes: state.requestTypes
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addRequest: (from, to, description, requestTypeId) => dispatch(addRequestAction(from, to, description, requestTypeId)),
    getRequestTypes: () => dispatch(getRequestTypesAction()),
    //redirect: () => dispatch(redirectAction())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddRequest))