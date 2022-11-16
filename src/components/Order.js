import React from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";

export default function Order() {
    return (
        <Container>
            <Row className="Ice" md={4}>
                <Col>
           <Card style={{ width: '15rem', height:'24.5rem' }}>
      <Card.Img variant="top" src={require('../assets/images/Palm-sugar.png')} />
      <Card.Body>
        <Card.Title>Ice Coffe Palm Sugar</Card.Title>
        <Card.Text>
          Rp.27.000
        </Card.Text>
      </Card.Body>
    </Card>
                </Col>
            <Col>
            <Card style={{ width: '15rem', height:'24.5rem' }}>
      <Card.Img variant="top" src={require('../assets/images/Green-tea.png')} />
      <Card.Body>
        <Card.Title>Ice Coffe Green Tea</Card.Title>
        <Card.Text>
          Rp.31.000
        </Card.Text>
      </Card.Body>
    </Card>
            </Col>
            <Col>
            <Card style={{ width: '15rem', height:'24.5rem' }}>
      <Card.Img variant="top" src={require('../assets/images/Hanami.png')} />
      <Card.Body>
        <Card.Title>Hanami Latte</Card.Title>
        <Card.Text>
          Rp.29.000
        </Card.Text>
      </Card.Body>
    </Card>
            </Col>
            <Col>
            <Card style={{ width: '15rem', height:'24.5rem' }}>
      <Card.Img variant="top" src={require('../assets/images/Clepon.png')} />
      <Card.Body>
        <Card.Title>Clepon Coffe</Card.Title>
        <Card.Text>
          Rp.28.000
        </Card.Text>
      </Card.Body>
    </Card>
            </Col>
            </Row>
        </Container>
    )
}