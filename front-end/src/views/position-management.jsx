import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import getAllPositionsAction from '../store/actions/position-actions';
import AdministrationDataRow from '../components/administration-data-row';

class PositionManagement extends Component {
    componentWillMount() {
        this.props.getAllPositions()
    }

    render() {
        const { positions } = this.props.positions

        return (
            <Fragment>
                <h3 className="d-mgmt text-center">Positions Management</h3>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Employees Count</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            positions.map(p => (
                                <AdministrationDataRow key={p.id} data={p} />
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
        positions: state.positions
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getAllPositions: () => dispatch(getAllPositionsAction()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PositionManagement);