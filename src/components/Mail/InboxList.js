import { ListGroup } from "react-bootstrap";
import Mails from "./Mails";

const InboxList = (props) => {
  return (
    <ListGroup>
      <ListGroup.Item>
        {props.emails.map((email) => (
          <Mails
            key={email.id}
            id={email.id}
            sender={email.sender}
            subject={email.subject}
            messege={email.messege}
          />
        ))}
      </ListGroup.Item>
    </ListGroup>
  );
};

export default InboxList;
