import React, { Fragment } from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = (props) => {
    const { loggedIn, isAdmin, logout, username } = props

    return (
        < Navbar bg="light" expand="lg" >
            <Navbar.Brand href="/">Employee System</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <NavDropdown title="Administration" id="administration">
                        <NavDropdown.Item href="/departments/all">Departments</NavDropdown.Item>
                        <NavDropdown.Item href="/positions/all">Positions</NavDropdown.Item>
                    </NavDropdown>
                    {
                        loggedIn &&
                        <NavDropdown title="Employees" id="employees">
                            <NavDropdown.Item href="/employees/all">Current Employees</NavDropdown.Item>
                            <NavDropdown.Item href="/employees/former">Former Employees</NavDropdown.Item>
                            {
                                isAdmin &&
                                <NavDropdown.Item href="/employees/add">Add Employee</NavDropdown.Item>
                            }
                        </NavDropdown>
                    }
                    {
                        loggedIn &&
                        <NavDropdown title="Requests" id="requests">
                            <NavDropdown.Item href="/requests/my">My Requests</NavDropdown.Item>
                            {
                                isAdmin &&
                                <Fragment>
                                    <NavDropdown.Item href="/requests/new">New Request</NavDropdown.Item>
                                    <NavDropdown.Item href="/requests/pending">Pending Requests</NavDropdown.Item>
                                    <NavDropdown.Item href="/requests/approved">Approved Requests</NavDropdown.Item>
                                </Fragment>
                            }
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
                    {loggedIn && <Nav.Link href="/" className="">Hello, {username}</Nav.Link>}
                    {loggedIn && <a href='javascript:void(0)' className="btn btn-info" onClick={logout}>Logout</a>}
                    {!loggedIn && <Link className="btn btn-info" to="/login">Login</Link>}
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    )
}

export default Header