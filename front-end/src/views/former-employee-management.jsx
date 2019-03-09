import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { getAllFormerEmployeesAction } from '../store/actions/employee-actions';
import FormerEmployeeDataRow from '../components/former-employee-data-row';

class FormerEmployeeManagement extends Component {
    componentWillMount() {
        this.props.getAllFormerEmployees()
    }

    render() {
        const { formerEmployees } = this.props.formerEmployees

        return (
            <Fragment>
                <h3 className="d-mgmt text-center">Former Employees Management</h3>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Employee</th>
                            <th>Position</th>
                            <th>Birthday</th>
                            <th>In Company From</th>
                            <th>Department</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            formerEmployees.map(fe => (
                                <FormerEmployeeDataRow key={fe.id} data={fe} />
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
        formerEmployees: state.formerEmployees
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getAllFormerEmployees: () => dispatch(getAllFormerEmployeesAction()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FormerEmployeeManagement);