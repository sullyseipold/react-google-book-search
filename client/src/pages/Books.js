import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn, Form, SearchForm } from "../components/Form";
import { BookDetail, Card } from "../components/BookDetail";

class Books extends Component {
  state = {
    books: [],
    result: {},
    search: ""
  };

  // componentDidMount() {
  //   this.loadBooks();
  // }

  loadBooks = () => {
    API.getBooks()
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  };

  handleSaveBook= id => {
    const book = this.state.books.find(book => book.id === id);

    API.saveBook({
      googleId: book.id,
      title: book.title,
      authors: book.authors,
      description: book.description,
      image: book.image,
      link: book.link,
    }).then(() => this.getBooks());
  };

  searchBooks = query => {
    API.searchBooks(query)
      .then(res => {
        // console.log(res);
        // console.log(res.data.items[0].volumeInfo.authors);
        // console.log(res.data.items[0].volumeInfo.description);
        // console.log(res.data.items[0].volumeInfo.title);
        // console.log(res.data.items[0].volumeInfo.imageLinks.thumbnail);
        // console.log(res.data.items[0].volumeInfo.infoLink);
        var result = res.data.items[0].volumeInfo;

        var book = {
          id: res.data.items[0].id,
          title: result.title,
          authors: result.authors,
          description: result.description,
          image: result.imageLinks.thumbnail,
          link: result.infoLink
        }
        var updateBooks = this.state.books;
        updateBooks.push(book);

        this.setState({ books: updateBooks });
        console.log("state.books = ", this.state.books);
      })
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBooks(this.state.search);
    this.setState({ search: ""});
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>(React) Goodle Books Search</h1>
              <p>Search for and Save Books of Interest</p>
            </Jumbotron>
            <SearchForm
              value={this.state.search}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
            />
            <Form>
              <label htmlFor="search">Results</label>
              {this.state.books.length ? (
                this.state.books.map((book) => (
                  <Card
                  key={book.id}
                  title={book.title}
                  authors={book.authors.join(", ")}
                  description={book.description}
                  image={book.image}
                  infoLink={book.link}
                  >
                  <FormBtn onClick={() => this.handleSaveBook(book.id)}>Save</FormBtn>
                  </Card>
                ))
              ) : (<h3>no books</h3>)}
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
