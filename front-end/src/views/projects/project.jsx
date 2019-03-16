import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { addPositionAction, getAllPositionsAction } from '../../store/actions/position-actions';
import Input from '../../common/Input';
import Button from '../../common/Button';
import singleNameValidator from '../../utils/singleNameValidator';
import toastr from 'toastr';
import DatePicker from 'react-datepicker';
import Textarea from '../../common/Textarea';
import MultiSelect from "@kenshooui/react-multi-select";
import { getAllEmployeesAction } from '../../store/actions/employee-actions';
import { addProjectAction } from '../../store/actions/projects-actions';

class ProjectComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            id: 0,
            startDate: '',
            endDate: '',
            description: '',
            employees: [],
            employeeIds: []
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.projectId = Number(this.props.match.params.id)
        this.handleStartDateChange = this.handleStartDateChange.bind(this)
        this.handleEndDateChange = this.handleEndDateChange.bind(this)
    }

    componentWillMount() {
        this.props.getAllEmployees()
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()
        if (!singleNameValidator(this.state.name)) return
        this.props.addProject(
            this.state.name,
            this.state.id,
            this.state.startDate,
            this.state.endDate,
            this.state.description,
            this.state.employeeIds)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.employees.employees.length) {
            let allEmployees = []
            nextProps.employees.employees
                .forEach(e => {
                    allEmployees.push({ id: e.id, label: `${e.firstName} ${e.lastName}` })
                });

            this.setState({
                employees: allEmployees
            })
        }
        debugger
        if (nextProps.addProjectError.hasError) {
            toastr.error(`Error: ${nextProps.addProjectError.message}`)
        } else if (nextProps.addProjectSuccess) {
            toastr.success('Project saved successfully')
            window.location = '/projects/all'
        } else {
            if (this.projectId && nextProps.projects.projects.length) {
                let project = nextProps.projects.projects.find(d => d.id === this.projectId)
                if (project) {
                    this.setState({
                        name: project.name,
                        id: project.id
                    })
                }
            }
        }
    }

    handleStartDateChange(date) {
        this.setState({
            startDate: date
        });
    }

    handleEndDateChange(date) {
        this.setState({
            endDate: date
        });
    }

    handleChange(selectedItems) {
        this.state.employeeIds = selectedItems.map(i => i.id)
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
                                placeholder='Project name'
                                onChange={this.onChange}
                                value={this.state.name} />
                            <div className="form-group text-right">
                                Start Date:
                             <DatePicker
                                    selected={this.state.startDate}
                                    onChange={this.handleStartDateChange}
                                    className="form-control" />
                            </div>
                            <div className="form-group text-right">
                                End Date:
                             <DatePicker
                                    selected={this.state.endDate}
                                    onChange={this.handleEndDateChange}
                                    className="form-control" />
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
                            <div className="form-group text-right">
                                <MultiSelect
                                    items={this.state.employees}
                                    selectedItems={this.state.selectedItems}
                                    onChange={this.handleChange} />
                            </div>
                            <hr />
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
        addProjectSuccess: state.addProject.success,
        addProjectError: state.addProjectError,
        employees: state.employees
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addProject: (name, id, startDate, endDate, description, employeeIds) => dispatch(addProjectAction(name, id, startDate, endDate, description, employeeIds)),
        getAllEmployees: () => dispatch(getAllEmployeesAction())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProjectComponent))
