import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { getAllPositionsAction } from '../../store/actions/position-actions';
import { Button } from 'react-bootstrap';
import AdministrationDataRow from '../../components/administration-data-row';
import Auth from '../../utils/auth';
import { getAllProjectsAction } from '../../store/actions/projects-actions';
import ProjectDataRow from '../../components/project-data-row';

class ProjectManagement extends Component {
    constructor(props) {
        super(props)

        this.routeChange = this.routeChange.bind(this);
    }

    routeChange() {
        let path = `/projects/add`;
        this.props.history.push(path);
    }

    componentWillMount() {
        this.props.getAllProjects()
    }

    render() {
        const { projects } = this.props.projects
        const isAdmin = Auth.isUserAdmin()

        return (
            <Fragment>
                <h3 className="d-mgmt text-center">Projects Management</h3>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                            <th>Status</th>
                            <th>Employees</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            projects.map(p => (
                                <ProjectDataRow key={p.id} data={p} isAdmin={isAdmin} tableType="projects" deleteController="project" />
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
        projects: state.projects
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getAllProjects: () => dispatch(getAllProjectsAction()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectManagement);