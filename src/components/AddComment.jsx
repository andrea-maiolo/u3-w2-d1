import { Component } from "react";
import { Button, Form } from "react-bootstrap";

class AddComment extends Component {
  state = {
    commentToPost: {
      author: "",
      comment: "",
      rate: 1,
      elementId: this.props.bookId,
    },
  };

  handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      body: JSON.stringify(this.state.commentToPost),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODE0NzljZTFjMjUwNDAwMTUxYWI2NGUiLCJpYXQiOjE3NDczMTEyODcsImV4cCI6MTc0ODUyMDg4N30._DZV1gVqDRIqvSd0DKY6yrH7gf8IOmEaFxuIk_XOT-M",
      },
    })
      .then((resp) => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error("Invio fallito");
        }
      })
      .then((comment) => {
        console.log("commento postato", comment);
      })
      .catch((err) => {
        console.log("catch", err);
      });
  };

  handleChange = (propertyName, propertyValue) => {
    this.setState({ commentToPost: { ...this.state.commentToPost, [propertyName]: propertyValue } });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="commentText">
          <Form.Label>scrivi un commento</Form.Label>
          <Form.Control type="text" required value={this.state.commentToPost.comment} onChange={(e) => this.handleChange("comment", e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="author">
          <Form.Label>la tua email</Form.Label>
          <Form.Control type="email" required value={this.state.commentToPost.author} onChange={(e) => this.handleChange("author", e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3" controlId="rating">
          <Form.Label>Rating</Form.Label>
          <Form.Select
            value={this.state.commentToPost.rate}
            onChange={(e) => {
              this.handleChange("rate", e.target.value);
            }}
            required
          >
            <option value="1">Uno</option>
            <option value="2">Due</option>
            <option value="3">Tre</option>
            <option value="4">Quattro</option>
            <option value="5">Cinque</option>
          </Form.Select>
        </Form.Group>
        <Button variant="info" type="submit">
          Posta il commento
        </Button>
      </Form>
    );
  }
}

export default AddComment;
