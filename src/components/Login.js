import { Button, Form, Modal } from 'react-bootstrap';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

//register route
import RegForm from './Register';

export default function LoginForm() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //create state with attribute fullname, email & password here..

  const handleOnChange = (e) => {
    // setState here
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    //print state value with console.log here
  }

  return (
    <>
      <Button className='btn-login' variant="primary" onClick={handleShow}>
        Login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
        <Router>
<div className='form-group'>
    <Form>
        <h1>LOGIN</h1>
      <Form.Group controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Email" />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="danger">Login</Button>{' '}
      <ul>
        <li>
          <Link to="/register">Don't have an account ? Klik Here</Link>
        </li>
      </ul>
    </Form>
</div>

<Routes>
  <Route exact path='/register' element={<RegForm />} />
</Routes>
</Router>
        </Modal.Body>
      </Modal>
    </>
  );
  }  