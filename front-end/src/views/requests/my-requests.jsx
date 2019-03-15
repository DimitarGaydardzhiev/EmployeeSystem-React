import React, { Component, Fragment } from 'react'
import { getAllDepartmentsAction } from '../../store/actions/department-actions';
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap';
import AdministrationDataRow from '../../components/administration-data-row';
import { getMyRequestsAction } from '../../store/actions/request-actions';
import RequestDataRow from '../../components/request-data-row';

class MyRequests extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.getMyRequests()
  }

  render() {
    const { myRequests } = this.props.myRequests

    return (
      <Fragment>
        <h3 className="d-mgmt text-center">My Requests</h3>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>From</th>
              <th>To</th>
              <th>Request Type</th>
              <th>Description</th>
              <th>Is Approved</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              myRequests.map(p => (
                <RequestDataRow key={p.id} data={p} canDelete='true' />
              ))
            }
          </tbody>
        </table>
        <div className="text-right pr-5">
          <Button className="px-4"
            onClick={this.redirect}>
            Add
          </Button>
        </div>
      </Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {
    myRequests: state.myRequests
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getMyRequests: () => dispatch(getMyRequestsAction()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyRequests);