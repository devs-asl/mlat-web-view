import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <div className="main">
      <Navbar expand="lg">
        <Container fluid>
          <NavLink to="/" className="logo">
            <img src="/Images/logo-v2.png" alt="Logo" />
          </NavLink>
          <Navbar.Toggle
            className="toggle__color"
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navbarnav">
              <NavLink className="link1" activeClassName="active_class" to="/">
                App
              </NavLink>
              {/* <NavLink className="link3" to="/">
                Data
              </NavLink> */}
              {/* <NavDropdown
                className="drop"
                activeClassName="active_class"
                title="Recovery"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
              </NavDropdown> */}
              <NavLink
                className="link1"
                activeClassName="active_class"
                to="/list-view"
              >
                View Aircraft
              </NavLink>
              {/* <NavLink className="link4" to="/">
                Social
              </NavLink> */}
              <NavLink className="link1" to="/">
                About
              </NavLink>
            </Nav>

            <Nav className="main__newnav">
              <FaUserCircle className="dropdown-basic__icon" />
              <NavLink className="link2" to="/login">
                Sign In
              </NavLink>
              <NavLink className="link2" to="/registration">
                Sign Up
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
