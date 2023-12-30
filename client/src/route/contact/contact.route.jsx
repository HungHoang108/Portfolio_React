import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { RiSendPlane2Fill } from "react-icons/ri";
import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

import "./contact.route.scss";

function Contact() {
  const [submitStatus, setSubmitStatus] = useState(null);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_y4gagdc", "template_qb898qy", form.current, "TL_WxhHJWu_3I_QHo").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
    setSubmitStatus(true);
    e.target.reset();
  };

  return (
    <div className="contact-route-box">
      {submitStatus ? (
        <h2 className="contact-route-thank-message">Thank you for contacting!</h2>
      ) : (
        <Form ref={form} onSubmit={sendEmail} className="contact-route-form">
          <h4>Contact</h4>
          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Control className="contact-route-nameAndEmail" name="name" type="text" placeholder="name" />
          </Form.Group>

          <Form.Group className="mb-4" controlId="formBasicEmail">
            <Form.Control className="contact-route-nameAndEmail" name="email" type="email" placeholder="email" />
          </Form.Group>

          <Form.Group className="mb-5" controlId="exampleForm.ControlTextarea1">
            <Form.Control
              className="contact-route-form-message"
              name="message"
              as="textarea"
              rows={4}
              placeholder="Enter message"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            <RiSendPlane2Fill size="1.5rem" /> Send Message
          </Button>
        </Form>
      )}
    </div>
  );
}

export default Contact;
