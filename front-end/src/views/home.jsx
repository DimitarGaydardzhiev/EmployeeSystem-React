import React, { Component } from 'react'
import HomeCard from '../components/home-card';

class Home extends Component {
    render() {
        return (
            <div className="row">
                <ul className="center">
                    <li>
                        <HomeCard title="Positions" btnTitle="Explore Positions" description="Description" route="positions/all"/>
                    </li>
                    <li>
                        <HomeCard title="Departments" btnTitle="Explore Departments" description="Description" route="departments/all"/>
                    </li>
                    <li>
                        <HomeCard title="Employees" btnTitle="Explore Employees" description="Description" route="employees/all"/>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Home