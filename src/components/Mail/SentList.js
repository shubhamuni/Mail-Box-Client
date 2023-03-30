import { ListGroup } from "react-bootstrap";
import Sent from "./Sent";

const SentList = (props) => {
  return (
    <ListGroup>
      <ListGroup.Item>
        {props.sentMail.map((email) => (
          <Sent
            key={email.toId}
            toId={email.toId}
            toSend={email.toSend}
            toMessege={email.toMessege}
            toSubject={email.toSubject}
            deleteHandler={() => props.deleteHandler(email.toId)}
            showSentEmail={() => props.showSentEmail(email.toId)}
          />
        ))}
      </ListGroup.Item>
    </ListGroup>
  );
};

export default SentList;
