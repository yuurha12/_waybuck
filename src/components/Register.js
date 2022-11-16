import { Button, Form, Modal } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';

//register route

export default function RegForm(props) {
  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);

  //create state with attribute fullname, email & password here..
  const [state, setState] = useState({
    email: "",
    password: "",
    fullname: "",
  });

  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(state));
  }, [state]);

  console.log(localStorage)

  

  const handleOnChange = (e) => {
    // setState here
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!state.email || !state.password ||!state.fullname ) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("email", JSON.stringify(state.email));
      localStorage.setItem("password", JSON.stringify(state.password));
      localStorage.setItem("fullname", JSON.stringify(state.fullname));
      console.log("Saved in Local Storage");

    }
      setLogin(!login);
  }
    function handleClick() {
      setLogin(!login);
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

      <Button variant="danger" type='submit'>Register</Button>
      <Button className='reg' onClick={props.onLogin}>Already have an account ? Klik Here</Button>
      </div>
    </Form>
</div>
        </Modal.Body>
      </Modal>
    </>
  );
  }