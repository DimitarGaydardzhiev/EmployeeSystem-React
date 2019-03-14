import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { addDepartmentAction, getAllDepartmentsAction } from '../../store/actions/department-actions';
import toastr from 'toastr';
import Input from '../../common/Input';
import Button from '../../common/Button';
import singleNameValidator from '../../utils/singleNameValidator';

class DepartmentComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      id: 0
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.departmentId = Number(this.props.match.params.id)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault()
    if (!singleNameValidator(this.state.name)) return
    this.props.addDepartment(this.state.name, this.state.id)
  }

  componentWillMount() {
    debugger
    this.props.getAllDepartments()
  }

  componentWillUnmount(){
    debugger
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.addDepartmentError.hasError) {
      //toastr.error(nextProps.createProductError.message)
    } else if (nextProps.addDepartmentSuccess) {
      //this.props.redirect()
      toastr.success('Department saved successfully')
      //this.props.history.push('/departments/all')
      window.location='/departments/all'
    } else {
      if (this.departmentId && nextProps.departments.departments.length) {
        let department = nextProps.departments.departments.find(d => d.id === this.departmentId)
        if (department) {
          this.setState({
            name: department.name,
            id: department.id
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
                placeholder='Department name'
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
    addDepartmentSuccess: state.addDepartment.success,
    addDepartmentError: state.addDepartmentError,
    departments: state.departments
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addDepartment: (name, id) => dispatch(addDepartmentAction(name, id)),
    getAllDepartments: () => dispatch(getAllDepartmentsAction())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(DepartmentComponent))