import React, { Fragment } from "react";
import { Button, Form } from "react-bootstrap";

const ComposeEmail = () => {
  return (
    <Fragment>
      <Form style={{ marginTop: "15rem", marginInline: "15rem" }}>
        <Form.Group controlId="recipient">
          <Form.Label>To:</Form.Label>
          <Form.Control type="email" placeholder="Enter recipient email" />
        </Form.Group>

        <Form.Group controlId="subject">
          <Form.Label>Subject:</Form.Label>
          <Form.Control type="text" placeholder="Enter email subject" />
        </Form.Group>

        <Form.Group controlId="body">
          <Form.Label>Message:</Form.Label>
          <Form.Control
            as="textarea"
            rows={6}
            placeholder="Enter email message"
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
