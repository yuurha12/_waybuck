import { Alert, Button, Form, Modal } from 'react-bootstrap';
import React, { useState } from 'react';

//register route

export default function LoginForm(props) {

  const [emaillog, setEmaillog] = useState(" ");
  const [passwordlog, setPasswordlog] = useState(" ");
  const [status, setStatus] = useState(false);
  const [home, setHome] = useState(true);
  const [login, setLogin] = useState(true);


  

  function handleLogin(e) {
    e.preventDefault();
    let password = localStorage
      .getItem("password")
      .replace(/"/g, "");
    let email = localStorage.getItem("email").replace(/"/g, "");
    

    if (!emaillog || !passwordlog) {
      setStatus(true);
      console.log("EMPTY");
    } else if (passwordlog !== password || emaillog !== email) {
      setStatus(true);
    } else {
      setHome(!home);
      setStatus(false);
    }
    setLogin(!login);
  }
  function handleClick() {
    setLogin(!login);
  }

  return (
    <>
    {home ? (
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
      <Button onClick={handleClick} variant="danger" type='submit'>Login</Button>{' '}
      <Button className='login' onClick={props.onRegis}>
      Don't have an account ? Klik Here</Button>
    </Form>
</div>
        </Modal.Body>
      </Modal>
      ) : (
     <Alert>LOGIN SUCCESS</Alert>
      )}
    </>
  );
  }  