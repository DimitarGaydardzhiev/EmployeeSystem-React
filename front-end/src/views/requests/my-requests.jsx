import React, { Component, Fragment } from 'react'
import { getAllDepartmentsAction } from '../../store/actions/department-actions';
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap';
import AdministrationDataRow from '../../components/administration-data-row';
import { getMyRequestsAction } from '../../store/actions/request-actions';

class MyRequests extends Component {
  constructor(props) {
    super(props)

    //this.routeChange = this.routeChange.bind(this);
  }

  // routeChange() {
  //     let path = `/departments/add`;
  //     this.props.history.push(path);
  // }

  componentWillMount() {
    this.props.getMyRequests()
  }

  render() {
    const { myRequests } = this.props.myRequests
    console.log(myRequests)
    return (
      <Fragment>
        <div></div>
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