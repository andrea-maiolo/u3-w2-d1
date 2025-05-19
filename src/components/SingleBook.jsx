import { Component } from "react";
import { Card, Badge } from "react-bootstrap";
import CommentArea from "./CommentArea";

class SingleBook extends Component {
  state = {
    selected: false,
  };

  handleSelected = () => {
    this.setState({ selected: this.state.selected ? false : true });
  };

  render() {
    return (
      <Card className={`h-100 ${this.state.selected ? "border border-danger border-5" : ""}`}>
        <Card.Img onClick={this.handleSelected} variant="top" className="img-fluid h-75 myImg" src={this.props.book.img} alt={this.props.book.title} />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="text-truncate">{this.props.book.title}</Card.Title>
          <Card.Text>
            Price <Badge bg="secondary">{this.props.book.price}</Badge>
          </Card.Text>
          <Card.Text className="fs-6">
            Category <Badge bg="success">{this.props.book.category}</Badge>
          </Card.Text>
          {this.state.selected && <CommentArea bookId={this.props.book.asin} />}
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
