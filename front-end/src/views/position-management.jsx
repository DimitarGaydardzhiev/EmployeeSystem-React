import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { getAllPositionsAction } from '../store/actions/position-actions';
import AdministrationDataRow from '../components/administration-data-row';
import { Button } from 'react-bootstrap';

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
                <div class="text-right">
                    <Button className="px-4"
                        onClick={this.routeChange}>
                        Add
                    </Button>
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