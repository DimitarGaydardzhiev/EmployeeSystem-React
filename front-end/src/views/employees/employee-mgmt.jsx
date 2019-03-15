import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import EmployeeDataRow from '../../components/employee-data-row';
import { getAllEmployeesAction } from '../../store/actions/employee-actions';
import Auth from '../../utils/auth';

class EmployeeManagement extends Component {
    componentWillMount() {
        this.props.getAllEmployees()
    }

    render() {
        const { employees } = this.props.employees
        const isAdmin = Auth.isUserAdmin()

        return (
            <Fragment>
                <h3 className="d-mgmt text-center">Employees Management</h3>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Employee</th>
                            <th>Position</th>
                            <th>Birthday</th>
                            <th>In Company From</th>
                            <th>Department</th>
                            <th>Description</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employees.map(e => (
                                <EmployeeDataRow key={e.id} data={e} isAdmin={isAdmin} />
                            ))
                        }
                    </tbody>
                </table>
            </Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        employees: state.employees
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getAllEmployees: () => dispatch(getAllEmployeesAction()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeManagement);