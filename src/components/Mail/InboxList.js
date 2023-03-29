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
            messege={email.messege}
            subject={email.subject}
            deleteHandler={() => props.deleteHandler(email.id)}
            showEmail={() => props.showEmail(email.id)}
          />
        ))}
      </ListGroup.Item>
    </ListGroup>
  );
};

export default InboxList;
