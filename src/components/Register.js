import { Button, Form, Modal } from 'react-bootstrap';
import React, { useState } from 'react';

//register route

const Regform = ({show,Hide, setModalRegisterShow,setModalLoginShow}) => {
  const users = []

  const [userData, setState] = useState({
    email: "",
    password: "",
    fullname: ""
  })

  const addUserData = JSON.parse(localStorage.getItem("DATA_USER"))

  const handleOnChange = (e) => {
    // setState here
    setState({
      ...userData,
      [e.target.name]: e.target.value,
    })
  }


  const handleOnSubmit = (e) => {
    e.preventDefault()
    
    if (addUserData === null) {
      users.push(userData)
      localStorage.setItem("DATA_USER", JSON.stringify(users))

    } else {
      addUserData.forEach(element => {
        users.push(element)
      })
      users.push(userData)
      localStorage.setItem("DATA_USER", JSON.stringify(users))
    }
      console.log(users.length)
      

      setModalRegisterShow(false)
      setModalLoginShow(true)
  }


  return (
    <>
      <Modal show={show} onHide={Hide}>
        <Modal.Body>
<div className='form-group'>
    <Form onSubmit={handleOnSubmit}>
        <h1>REGISTER</h1>
      <Form.Group controlId="formBasicEmail">
        <Form.Control 
        onChange={handleOnChange} 
        value={userData.email}
        name="email" 
        type="email" 
        placeholder="Email" 
        />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Control 
        onChange={handleOnChange} 
        value={userData.password}
        name="password"
        type="password" 
        placeholder="Password" 
        />
        </Form.Group>
        <Form.Group controlId="formBasicName">
        <Form.Control
        onChange={handleOnChange} 
        value={userData.fullname} 
        name="fullname"
        type="text" 
        placeholder="Full Name" 
        />
      </Form.Group>
      <div>

      <Button variant="danger" type='submit'>Register</Button>
      <p style={{fontSize: "11pt", margin: "8px 0 0"}}>Already have an account ? Click <span className='btn text-info' style={{border: "none", padding: "0"}} onClick={() => {setModalRegisterShow(false); setModalLoginShow(true)}}>here</span></p>
      </div>
    </Form>
</div>
        </Modal.Body>
      </Modal>
    </>
  );
  }

  export default Regform