import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { addDepartmentAction, getAllDepartmentsAction } from '../../store/actions/department-actions';
import toastr from 'toastr';
import Input from '../../common/Input';
import Button from '../../common/Button';
import singleNameValidator from '../../utils/singleNameValidator';

class AddDepartment extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: ''
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.departmentId = this.props.match.params.id
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()
    if (!singleNameValidator(this.state.name)) return
    this.props.addDepartment(this.state.name)
  }

  componentWillMount() {
    if (this.departmentId) {
      this.props.getAllDepartments()
    }
  }

  componentWillReceiveProps(nextProps) {
    debugger
    if (nextProps.addDepartmentError.hasError) {
      //toastr.error(nextProps.createProductError.message)
    } else if (nextProps.addDepartmentSuccess) {
      //this.props.redirect()
      toastr.success('Department created successfully')
      this.props.history.push('/departments/all')
    }
  }

  getDepartment() {
    var deparment = this.props.departments.find(d => d.id === this.departmentId)
    console.log(deparment)
  }

  render() {
    console.log(this.props.departments)
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
                placeholder='Department name'
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
    addDepartmentSuccess: state.addDepartment.success,
    addDepartmentError: state.addDepartmentError,
    departments: state.departments
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addDepartment: (name) => dispatch(addDepartmentAction(name)),
    getAllDepartments: () => dispatch(getAllDepartmentsAction())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddDepartment))