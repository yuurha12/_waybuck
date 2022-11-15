import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import LoginForm from "./Login";
import RegForm from "./Register";

export default function NavBar() {
    return (
      <Navbar bg="white" variant="white">
        <Container>
          <Navbar.Brand> <img src={require('../assets/images/Group.png')} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav className="form-relog">
              <LoginForm />
                <RegForm />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }