import React, { useState, useEffect } from "react";
import { Card, Stack } from "react-bootstrap";
import Products from "./Products";
import { Link, useNavigate } from "react-router-dom";
import LoginForm from "./Login";
import Regform from "./Register";

const Order = () => {
  const [modalRegisterShow, setModalRegisterShow] = useState(false);
  const [modalLoginShow, setModalLoginShow] = useState(false);

  const navigate = useNavigate();

  const [loggedIn, setLoggedIn] = useState(null);

  const reRenderProduct = () => {
    setLoggedIn(!!localStorage.getItem("LOGIN_STATUS"));
  };

  useEffect(() => {
    reRenderProduct();
  }, []);

  <LoginForm reRenderProduct={reRenderProduct} />;

  return (
    <Stack
      direction="horizontal"
      gap={3}
      className=""
      style={{ margin: "50px auto 20px", width: "1072px", height: "392px" }}
    >
      {/* card */}
      {Products.map((item) => (
        <Card
          key={item.id}
          style={{
            width: "18rem",
            borderRadius: "13px",
            background: "#F7DADA",
            border: "none",
          }}
        >
          {loggedIn ? (
            <Link to={`/product-detail/${item.id}`}>
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title style={{ color: "#BD0707", fontSize: "18px" }}>
                  <b> {item.name}</b>
                </Card.Title>
                <Card.Text style={{ fontSize: "14px" }}>
                  Rp. {item.price}
                </Card.Text>
              </Card.Body>
            </Link>
          ) : (
            <div onClick={setModalLoginShow}>
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title style={{ color: "#BD0707", fontSize: "18px" }}>
                  <b> {item.name}</b>
                </Card.Title>
                <Card.Text style={{ fontSize: "14px" }}>
                  Rp. {item.price}
                </Card.Text>
              </Card.Body>
            </div>
          )}
        </Card>
      ))}
      <LoginForm
        show={modalLoginShow}
        Hide={() => setModalLoginShow(false)}
        setModalLoginShow={setModalLoginShow}
        setModalRegisterShow={setModalRegisterShow}
      />
      <Regform
        show={modalRegisterShow}
        Hide={() => setModalRegisterShow(false)}
        setModalLoginShow={setModalLoginShow}
        setModalRegisterShow={setModalRegisterShow}
      />
    </Stack>
  );
};

export default Order;
