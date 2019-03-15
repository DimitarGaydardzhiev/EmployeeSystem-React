import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getAllDepartmentsAction } from '../../store/actions/department-actions';
import toastr from 'toastr';
import Input from '../../common/Input';
import Button from '../../common/Button';
import Textarea from '../../common/Textarea';
import { Form } from 'react-bootstrap'
import { getAllPositionsAction } from '../../store/actions/position-actions';
import { getAllRolesAction } from '../../store/actions/role-actions';
import { registerAction } from '../../store/actions/employee-actions';
import registerValidator from '../../utils/registerValidator';

class EmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            roleId: '',
            positionId: '',
            departmentId: '',
            description: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()
        if (!registerValidator(
            this.state.firstName,
            this.state.lastName,
            this.state.email,
            this.state.password,
            this.state.confirmPassword,
            this.state.roleId,
            this.state.positionId)) return

        this.props.register(
            this.state.firstName,
            this.state.lastName,
            this.state.email,
            this.state.password,
            this.state.confirmPassword,
            this.state.roleId,
            this.state.positionId,
            this.state.departmentId,
            this.state.description)
    }

    componentWillMount() {
        this.props.getAllDepartments()
        this.props.getAllPositions()
        this.props.getAllRoles()
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.roles.roles.length) {
            this.state.roleId = nextProps.roles.roles[0].id
        }
        if (nextProps.positions.positions.length) {
            this.state.positionId = nextProps.positions.positions[0].id
        }
        if (nextProps.departments.departments.length) {
            this.state.departmentId = nextProps.departments.departments[0].id
        }

        if (nextProps.addEmployeeError.hasError) {
            toastr.error(`Error: ${nextProps.addEmployeeError.message}`)
        } else if (nextProps.addEmployeeSuccess) {
            toastr.success('Employee saved successfully')
            window.location = '/employees/all'
        }
    }

    render() {
        const { departments } = this.props.departments
        const { positions } = this.props.positions
        const { roles } = this.props.roles

        return (
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <section>
                        <form method="post" onSubmit={this.onSubmit}>
                            <h4>Create a new employee account.</h4>
                            <hr />
                            <Input
                                className='form-control'
                                type='text'
                                name='firstName'
                                label='First Name'
                                placeholder='First Name'
                                onChange={this.onChange} />
                            <Input
                                className='form-control'
                                type='text'
                                name='lastName'
                                label='Last Name'
                                placeholder='Last Name'
                                onChange={this.onChange} />
                            <Input
                                className='form-control'
                                type='email'
                                name='email'
                                label='Email'
                                placeholder='Email'
                                onChange={this.onChange} />
                            <Input
                                className='form-control'
                                type='password'
                                name='password'
                                label='Password'
                                placeholder='Password'
                                onChange={this.onChange} />
                            <Input
                                className='form-control'
                                type='password'
                                name='confirmPassword'
                                label='Confirm Password'
                                placeholder='Confirm Password'
                                onChange={this.onChange} />
                            <Form.Label>Role</Form.Label>
                            <Form.Control as="select" className='form-control' name="roleId" onChange={this.onChange}>
                                {
                                    roles.map(r => (<option key={r.id} value={r.id}>{r.name}</option>))
                                }
                            </Form.Control>
                            <br />
                            <Form.Label>Position</Form.Label>
                            <Form.Control as="select" className='form-control' name="positionId" onChange={this.onChange}>
                                {
                                    positions.map(p => (<option key={p.id} value={p.id}>{p.name}</option>))
                                }
                            </Form.Control>
                            <br />
                            <Form.Label>Department</Form.Label>
                            <Form.Control as="select" className='form-control' name="departmentId" onChange={this.onChange}>
                                {
                                    departments.map(d => (<option key={d.id} value={d.id}>{d.name}</option>))
                                }
                            </Form.Control>
                            <br />
                            <Textarea
                                className='form-control'
                                name='description'
                                placeholder='Personal Description ...'
                                cols='5'
                                rows='5'
                                onChange={this.onChange} />
                            <Button type='submit' className='btn btn-primary' value='Register' />
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
        addEmployeeSuccess: state.addEmployee.success,
        addEmployeeError: state.addEmployeeError,
        departments: state.departments,
        positions: state.positions,
        roles: state.roles
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getAllDepartments: () => dispatch(getAllDepartmentsAction()),
        getAllPositions: () => dispatch(getAllPositionsAction()),
        getAllRoles: () => dispatch(getAllRolesAction()),
        register: (firstName, lastName, email, password, confirmPassword, roleId, positionId, departmentId, description) => dispatch(registerAction(
            firstName,
            lastName,
            email,
            password,
            confirmPassword,
            roleId,
            positionId,
            departmentId,
            description))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EmployeeComponent));