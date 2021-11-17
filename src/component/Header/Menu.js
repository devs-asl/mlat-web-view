import React from 'react';
import { Navbar, Container, Nav, NavDropdown, Dropdown} from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Menu = () => {
    return (
        <div className="main">
    <Navbar expand="lg">
  <Container fluid>
    <Navbar.Brand href="#home" className="logo"><img src="/Images/logo-v2.png"/></Navbar.Brand>
    <Navbar.Toggle className="toggle__color" aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav>
        <NavLink className="link1" activeClassName="active_class" to="/">App</NavLink>
        <NavLink className="link1" to="/">Data</NavLink>
        <NavDropdown className="drop" activeClassName="active_class" title="Recovery" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          
        </NavDropdown>
        <NavLink className="link2" activeClassName="active_class" to="/viewaircraft">View Aircraft</NavLink>
        <NavLink className="link1" to="/">Social</NavLink>
        <NavLink className="link1" to="/">About</NavLink> 
      </Nav>
    </Navbar.Collapse>
    <Dropdown>
  <Dropdown.Toggle id="dropdown-basic">
  <FaUserCircle className="dropdown-basic__icon"/>Log In
  </Dropdown.Toggle>

  <Dropdown.Menu className="drop-menu">
    <Dropdown.Item href="#/action-1">Log Out</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
  </Container>
</Navbar>
        </div>
    )
}

export default Menu
