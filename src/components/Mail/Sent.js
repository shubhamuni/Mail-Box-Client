import { Button, Table } from "react-bootstrap";

const Sent = (props) => {
  return (
    <div style={{ marginInline: "15rem" }}>
      <Table striped>
        <tbody>
          <tr>
            <td style={{ fontWeight: "bold", paddingInlineEnd: "30rem" }}>
              {props.toSend}
            </td>
            {props.toSend && (
              <td>
                <Button
                  variant="dark"
                  onClick={props.showSentEmail}
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

export default Sent;
