import React, { Component } from 'react'
import HomeCard from '../components/home-card';
import departmentsLogo from './../images/departments.jpg'
import employeesLogo from './../images/employees.png'
import positionsLogo from './../images/position.jpg'

class Home extends Component {
    render() {
        const { loggedIn } = this.props

        return (
            <div className="row">
                <ul className="center">
                    <li>
                        <HomeCard isLoggedIn={loggedIn} title="Positions" btnTitle="Explore Positions" description="Description" route="positions/all" img={positionsLogo} />
                    </li>
                    <li>
                        <HomeCard isLoggedIn={loggedIn} title="Departments" btnTitle="Explore Departments" description="Description" route="departments/all" img={departmentsLogo} />
                    </li>
                    {
                        loggedIn &&
                        <li>
                            <HomeCard isLoggedIn={loggedIn} title="Employees" btnTitle="Explore Employees" description="Description" route="employees/all" img={employeesLogo} />
                        </li>
                    }
                </ul>
            </div>
        )
    }
}

export default Home