import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";

const Mails = (props) => {
  let number = 1;
  return (
    <div style={{ margin: "15rem" }}>
      <h2 style={{ textAlign: "center", paddingBottom: "5rem" }}>Inbox</h2>
      <Table striped>
        <thead></thead>
        <tbody>
          <tr>
            <td>{props.sender && number++}</td>
            <td style={{ fontWeight: "bold" }}>{props.sender}</td>
            <td>
              <Button variant="dark" onClick={props.deleteHandler}>
                Delete
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Mails;
