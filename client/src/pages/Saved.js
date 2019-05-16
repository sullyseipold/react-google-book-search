import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn, Form, SearchForm } from "../components/Form";
import { BookDetail, Card } from "../components/BookDetail";

class Saved extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.getBooks();
  }

  getBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({
          books: res.data
        })
      )
      .catch(err => console.log(err));
  };

  handleBookDelete = id => {
    API.deleteBook(id).then(res => this.getBooks());
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1 className="text-center">
                <strong>(React) Google Books Search</strong>
              </h1>
              <h2 className="text-center">Search for and Save Books of Interest.</h2>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            {/* <Card title="Saved Books"> */}
              {this.state.books.length ? (
                <List>
                  {this.state.books.map(book => (
                    <Card
                    key={book._id}
                    title={book.title}
                    authors={book.authors}
                    description={book.description}
                    image={book.image}
                    infoLink={book.link}
                    >
                     <FormBtn onClick={() => this.handleBookDelete(book._id)}>Delete</FormBtn>
                    </Card>
                  ))}
                </List>
              ) : (
                <h2 className="text-center">No Saved Books</h2>
              )}
            {/* </Card> */}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Saved;
