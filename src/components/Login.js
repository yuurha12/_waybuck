import { Button, Form, Modal } from 'react-bootstrap';
import React, { useState } from 'react';

//register route

export default function LoginForm(props) {

  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");
  const [flag, setFlag] = useState(false);
  const [home, setHome] = useState(true);
  const [login, setLogin] = useState(true);


  

  function handleLogin(e) {
    e.preventDefault();
    let pass = localStorage
      .getItem("password")
      .replace(/"/g, "");
    let mail = localStorage.getItem("email").replace(/"/g, "");
    

    if (!emaillog || !passwordlog) {
      setFlag(true);
      console.log("EMPTY");
    } else if (passwordlog !== pass || emaillog !== mail) {
      setFlag(true);
    } else {
      setHome(!home);
      setFlag(false);
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
    <Form onSubmit={handleLogin}>
        <h1>LOGIN</h1>
      <Form.Group controlId="formBasicEmail">
        <Form.Control 
         onChange={(event) => setEmaillog(event.target.value)}
        name="email" 
        type="email" 
        placeholder="Email" 
        />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Control
         onChange={(event) => setPasswordlog(event.target.value)}
         name="password"
         type="password" 
         placeholder="Password" 
        />
      </Form.Group>
      <Button variant="danger" type='submit'>Login</Button>{' '}
      <Button className='login' onClick={props.onRegis}>
      Don't have an account ? Klik Here</Button>
    </Form>
</div>
        </Modal.Body>
      </Modal>
    </>
  );
  }  