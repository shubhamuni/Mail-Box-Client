import Table from "react-bootstrap/Table";

function StripedRowExample() {
  let number = 1;
  return (
    <div style={{ margin: "15rem" }}>
      <h2 style={{ textAlign: "center", paddingBottom: "5rem" }}>Inbox</h2>
      <Table striped>
        <thead></thead>
        <tbody>
          <tr>
            <td>{number++}</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>{number++}</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>{number++}</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
          <tr>
            <td>{number++}</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default StripedRowExample;
