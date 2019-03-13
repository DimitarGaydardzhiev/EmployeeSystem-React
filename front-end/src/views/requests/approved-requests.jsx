import React, { Component, Fragment } from 'react'
import { getAllDepartmentsAction } from '../../store/actions/department-actions';
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap';
import AdministrationDataRow from '../../components/administration-data-row';
import { getMyRequestsAction, getPendingRequestsAction, getApprovedRequestsAction } from '../../store/actions/request-actions';
import RequestDataRow from '../../components/request-data-row';

class ApprovedRequests extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.getApprovedRequests()
    }

    render() {
        const { approvedRequests } = this.props.approvedRequests
        console.log(approvedRequests)

        return (
            <Fragment>
                <h3 className="d-mgmt text-center">Approved Requests</h3>
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
                            approvedRequests.map(p => (
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
        approvedRequests: state.approvedRequests
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getApprovedRequests: () => dispatch(getApprovedRequestsAction()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ApprovedRequests);