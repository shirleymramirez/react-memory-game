import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import "./Nav.css";

const MyNav = () =>
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#home">Memory Game</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1} href="#" className="instructionNavItem">
        Click an Image to Begin
      </NavItem>
      <Nav pullRight>
        <NavItem eventKey={2} href="#">
          Score:
        </NavItem>
        <NavItem eventKey={3} href="#">
          Top Score:
        </NavItem>
      </Nav>
    </Nav>
  </Navbar>;
export default MyNav;