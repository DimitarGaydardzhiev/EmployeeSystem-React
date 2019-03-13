import React, { Component, Fragment } from 'react'
import { getAllDepartmentsAction } from '../../store/actions/department-actions';
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap';
import AdministrationDataRow from '../../components/administration-data-row';
import { getMyRequestsAction, getPendingRequestsAction } from '../../store/actions/request-actions';
import RequestDataRow from '../../components/request-data-row';

class PendingRequests extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.getPendingRequests()
    }

    render() {
        const { pendingRequests } = this.props.pendingRequests

        return (
            <Fragment>
                <h3 className="d-mgmt text-center">Pending Requests</h3>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Employee</th>
                            <th>From</th>
                            <th>To</th>
                            <th>Request Type</th>
                            <th>Description</th>
                            <th>Is Approved</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            pendingRequests.map(p => (
                                <RequestDataRow key={p.id} data={p} />
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
        pendingRequests: state.pendingRequests
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getPendingRequests: () => dispatch(getPendingRequestsAction()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PendingRequests);