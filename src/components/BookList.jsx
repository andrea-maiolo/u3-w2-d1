import { Component } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";

class BookList extends Component {
  state = {
    search: "",
  };

  handleChange = (e) => {
    this.setState({ search: e.target.value });
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
          {this.props.selectedBookList
            .filter((books) => books.title.toLowerCase().includes(this.state.search.toLowerCase()))
            .map((book) => (
              <Col key={book.asin} sm={12} md={4} lg={3} className="mb-3">
                <SingleBook book={book} />
              </Col>
            ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;
