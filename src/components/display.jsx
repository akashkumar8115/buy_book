import React, { useState, useEffect } from "react";
import "../css/display.css";
import Data from "../components/list.json";
import BookCard from "./BookCard.jsx";
function ContactPage() {
  const booksData = Data.books;
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);
  const [defaultBooks, setDefaultBooks] = useState([]);
  //   console.log(booksData);

  const fetchBooks = (query = "") => {
    // Simulate a search by filtering the local JSON data
    if (query) {
      setBooks(
        booksData.filter((book) =>
          book.title.toLowerCase().includes(query.toLowerCase())
        )
      );
    } else {
      setBooks([]);
    }
  };

  useEffect(() => {
    // Load default books from the JSON file
    const freeBooks = booksData.filter((book) => book.category === "free");
    setDefaultBooks(freeBooks);
  }, [booksData]);

  const handleSearch = () => {
    fetchBooks(searchTerm);
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
    handleSearch();
  };
  console.log(books);

  return (
    <div className="books-container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for books..."
          value={searchTerm}
          onChange={handleInputChange}
        /> <br />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="book-results">
        {books.length === 0 && searchTerm === "" ? (
          <div>
            {/* <h2>Default Books</h2> */}
            <div className="book-card-container">
              {defaultBooks.length > 0 ? (
                defaultBooks.map((book) => (
                  <BookCard key={book.id} book={book} />
                ))
              ) : (
                <p>No default books available</p>
              )}
            </div>
          </div>
        ) : (
          <div>
            <h2>{searchTerm ? "Search Results" : "Default Books"}</h2>
            <div className="book-card-container">
              {books.length === 0 && searchTerm ? (
                <p>No results found</p>
              ) : (
                books.map((book) => <BookCard key={book.id} book={book} />)
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ContactPage;
