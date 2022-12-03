import React, { useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import Stack from "react-bootstrap/Stack";
import Vector from "../assets/images/icon/Vector.png";
import { Popup } from "../components/Popup"
import NavBar from "../components/navbar/Navbar";
import { API } from "../config/api";
import { useQuery, useMutation } from "react-query";

function CartDigan() {
  const [modalPopShow, setModalPopShow] = useState(false);
  

  const [detailUserData, setState] = useState({
    name: "",
    email: "",
    phone: "",
    posCode: "",
    address: "",
  })

  const handleOnChange = (e) => {
    setState({
      ...detailUserData,
      [e.target.name]: e.target.value,
    });
  };

 let { data: cart, refetch } = useQuery("cartsCache", async () => {
    const response = await API.get("/carts-id");
    return response.data.data;
  });

  let resultTotal = cart?.reduce((a, b) => {
    return a + b.subtotal;
  }, 0);

  let handleDelete = async (id) => {
    await API.delete(`/cart/` + id);
    refetch();
  };
  
  const form = {
    status: "pending",
    total: resultTotal,
  };

  const handleSubmit = useMutation(async (e) => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
  })


    
  return (
    <div>
      <NavBar />
    <Container>
      <h1
        style={{
          color: "#BD0707",
          marginLeft: "3px",
          marginTop: "20px",
          fontSize: "20px",
        }}
        >
        My Cart
      </h1>
      <p
        style={{
          color: "#BD0707",
          marginLeft: "3px",
          marginTop: "20px",
          fontSize: "20px",
        }}
        >
        Review Your Order
      </p>
      <hr style={{ width: "760px" }}></hr>
        <div>
        {cart?.map((item, index)=>(
        <Stack direction="horizontal" gap={3} key={index} style={{marginTop:"10px"}}>
          <img src={item?.product?.image} alt="" style={{width:"5rem"}}/>
            <div>
              <Card.Title style={{ color: "#BD0707", fontSize: "25px" }}>
                {item.product.title}
              </Card.Title>

              <p
                style={{ fontSize: "15px", color: "#BD0707", marginTop: "10px" }}
                >
                <strong style={{ color: "#974A4A" }}>Topping</strong> : {" "}
                <span>
                    {" "}
                    {item.topping?.map((topping, idx) => (
                      <span className="d-inline" key={idx}>
                        {topping.title},
                      </span>
                    ))}
                </span>
              </p>
            </div>
            <div
              style={{
                right: "50rem",
                position: "absolute",
                
              }}
              >
                <p>Rp. {item?.subtotal}</p>
                <img
                  src={Vector} alt=''
                  onClick={() => handleDelete(item.id)}
                  style={{
                    position: "absolute",
                    right: "3px",
                  }}
                  ></img>
              </div>
          </Stack>
          ))}
          </div>
      <hr style={{ width: "760px" }}></hr>

      <hr style={{ width: "330px", marginTop: "50px" }}></hr>

      <Stack direction="horizontal" gap={3}>
        <p style={{ color: "#BD0707" }}>Subtotal</p>
        <p
          style={{
            position: "absolute",
            right: "67rem",
            color: "#BD0707",
          }}
          >
         Rp.{resultTotal}
        </p>
      </Stack>

      <Stack direction="horizontal" gap={3}>
        <p style={{ color: "#BD0707" }}>Qty</p>
        <p
          style={{
            position: "absolute",
            right: "66rem",
            color: "#BD0707",
          }}
          >
          {cart?.length}
        </p>
      </Stack>

      <hr style={{ width: "330px", marginTop: "20px" }}></hr>

      <Stack direction="horizontal" gap={3}>
        <p style={{ color: "#BD0707", fontWeight: "bold" }}>Total</p>
        <p
          style={{
            position: "absolute",
            right: "67rem",
            color: "#BD0707",
            fontWeight: "bold",
          }}
          >
          Rp. {resultTotal}
        </p>
      </Stack>

      

      <Form 
        style={{
          width: "350px",
          position: "absolute",
          right: "10rem",
          top: "12rem",
        }}
        >
        <Form.Group
          className="mb-3"
          style={{ height: "50px" }}
          controlId="formBasicName"
          >
          <Form.Label></Form.Label>
          <Form.Control
          onChange={handleOnChange}
          value={detailUserData.name}
          name="name"
          style={{
              background: "#E5E5E5",
              border: "2px solid #BD0707",
            }}
            type="name"
            placeholder="Name"
            />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label></Form.Label>
          <Form.Control
          value={detailUserData.email}
          name="email"
          style={{
            background: "#E5E5E5",
            border: "2px solid #BD0707",
          }}
          type="email"
          placeholder="Email"
          />
        </Form.Group>
        <Form.Group
          className="mb-3"
          style={{ height: "50px" }}
          controlId="formBasicPhone"
          >
          <Form.Label></Form.Label>
          <Form.Control
            onChange={handleOnChange}
            value={detailUserData.phone}
            name="phone"
            style={{
              background: "#E5E5E5",
              border: "2px solid #BD0707",
            }}
            type="number"
            placeholder="Phone"
            />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group
          className="mb-3"
          style={{ height: "50px" }}
          controlId="formBasicPos  Code"
          >
          <Form.Label></Form.Label>
          <Form.Control
            onChange={handleOnChange}
            value={detailUserData.posCode}
            name="posCode"
            style={{
              background: "#E5E5E5",
              border: "2px solid #BD0707",
            }}
            type="number"
            placeholder="Pos  Code"
            />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group style={{ height: "5rem" }} controlId="address">
          <Form.Label></Form.Label>
          <Form.Control
            onChange={handleOnChange}
            value={detailUserData.address}
            name="address"
            style={{
              paddingBottom: "5rem",
              background: "#E5E5E5",
              border: "2px solid #BD0707",
            }}
            type="address"
            placeholder="Address"
            />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <div className="d-grid gap-2">
          <Button
            onClick={() => setModalPopShow(true)}
            type="submit"
            className="text-white"
            variant="primary"
            size="lg"
            style={{ backgroundColor: "#BD0707", marginTop: "80px", border: "none" }}
            >
            Pay
          </Button>
          <Popup show={modalPopShow} Hide={() => setModalPopShow(false)} />
        </div>
      </Form>
    </Container>
            </div>
  )
}

export default CartDigan;
