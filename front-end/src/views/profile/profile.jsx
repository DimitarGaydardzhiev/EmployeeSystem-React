import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getProfileInfoAction } from '../../store/actions/profile-actions';

class ProfileComponent extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.getProfileInfo()
    }

    render() {
        const { profileInfo } = this.props.profileInfo
        console.log(profileInfo)

        return (
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <div class="card-body">
                        <h5 class="card-title">Position: </h5>
                        <p class="card-text text-danger">{profileInfo.position ? profileInfo.position : "Not defined"}</p>
                    </div>
                    <hr />
                    <div class="card-body">
                        <h5 class="card-title">Department: </h5>
                        <p class="card-text text-danger">{profileInfo.department ? profileInfo.department : "Not defined"}</p>
                    </div>
                    <hr />
                    <div class="card-body">
                        <h5 class="card-title">Role: </h5>
                        <p class="card-text text-danger">{profileInfo.role}</p>
                    </div>
                    <hr />
                    <div class="card-body">
                        <h5 class="card-title">Email: </h5>
                        <p class="card-text text-danger">{profileInfo.email}</p>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Projects: </h5>
                        {
                            profileInfo.projects && profileInfo.projects
                                .map(p => <p class="card-text text-danger">{p.name}</p>)
                        }

                    </div>
                </div>
                <div className="col-md-4"></div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        profileInfo: state.profileInfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getProfileInfo: () => dispatch(getProfileInfoAction())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProfileComponent))