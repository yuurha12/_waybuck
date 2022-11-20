import React from "react";
import { useParams } from "react-router-dom";
import Products from "../components/Products";
import Topping from "../components/Topping";
import { Container, Row, Col, Button } from "react-bootstrap";

function Detail() {
  let { id } = useParams(); //int
  console.log(Products);
  return (
    <Container className="Prod">
      <Row>
        <Col>
          <img src={Products[id].image} alt="" className="kopi" />
        </Col>
        <Col>
          <h1 className="nameProd">{Products[id].name}</h1>
          <h6 className="hargaProd">Rp.{Products[id].price}</h6>
          <h4 className="topp">Topping</h4>
          <div className="topping">
            {Topping.map((item) => (
              <Col key={item.id} md={3}>
                <img src={item.image} alt="" />
                <p>{item.name}</p>
              </Col>
            ))}
          <div className="totalrego">
            <h4 className="total">Total</h4>
            <h4 className="rego">Rp.{Products[id].price}</h4>
          </div>
        <Button className="bayar" variant="primary">
          Add Cart
        </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Detail;
