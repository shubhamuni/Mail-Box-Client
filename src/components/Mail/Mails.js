import { Button, Table } from "react-bootstrap";

const Mails = (props) => {
  return (
    <div style={{ marginInline: "15rem" }}>
      <Table striped>
        <tbody>
          <tr>
            <td style={{ fontWeight: "bold", paddingInlineEnd: "30rem" }}>
              {props.sender}
            </td>
            {props.sender && (
              <td>
                <Button
                  variant="dark"
                  onClick={props.showEmail}
                  style={{ marginInlineEnd: "5rem" }}
                >
                  Show
                </Button>
                <Button variant="dark" onClick={props.deleteHandler}>
                  Delete
                </Button>
              </td>
            )}
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Mails;
