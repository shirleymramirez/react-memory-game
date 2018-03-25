import React from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import "./Nav.css";

const MyNav = () => (
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
      <NavItem eventKey={2} href="#" className="runningScoreNavItem">
        Score:
      </NavItem>
      <NavItem eventKey={3} href="#" className="topScoreNavItem">
        Top Score:
      </NavItem>
    </Nav>
  </Navbar>
  );
export default MyNav;