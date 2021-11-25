import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <div className="main">
      <Navbar expand="lg">
        <Container fluid>
          <NavLink to="/" className="logo">
                <img src="/Images/logo-v2.png" alt="Logo"/>

          </NavLink>
          <Navbar.Toggle
            className="toggle__color"
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <NavLink className="link1" activeClassName="active_class" to="/">
                App
              </NavLink>
              <NavLink className="link1" activeClassName="active_class"  to="/data">
                Data
              </NavLink>
              <NavDropdown
                className="drop"
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
              </NavDropdown>
              <NavLink
                className="link2"
                activeClassName="active_class"
                to="/list-view"
              >
                View Aircraft
              </NavLink>
              <NavLink className="link1" to="/">
                Social
              </NavLink>
              <NavLink className="link1" to="/">
                About
              </NavLink>
            </Nav>

            <Nav className="main__newnav">
              <FaUserCircle className="dropdown-basic__icon" />
              <NavLink className="link1" to="/login">
                Sign In
              </NavLink>
              <NavLink className="link1" to="/registration">
                Sign Up
              </NavLink>
            </Nav>
          </Navbar.Collapse>

          {/* <Dropdown>
  <Dropdown.Toggle id="dropdown-basic">
  <FaUserCircle className="dropdown-basic__icon"/>Sign In
  </Dropdown.Toggle>

  <Dropdown.Menu className="drop-menu">
    <Dropdown.Item href="#/action-1" to="/registration">Sign Out</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

<Dropdown>
  <Dropdown id="dropdown-basic">
  Sign Up
  </Dropdown>
</Dropdown> */}
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
