import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { RiSendPlane2Fill } from "react-icons/ri";

import './contact.route.scss'

function Contact() {
  return (
    <div className='contact-route-box'>
    
    <Form className='contact-route-form'>
    <h4>Contact</h4>
    <Form.Group className="mb-4" controlId="formBasicEmail">
    
        <Form.Control className='contact-route-nameAndEmail' type="text" placeholder="Your name" />
      </Form.Group>


      <Form.Group className="mb-4" controlId="formBasicEmail">
      
        <Form.Control className='contact-route-nameAndEmail' type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
     
        <Form.Control className='contact-route-form-message' as="textarea" rows={4} placeholder="Enter message" />
      </Form.Group>

      <Button variant="primary" type="submit">
        <RiSendPlane2Fill size="1.5rem"/> Send Message
      </Button>
    </Form>

    </div>
  );
}

export default Contact;