import "./App.css";
import { Component } from "react";
import Mynav from "./components/Mynav";
import { Container, Col, Form } from "react-bootstrap";
import Myfooter from "./components/Myfooter";
import Welcome from "./components/Welcome";
import BookList from "./components/BookList";
import fantasyBooks from "./assets/books/fantasy.json";
import historyBooks from "./assets/books/history.json";
import horrorBooks from "./assets/books/horror.json";
import romanceBooks from "./assets/books/romance.json";
import scifiBooks from "./assets/books/scifi.json";

const currentBookArray = {
  fantasy: fantasyBooks,
  history: historyBooks,
  horror: horrorBooks,
  romance: romanceBooks,
  scifi: scifiBooks,
};

class App extends Component {
  state = {
    selectedBookList: fantasyBooks,
  };

  handleSelection = (e) => {
    this.setState({ selectedBookList: currentBookArray[e.target.value] });
  };

  render() {
    return (
      <Container>
        <Mynav />
        <Welcome />
        <Col sm={12} className="mb-3">
          <h3>Seleziona il tuo genere</h3>
          <Form.Select aria-label="options for books" onChange={this.handleSelection}>
            <option value="fantasy">Fantasy</option>
            <option value="history">History</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="scifi">Scifi</option>
          </Form.Select>
        </Col>
        <BookList selectedBookList={this.state.selectedBookList} />
        <Myfooter />
      </Container>
    );
  }
}

export default App;
