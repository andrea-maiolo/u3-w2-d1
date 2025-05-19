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

  componentDidUpdate() {
    this.fetchingComments();
  }

  render() {
    console.log("props in comAre", this.props);
    return (
      <>
        <h1>hello</h1>
        {this.props.bookId ? (
          <>
            <CommentsList arrayOfComments={this.state.arrayOfComments} />
            <AddComment bookId={this.props.bookId} />
          </>
        ) : (
          <p>select a book to see comments</p>
        )}
      </>
    );
  }
}

export default CommentArea;
