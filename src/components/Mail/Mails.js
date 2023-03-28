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
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Mails;
