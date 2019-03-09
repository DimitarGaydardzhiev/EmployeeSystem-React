import React, { Component, Fragment } from 'react'
import getAllDepartmentsAction from '../store/actions/department-actions';
import { connect } from 'react-redux'
import AdministrationDataRow from '../components/administration-data-row';

class DepartmentManagement extends Component {
    componentWillMount() {
        this.props.getAllDepartments()
    }

    render() {
        const { departments } = this.props.departments

        return (
            <Fragment>
                <h3 className="d-mgmt text-center">Departments Management</h3>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Employees Count</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            departments.map(d => (
                                <AdministrationDataRow key={d.id} data={d} />
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
        departments: state.departments
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getAllDepartments: () => dispatch(getAllDepartmentsAction()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DepartmentManagement);