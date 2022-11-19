import React from "react";
import { Card, Stack } from "react-bootstrap";
import Products from "./Products";
import { Link } from "react-router-dom";


const Order = () => {

    return (
    <Stack direction="horizontal" gap={3} className='' style={{margin: "50px auto 20px", width: "1072px", height: "392px"}} >

        {/* card */}
        {Products.map((item) => (
        <Card key={item.id} style={{ width: '18rem', borderRadius: '13px', background: "#F7DADA", border: "none" }}>
          <Link to={`/product-detail/${item.id}`}>
         <Card.Img  variant="top" src={item.image}/>
          <Card.Body>
            <Card.Title style={{ color: "#BD0707", fontSize: "18px"}}><b> {item.name}</b></Card.Title>
            <Card.Text style={{ fontSize: "14px" }}>
                Rp. {item.price}
            </Card.Text>
          </Card.Body>
          </Link>
        </Card>
        ))}
    
    </Stack>
    )
}

export default Order