import { Fragment } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

function StripedRowExample() {
  let number = 1;
  return (
    <Fragment>
      <Button variant="dark">
        <Link to="/mails/compose">Compose Email</Link>
      </Button>
      <div style={{ margin: "15rem" }}>
        <h2 style={{ textAlign: "center", paddingBottom: "5rem" }}>Inbox</h2>
        <Table striped>
          <thead></thead>
          <tbody>
            <tr>
              <td>{number++}</td>
              <td>Mark</td>
            </tr>
            <tr>
              <td>{number++}</td>
              <td>Jacob</td>
            </tr>
            <tr>
              <td>{number++}</td>
              <td colSpan={2}>Larry the Bird</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Fragment>
  );
}

export default StripedRowExample;