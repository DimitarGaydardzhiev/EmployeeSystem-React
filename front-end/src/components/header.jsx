import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'

const Header = () => (
    <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Employee System</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <NavDropdown title="Administration" id="administration">
                    <NavDropdown.Item href="/departments/all">Departments</NavDropdown.Item>
                    <NavDropdown.Item href="/positions/all">Positions</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Employees" id="employees">
                    <NavDropdown.Item href="/employees/all">Current Employees</NavDropdown.Item>
                    <NavDropdown.Item href="/employees/former">Former Employees</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Add Employee</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Requests" id="requests">
                    <NavDropdown.Item href="#action/3.1">My Requests</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">New Requests</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Pending Requests</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Approved Requests</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Projects" id="projects">
                    <NavDropdown.Item href="#action/3.1">All Projects</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">My Projects</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Add Project</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
)

export default Header