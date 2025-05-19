import { Component } from "react";
import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

class CommentsList extends Component {
  render() {
    return (
      <ListGroup>
        {this.props.arrayOfComments.map((commentObj) => (
          <SingleComment key={commentObj._id} commentObj={commentObj} />
        ))}
      </ListGroup>
    );
  }
}

export default CommentsList;
