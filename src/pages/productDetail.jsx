import React from "react";
import { useParams } from "react-router-dom";
import Products from "../components/Products";
import { Container, Row, Col } from "react-bootstrap";

function Detail() {
  let { id } = useParams(); //int
  console.log(Products);
  return (
    <Container className="Prod">
      <Row>
        <Col>
          <img src={Products[id].image} alt="" className="kopi"/>
        </Col>
        <Col>
        <h1>{Products[id].name}</h1>
        <h7>Rp.{Products[id].price}</h7>
        
        </Col>
      </Row>
    </Container>
  );
}

export default Detail;
