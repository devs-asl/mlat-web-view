import React from 'react';
import { Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <div className="main">
    <Navbar expand="lg">
  <Container>
    <Navbar.Brand href="#home" className="logo"><img src="/Images/logo-v2.png"/></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav>
        <NavLink className="link1" activeClassName="active_class" to="/">App</NavLink>
        <NavLink className="link1" to="/">Data</NavLink>
        <NavDropdown title="Recovery" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          
        </NavDropdown>
        <NavLink className="link1" activeClassName="active_class" to="/viewaircraft">View Aircraft</NavLink>
        <NavLink className="link1" to="/">Social</NavLink>
        <NavLink className="link1" to="/">About</NavLink> 
      </Nav>
    </Navbar.Collapse>
  </Container>0
</Navbar>
        </div>
    )
}

export default Menu
