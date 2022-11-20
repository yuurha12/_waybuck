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
//page

const NavBar = () => {
  const [modalRegisterShow, setModalRegisterShow] = useState(false);
  const [modalLoginShow, setModalLoginShow] = useState(false);

  //Login
  // const localData = localStorage.getItem("LOGIN_STATUS");
  // const data = JSON.parse(localData);
  // let dataLogin = [...data];

  useEffect(() => {
    reRenderLogin();
  }, []);

  const navigate = useNavigate();

  //Logout
  // const logout = () => {
  //   dataLogin.pop();
  //   const parsed = JSON.stringify(dataLogin);
  //   localStorage.setItem("LOGIN_STATUS", parsed);
  //   navigate("/");
  // };

  const profile = () => {
    navigate("/profile");
  };

  const userAva = <Image src={userAvatar} alt="" roundedCircle />;

  const [loggedIn, setLoggedIn] = useState(null);
  const logout = function () {
    localStorage.removeItem("LOGIN_STATUS");
    setLoggedIn(false);
    navigate("/");
  };

  const reRenderLogin = () => {
    setLoggedIn(!!localStorage.getItem("LOGIN_STATUS"));
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
                  <img src={Cart} alt="" />
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
