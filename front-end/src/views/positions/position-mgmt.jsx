import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { getAllPositionsAction } from '../../store/actions/position-actions';
import { Button } from 'react-bootstrap';
import AdministrationDataRow from '../../components/administration-data-row';
import Auth from '../../utils/auth';

class PositionManagement extends Component {
    constructor(props) {
        super(props)

        this.routeChange = this.routeChange.bind(this);
    }

    routeChange() {
        let path = `/positions/add`;
        this.props.history.push(path);
    }

    componentWillMount() {
        this.props.getAllPositions()
    }

    render() {
        const { positions } = this.props.positions
        const isAdmin = Auth.isUserAdmin()

        return (
            <Fragment>
                <h3 className="d-mgmt text-center">Positions Management</h3>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Employees Count</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            positions.map(p => (
                                <AdministrationDataRow key={p.id} data={p} isAdmin={isAdmin} tableType="positions" deleteController="position" />
                            ))
                        }
                    </tbody>
                </table>
                <div className="text-right pr-5">
                    {
                        isAdmin &&
                        <Button className="px-4"
                            onClick={this.routeChange}>
                            Add
                        </Button>
                    }
                </div>
            </Fragment>
        )
    }
}

function mapStateToProps(state) {
    return {
        positions: state.positions
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getAllPositions: () => dispatch(getAllPositionsAction()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PositionManagement);