import { Component } from "react";
import { Button, ListGroup } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";

class SingleComment extends Component {
  handleClick = () => {
    fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.commentObj._id}`, {
      method: "DELETE",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODE0NzljZTFjMjUwNDAwMTUxYWI2NGUiLCJpYXQiOjE3NDczMTEyODcsImV4cCI6MTc0ODUyMDg4N30._DZV1gVqDRIqvSd0DKY6yrH7gf8IOmEaFxuIk_XOT-M",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("errore nella cancellazione", response);
        } else {
          console.log("cancellato con successo", response);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <ListGroup.Item>
        {this.props.commentObj.comment} - rate {this.props.commentObj.rate}/5
        <Button className="p-1 ms-3" onClick={this.handleClick}>
          <Trash />
        </Button>
      </ListGroup.Item>
    );
  }
}

export default SingleComment;
