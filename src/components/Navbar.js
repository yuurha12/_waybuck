import React, { useContext, useState } from "react";
import {
  Container,
  Nav,
  Navbar,
  Button,
} from "react-bootstrap";
import LoginForm from "./auth/Login";
import RegForm from "./auth/Register";
import { Link } from "react-router-dom";
// import { API } from "../config/api";

//icon

import { AppContexts } from "./contexts/AppContexts";
//page
import ModalAuth from "./modal/auth";

const NavBar = ({show, setShow}) => {

  const contexts = useContext(AppContexts)

  const [modalRegisterShow, setModalRegisterShow] = useState(false);
  const [modalLoginShow, setModalLoginShow] = useState(false);

  const [state] = useContext(AppContexts);
  const isLogin = state.isLogin;


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
            {isLogin !== true? (
              <Nav className="form-relog">
                <>
                  <Button
                    className="btn-login"
                    variant="primary"
                    onClick={() => setModalLoginShow(true)}>Login</Button>
                  <LoginForm
                 show={modalLoginShow}
                 hide={() => setModalLoginShow(false)}
                 setModalLoginShow={contexts.showContextsetModalLoginShow}
                 setModalRegisterShow={setModalRegisterShow}
                   />
                  <Button
                    className="btn-reg"
                    variant="primary"
                    onClick={() => setModalRegisterShow(true)}>Register</Button>
                  <RegForm
                    show={modalRegisterShow}
                    hide={() => setModalRegisterShow(false)}
                    setModalLoginShow={setModalLoginShow}
                    setModalRegisterShow={setModalRegisterShow}
                  />
                </>
              </Nav>
            ) : (
              <div className="navbarLeft">
          <ModalAuth show={show} setShow={setShow} />
        </div>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
