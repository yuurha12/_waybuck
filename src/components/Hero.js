import React from "react";
import { Card } from "react-bootstrap";


export default function Waysbucks() {
    return (
    <>
    <Card className="hero">
    <Card.Img src={require('../assets/images/jumbo1.png')} alt="Card image" />
    <Card.ImgOverlay>
    <Card.Img className="jumbo2" src={require('../assets/images/jumbo2.png')} alt="Card image" />
    </Card.ImgOverlay>
    <Card.ImgOverlay className="text-hero">
      <Card.Title className="t1">WAYSBUCKS</Card.Title>
      <Card.Text className="t2">Things are changing, but we're still here for you</Card.Text>
      <Card.Text className="t3">We have temporarily closed our in-store cafes, but select
      grocery and drive-thru locations remaining open.
      Waysbucks Drivers is also available</Card.Text>
      <Card.Text className="t4">Let's Order...</Card.Text>
    </Card.ImgOverlay>
    </Card>
    </>

    )
}