import React, { Fragment, useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import InboxList from "./InboxList";

const DisplayMails = () => {
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const databaseURL =
    "https://mail-box-client-4d083-default-rtdb.firebaseio.com/";
  let email = localStorage.getItem("email");
  email = email.replace(/[^a-zA-Z0-9]/g, "");
  const fetchEmailHandler = async () => {
    setError(null);
    try {
      const response = await fetch(`${databaseURL}/${email}/inbox.json`);

      const data = await response.json();

      const loadedData = [];

      for (const key in data) {
        loadedData.push({
          id: key,
          sender: data[key].sender,
          subject: data[key].subject,
          messege: data[key].messege,
        });
      }
      setData(loadedData);
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchEmailHandler();
  }, []);

  const deleteHandler = (keyToDelete) => {
    setLoading(true);
    // const keyToDelete = props.id;
    console.log("keyToDelete", keyToDelete);

    fetch(`${databaseURL}/${email}/inbox/${keyToDelete}.json`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        console.log(response);
        fetchEmailHandler();
        console.log(`Node with key ${keyToDelete} deleted successfully.`);
      })
      .catch((error) => {
        console.error(`There was a problem deleting the node: ${error}`);
      });
    setLoading(false);
  };
  const showEmail = (emailId) => {
    const selected = data.find((email) => email.id === emailId);
    setSelectedEmail(selected);
  };
  let content = <p>Found no Email.</p>;

  if (loading) {
    content = <p>Loading...</p>;
  }
  if (data.length > 0) {
    content = (
      <div>
        <InboxList
          emails={data}
          deleteHandler={(id) => deleteHandler(id)}
          showEmail={(id) => showEmail(id)}
        />
      </div>
    );
  }
  if (selectedEmail) {
    content = (
      <div style={{ marginInline: "10rem", marginTop: "20rem" }}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>{`From : ${selectedEmail.sender}`}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{`Subject : ${selectedEmail.subject}`}</td>
            </tr>
            <tr>
              <td>{`Messege : ${selectedEmail.messege}`}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }

  if (error) {
    content = <p>{error}</p>;
  }
  return (
    <Fragment>
      {!selectedEmail && (
        <Button variant="dark">
          <Link
            to="/compose"
            style={{ textDecoration: "none", color: "white" }}
          >
            Compose Email
          </Link>
        </Button>
      )}
      {!selectedEmail && (
        <h2 style={{ textAlign: "center", paddingBottom: "5rem" }}>
          Inbox ({data.length})
        </h2>
      )}
      {content}
    </Fragment>
  );
};

export default DisplayMails;
