import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import ProjectDataRow from '../../components/project-data-row';
import { getMyProjectsAction } from '../../store/actions/projects-actions';

class MyProjects extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.getMyProjects()
    }

    render() {
        const { myProjects } = this.props.myProjects

        return (
            <Fragment>
                <h3 className="d-mgmt text-center">My Projects</h3>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Status</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myProjects.map(p => (
                                <tr key={p.id}>
                                    <td>{p.name}</td>
                                    <td>{p.startDate}</td>
                                    <td>{p.endDate}</td>
                                    <td>{p.status}</td>
                                </tr>
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
        myProjects: state.myProjects
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getMyProjects: () => dispatch(getMyProjectsAction()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyProjects);