import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import user from "../assets/images/User.svg" 

function Profile() {
  const navigate = useNavigate();

  const editProfile = () => {
    navigate("/edit-profile");
  }

  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <h2 className="mb-5">My Profile</h2>
          <Row>
            <Col className="col-5 col-lg-4">
              <img alt="user" src={user} width="180px" />
              <Button className="btn-nav mt-3" style={{ width: '110%' }} onClick={editProfile}>
                Edit Profile
              </Button>
            </Col>
            <Col>
              <div className="mb-5">
                <p>FullName</p>
                <p className="profile-text">Andi</p>
              </div>
              <div className="mb-5">
                <p>Email</p>
                <p className="profile-text">andi@gmail.com</p>
              </div>
              <div>
                <p>Phone</p>
                <p className="profile-text">082303289</p>
              </div>
            </Col>
          </Row>
        </Col>
        <Col className="col-12 col-md-6">
          <h2 className="mb-5">History Transaction</h2>
          <div style={{ maxHeight:'250px'}}>
          <Card className="shadow border border-dark d-flex mb-3">
            <Card.Body>
              <Row>
                <Col>
                  <Card.Title>Geprek bensu</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Saturday, 12 March 2021
                  </Card.Subtitle>
                  <Card.Text className="text-danger fw-bold">Total: Rp. 10.000</Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card className="shadow border border-dark d-flex">
            <Card.Body>
              <Row>
                <Col>
                  <Card.Title>Geprek bensu</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Saturday, 12 March 2021
                  </Card.Subtitle>
                  <Card.Text className="text-danger fw-bold">Total: Rp. 10.000</Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Profile;