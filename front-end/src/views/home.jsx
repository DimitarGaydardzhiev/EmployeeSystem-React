import React, { Component } from 'react'
import HomeCard from '../components/home-card';
import Auth from '../utils/auth';

class Home extends Component {
    render() {
        const { loggedIn } = this.props

        return (
            <div className="row">
                <ul className="center">
                    <li>
                        <HomeCard isLoggedIn={loggedIn} title="Positions" btnTitle="Explore Positions" description="Description" route="positions/all" />
                    </li>
                    <li>
                        <HomeCard isLoggedIn={loggedIn} title="Departments" btnTitle="Explore Departments" description="Description" route="departments/all" />
                    </li>
                    {
                        loggedIn &&
                        <li>
                            <HomeCard isLoggedIn={loggedIn} title="Employees" btnTitle="Explore Employees" description="Description" route="employees/all" />
                        </li>
                    }
                </ul>
            </div>
        )
    }
}

export default Home