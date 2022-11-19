import { Button, Form, Modal } from 'react-bootstrap';
import React, { useState } from 'react';

//register route

const LoginForm = ({show,Hide, setModalRegisterShow,setModalLoginShow}) => {

  const users = []
  
  const [userLogin, setState] = useState({
    email: "",
    password: "",
  })

  const handleOnChange = (e) => {
    // setState here
    setState({
      ...userLogin,
      [e.target.name]: e.target.value,
    })
  }
  
  let storage = JSON.parse(localStorage.getItem("DATA_USER"))
  
  const handleOnSubmit = (e) => {
    e.preventDefault();
    storage.forEach(element => {
      if (userLogin.email === element.email && userLogin.password === element.password ) {
        users.push(userLogin)
        localStorage.setItem("LOGIN_STATUS", JSON.stringify(users))
        setModalLoginShow(false)
      } else {
        console.log(users)
      }
    });
  }


  return (
    <>
      <Modal show={show} onHide={Hide}>
        <Modal.Body>
<div className='form-group'>
    <Form onSubmit={handleOnSubmit}>
        <h1>LOGIN</h1>
      <Form.Group controlId="formBasicEmail">
        <Form.Control 
         onChange={handleOnChange}
        name="email" 
        type="email" 
        placeholder="Email" 
        />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Control
         onChange={handleOnChange}
         name="password"
         type="password" 
         placeholder="Password" 
        />
      </Form.Group>
      <Button variant="danger" type='submit'>Login</Button>{' '}
      <p style={{fontSize: "11pt", margin: "8px 0 0"}}>Don't have an account ? Click <span className='btn text-info' style={{border: "none", padding: "0"}} onClick={() => {setModalRegisterShow(true); setModalLoginShow(false)}}>here</span></p>
    </Form>
</div>
        </Modal.Body>
      </Modal>
    </>
  );
  }  

export default LoginForm