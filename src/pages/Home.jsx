import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Waysbucks from "../components/Hero";
import Order from "../components/Order";
import { Container, Row, Col } from "react-bootstrap";

export default function Home() {
  return (
    <Container>
      <Waysbucks />
      <Row>
        <h1 className="Order">Let's Order</h1>
        <Col>
          <Order />
        </Col>
      </Row>
    </Container>
  );
}
