import React, { useState } from "react";
import { Container, Nav, Navbar, Button, NavDropdown, Image } from "react-bootstrap";
import LoginForm from "./Login";
import RegForm from "./Register";
import userAvatar from "../assets/images/icon/user.svg"


const NavBar= () => {
  
  const [modalRegisterShow, setModalRegisterShow] = useState(false);
  const [modalLoginShow, setModalLoginShow] = useState(false);
  
  //Login
  const localData = localStorage.getItem("LOGIN_STATUS")
  const data = JSON.parse(localData)
  let dataLogin = [...data];
  
  
  
  //Logout
  const Logout = () => {
    dataLogin.pop();
    const parsed = JSON.stringify(dataLogin);
    localStorage.setItem("LOGIN_STATUS", parsed);
    window.location.reload()
  };



    const userAva = (
<Image
    src={userAvatar}
    alt=""
    roundedCircle
  />
    )
  
    
      return (
        <>
      <Navbar className="nav-bg" bg="light" variant="light">
        <Container>
          <Navbar.Brand> <img src={require("../assets/images/icon/Group.png")} alt=""/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
              {dataLogin.length === 0 ?(
            <Nav className="form-relog">
                <>
                <Button className='btn-login' variant="primary" onClick={() => setModalLoginShow(true)}>Login</Button>
                <LoginForm
                show={modalLoginShow} Hide={()=> setModalLoginShow(false)} setModalLoginShow={setModalLoginShow} setModalRegisterShow={setModalRegisterShow}
                />
                <Button className='btn-reg' variant="primary" onClick={() => setModalRegisterShow(true)}>Register</Button>
                <RegForm
                show={modalRegisterShow} Hide={() => setModalRegisterShow(false)} setModalLoginShow={setModalLoginShow} setModalRegisterShow={setModalRegisterShow}
                />
                  </>
                </Nav>
              ) : (
                <NavDropdown title={userAva} id="basic-nav-dropdown" >
                <NavDropdown.Item href="#action/3.1" onClick={Logout}>Logout</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
                  )}
                </Navbar.Collapse>
                </Container>
                </Navbar>
                </>
                );
              }

              export default NavBar