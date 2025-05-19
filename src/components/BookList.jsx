import { Component } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";
import { Slack } from "react-bootstrap-icons";
import CommentArea from "./CommentArea";

class BookList extends Component {
  state = {
    search: "",
    selectedBook: "",
  };

  handleChange = (e) => {
    this.setState({ search: e.target.value });
  };

  handleSelected = (selectedNow) => {
    if (this.state.selectedBook === selectedNow) {
      this.setState({ selectedBook: null });
    } else {
      this.setState({ selectedBook: selectedNow });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col sm={12}>
            <Form className="mb-3" onSubmit={this.handleSubmit}>
              <Form.Group controlId="searchInput">
                <Form.Label>Che stai cercando?</Form.Label>
                <Form.Control type="text" value={this.state.search} onChange={this.handleChange}></Form.Control>
              </Form.Group>
            </Form>
          </Col>
          <Col xs={6} className="mb-3">
            <Row>
              {this.props.selectedBookList
                .filter((books) => books.title.toLowerCase().includes(this.state.search.toLowerCase()))
                .map((book) => (
                  <SingleBook key={book.asin} book={book} selected={book.asin === this.state.selectedBook} handleSelected={this.handleSelected} />
                ))}
            </Row>
          </Col>
          <Col xs={6}>
            <CommentArea bookId={this.state.selectedBook} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BookList;
