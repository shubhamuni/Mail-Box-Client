import React, { Fragment, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import InboxList from "./InboxList";

const DisplayMails = () => {
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const databaseURL =
    "https://mail-box-client-4d083-default-rtdb.firebaseio.com/";
  let email = localStorage.getItem("email");
  email = email.replace(/[^a-zA-Z0-9]/g, "");
  const fetchEmailHandler = async () => {
    setError(null);
    try {
      const response = await fetch(`${databaseURL}/${email}.json`);

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

  let content = <p>Found no Email.</p>;

  if (loading) {
    content = <p>Loading...</p>;
  }
  if (data.length > 0) {
    content = (
      <div>
        <InboxList emails={data} />
      </div>
    );
  }

  if (error) {
    content = <p>{error}</p>;
  }
  return (
    <Fragment>
      <Button variant="dark">
        <Link to="/compose" style={{ textDecoration: "none", color: "white" }}>
          Compose Email
        </Link>
      </Button>
      {content}
    </Fragment>
  );
};

export default DisplayMails;
