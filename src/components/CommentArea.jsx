import { Component } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    arrayOfComments: [],
  };

  fetchingComments = async () => {
    try {
      const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.bookId}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2ODE0NzljZTFjMjUwNDAwMTUxYWI2NGUiLCJpYXQiOjE3NDczMTEyODcsImV4cCI6MTc0ODUyMDg4N30._DZV1gVqDRIqvSd0DKY6yrH7gf8IOmEaFxuIk_XOT-M",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      this.setState({ arrayOfComments: data });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.fetchingComments();
  }

  render() {
    return (
      <>
        <CommentsList arrayOfComments={this.state.arrayOfComments} />
        <AddComment bookId={this.props.bookId} />
      </>
    );
  }
}

export default CommentArea;
