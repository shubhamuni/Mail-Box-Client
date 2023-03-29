import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

const Mails = (props) => {
  return (
    <div style={{ marginInline: "15rem" }}>
      <Table striped>
        <thead></thead>
        <tbody>
          <Link to="/details">
            <tr>
              <td style={{ fontWeight: "bold" }}>{props.sender}</td>
              {props.sender && (
                <td>
                  <Button variant="dark" onClick={props.deleteHandler}>
                    Delete
                  </Button>
                </td>
              )}
            </tr>
          </Link>
        </tbody>
      </Table>
    </div>
  );
};

export default Mails;
