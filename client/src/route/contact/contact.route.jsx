import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { RiSendPlane2Fill } from "react-icons/ri";

import './contact.route.scss'

function Contact() {
  return (
    <div className='contact-route-box'>
    <Form className='contact-route-form'>
    <Form.Group className="mb-4" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control className='contact-route-nameAndEmail' type="text" placeholder="Your name" />
      </Form.Group>


      <Form.Group className="mb-4" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control className='contact-route-nameAndEmail' type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={4} />
      </Form.Group>

      <Button variant="primary" type="submit">
        <RiSendPlane2Fill size="1.5rem"/> Send
      </Button>
    </Form>

    </div>
  );
}

export default Contact;