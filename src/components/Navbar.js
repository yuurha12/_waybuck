import React, { useState, useEffect } from "react";
import {
  Container,
  Nav,
  Navbar,
  Button,
  NavDropdown,
  Image,
} from "react-bootstrap";
import LoginForm from "./Login";
import RegForm from "./Register";
import { useNavigate, Link } from "react-router-dom";

//icon
import Cart from "../assets/images/icon/shopping-basket.svg";
import userAvatar from "../assets/images/icon/usericon.png";
import Ava from "../assets/images/icon/user.svg";
import Order from "./Order";
//page

const NavBar = () => {
  const [modalRegisterShow, setModalRegisterShow] = useState(false);
  const [modalLoginShow, setModalLoginShow] = useState(false);

  //Login
  // const localData = localStorage.getItem("LOGIN_STATUS");
  // const data = JSON.parse(localData);
  // let dataLogin = [...data];

  
  const navigate = useNavigate();
  
  const profile = () => {
    navigate("/profile");
  };
  
  const userAva = <Image src={userAvatar} alt="" roundedCircle />;
  
  const [loggedIn, setLoggedIn] = useState(null);
  
  const reRenderLogin = () => {
    setLoggedIn(!!localStorage.getItem("LOGIN_STATUS"));
  };
  useEffect(() => {
    reRenderLogin();
  }, []);
  
  const logout = function () {
    localStorage.removeItem("LOGIN_STATUS");
    setLoggedIn(false);
    navigate("/");
  };

  return (
    <>
      <Navbar className="nav-bg" bg="light" variant="light">
        <Container>
          <Link to={"/"}>
            <Navbar.Brand className="brand">
              {" "}
              <img src={require("../assets/images/icon/Group.png")} alt="" />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            {loggedIn !== true ? (
              <Nav className="form-relog">
                <>
                  <Button
                    className="btn-login"
                    variant="primary"
                    onClick={() => setModalLoginShow(true)}
                  >
                    Login
                  </Button>
                  <LoginForm
                    reRenderLogin={reRenderLogin}
                    show={modalLoginShow}
                    Hide={() => setModalLoginShow(false)}
                    setModalLoginShow={setModalLoginShow}
                    setModalRegisterShow={setModalRegisterShow}
                  />
                  <Button
                    className="btn-reg"
                    variant="primary"
                    onClick={() => setModalRegisterShow(true)}
                  >
                    Register
                  </Button>
                  <RegForm
                    show={modalRegisterShow}
                    Hide={() => setModalRegisterShow(false)}
                    setModalLoginShow={setModalLoginShow}
                    setModalRegisterShow={setModalRegisterShow}
                  />
                </>
              </Nav>
            ) : (
              <>
                <Nav className="Ava">
                  <Link to={"/payment"}>
                    <img src={Cart} alt="" />
                  </Link>
                </Nav>
                <NavDropdown title={userAva} id="basic-nav-dropdown">
                  <NavDropdown.Item onClick={profile}>
                    <img src={Ava} alt="" />
                    Profile
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={logout}>
                    <img src={Ava} alt="" />
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
