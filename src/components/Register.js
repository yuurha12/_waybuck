import { Button, Form, Modal } from 'react-bootstrap';
import React, { useState } from 'react';

//register route

export default function RegForm(props) {
  

  //create state with attribute fullname, email & password here..
  const [state, setState] = useState({
    email: "",
    password: "",
    fullname: "",
  });

  

  const handleOnChange = (e) => {
    // setState here
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
      localStorage.setItem("email", JSON.stringify(state.email));
      localStorage.setItem("password", JSON.stringify(state.password));
      localStorage.setItem("fullname", JSON.stringify(state.fullname));
      console.log("Saved in Local Storage");
      alert("You have been registered ")
  }


  return (
    <>
      <Modal {...props}>
        <Modal.Body>
<div className='form-group'>
    <Form onSubmit={handleOnSubmit}>
        <h1>REGISTER</h1>
      <Form.Group controlId="formBasicEmail">
        <Form.Control 
        onChange={handleOnChange} 
        value={state.email}
        name="email" 
        type="email" 
        placeholder="Email" 
        />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Control 
        onChange={handleOnChange} 
        value={state.password}
        name="password"
        type="password" 
        placeholder="Password" 
        />
        </Form.Group>
        <Form.Group controlId="formBasicName">
        <Form.Control
        onChange={handleOnChange} 
        value={state.fullname} 
        name="fullname"
        type="text" 
        placeholder="Full Name" 
        />
      </Form.Group>
      <div>

      <Button variant="danger" onClick={props.onLogin} type='submit'>Register</Button>
      <Button className='reg' onClick={props.onLogin}>Already have an account ? Klik Here</Button>
      </div>
    </Form>
</div>
        </Modal.Body>
      </Modal>
    </>
  );
  }