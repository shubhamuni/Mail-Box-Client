import React, { Fragment, useRef } from "react";
import { Button, Form } from "react-bootstrap";

const ComposeEmail = () => {
  const emailInputRef = useRef();
  const subjectInputRef = useRef();
  const messageInputRef = useRef();

  let senderEmail = localStorage.getItem("email");

  const databaseURL =
    "https://mail-box-client-4d083-default-rtdb.firebaseio.com/";

  const sendMessegeHandler = async (event) => {
    event.preventDefault();
    let email = emailInputRef.current.value;
    email = email.replace(/[^a-zA-Z0-9]/g, "");
    let mail = {
      sender: senderEmail,
      subject: subjectInputRef.current.value,
      messege: messageInputRef.current.value,
    };

    senderEmail = senderEmail.replace(/[^a-zA-Z0-9]/g, "");
    const response = await fetch(`${databaseURL}/${email}/inbox.json`, {
      method: "POST",
      body: JSON.stringify(mail),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
    const tmail = {
      toSend: emailInputRef.current.value,
      toSubject: subjectInputRef.current.value,
      toMessege: messageInputRef.current.value,
    };
    const res = await fetch(`${databaseURL}/${senderEmail}/sent.json`, {
      method: "POST",
      body: JSON.stringify(tmail),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const ata = await res.json();
    console.log(ata);
  };
  return (
    <Fragment>
      <Form
        style={{ marginTop: "15rem", marginInline: "15rem" }}
        onSubmit={sendMessegeHandler}
      >
        <Form.Group controlId="recipient">
          <Form.Label>To:</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter recipient email"
            ref={emailInputRef}
          />
        </Form.Group>

        <Form.Group controlId="subject">
          <Form.Label>Subject:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter email subject"
            ref={subjectInputRef}
          />
        </Form.Group>

        <Form.Group controlId="body">
          <Form.Label>Message:</Form.Label>
          <Form.Control
            as="textarea"
            rows={6}
            placeholder="Enter email message"
            ref={messageInputRef}
          />
        </Form.Group>

        <Button variant="dark" type="submit" className="m-3">
          Send
        </Button>
      </Form>
    </Fragment>
  );
};

export default ComposeEmail;
