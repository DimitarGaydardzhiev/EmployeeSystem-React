import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

const Header = (props) => {
    const { loggedIn, isAdmin, logout } = props

    return (
        < Navbar bg="light" expand="lg" >
            <Navbar.Brand href="/">Employee System</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    {loggedIn && <Nav.Link href="/">Home</Nav.Link>}
                    {
                        loggedIn &&
                        <NavDropdown title="Administration" id="administration">
                            <NavDropdown.Item href="/departments/all">Departments</NavDropdown.Item>
                            <NavDropdown.Item href="/positions/all">Positions</NavDropdown.Item>
                        </NavDropdown>
                    }
                    {
                        loggedIn &&
                        <NavDropdown title="Employees" id="employees">
                            <NavDropdown.Item href="/employees/all">Current Employees</NavDropdown.Item>
                            <NavDropdown.Item href="/employees/former">Former Employees</NavDropdown.Item>
                            <NavDropdown.Item href="/employees/add">Add Employee</NavDropdown.Item>
                        </NavDropdown>
                    }
                    {
                        loggedIn &&
                        <NavDropdown title="Requests" id="requests">
                            <NavDropdown.Item href="/requests/my">My Requests</NavDropdown.Item>
                            <NavDropdown.Item href="/requests/new">New Request</NavDropdown.Item>
                            <NavDropdown.Item href="/requests/pending">Pending Requests</NavDropdown.Item>
                            <NavDropdown.Item href="/requests/approved">Approved Requests</NavDropdown.Item>
                        </NavDropdown>
                    }
                    {
                        loggedIn &&
                        <NavDropdown title="Projects" id="projects">
                            <NavDropdown.Item href="#action/3.1">All Projects</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">My Projects</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Add Project</NavDropdown.Item>
                        </NavDropdown>
                    }
                    {loggedIn && <a href='javascript:void(0)' className="btn btn-info" onClick={logout}>Logout</a>}
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    )
}

export default Header