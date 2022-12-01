import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Waysbucks from "../components/Hero";
import Order from "../components/Order";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <NavBar />
    <Container>
      <Waysbucks />
      <Row>
        <h1 className="Order">Let's Order</h1>
        <Col>
          <Order />
        </Col>
      </Row>
    </Container>
    </div>
  );
}
