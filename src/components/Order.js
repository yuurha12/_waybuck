import React, { useState, useEffect } from "react";
import { Card, Stack } from "react-bootstrap";
import Products from "./Products";
import { Link, useNavigate } from "react-router-dom";
import LoginForm from "./Login";

const Order = () => {

  const navigate = useNavigate()

  
  const [loggedIn, setLoggedIn] = useState(null)
  const logout = function(){
    localStorage.removeItem('LOGIN_STATUS')
    setLoggedIn(false);
    navigate("/")
 
  }

  useEffect(() => {
    reRenderLogin();
  }, []);


  const reRenderLogin = () => {
    setLoggedIn(!!localStorage.getItem("LOGIN_STATUS"));
  };

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
          {loggedIn !== false ?
          (<Link to={`/product-detail/${item.id}`}>
            <Card.Img variant="top" src={item.image} />
            <Card.Body>
              <Card.Title style={{ color: "#BD0707", fontSize: "18px" }}>
                <b> {item.name}</b>
              </Card.Title>
              <Card.Text style={{ fontSize: "14px" }}>
                Rp. {item.price}
              </Card.Text>
            </Card.Body>
          </Link>)
          :
          (<Link to={"/"}>
          <Card.Img variant="top" src={item.image} />
          <Card.Body>
            <Card.Title style={{ color: "#BD0707", fontSize: "18px" }}>
              <b> {item.name}</b>
            </Card.Title>
            <Card.Text style={{ fontSize: "14px" }}>
              Rp. {item.price}
            </Card.Text>
          </Card.Body>
        </Link>)}
        </Card>
      ))}
    </Stack>
  );
};

export default Order;
