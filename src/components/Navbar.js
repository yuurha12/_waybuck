import React, { useState } from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import LoginForm from "./Login";
import RegForm from "./Register";


export default function NavBar() {
  
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showStatus, setStatus] = useState(false);
  
    
      return (
      <Navbar className="nav-bg" bg="light" variant="light">
        <Container>
          <Navbar.Brand> <img src={require('../assets/images/Group.png')} alt=""/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav className="form-relog">
            <Button className='btn-login' variant="primary" onClick={() => setShowLogin(!showLogin)}>Login</Button>
              <LoginForm
                  show={showLogin}
                  statusCheck={() => setShowLogin(!showLogin) & setStatus(!showStatus)}
                  onRegis={() => setShowLogin(!showLogin) & setShowRegister(!showRegister)}
                  onHide={() => setShowLogin(!showLogin)}
                />
                 <Button className='btn-reg' variant="primary" onClick={() => setShowRegister(!showRegister)}>Register</Button>
                <RegForm
                  show={showRegister}
                  onLogin={() => setShowRegister(!showRegister) & setShowLogin(!showLogin)}
                  onHide={() => setShowRegister(!showRegister)}
                />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }