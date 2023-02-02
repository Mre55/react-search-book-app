import React, { useState } from "react";
import axios from "axios";

import ResultList from "./components/ResultList/ResultList";
import SearchBar from "./components/SearchBar/SearchBar";
import ToReadList from "./components/ToReadList/ToReadList";
import classes from "./App.module.css";

function App() {
  const [bookList, setBookList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [bookNotFound, setBookNotFound] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const fetchBooksHandler = (book) => {
    if (book === null) {
      return;
    }

    if (book.trim() === "") {
      return;
    }

    setIsLoading(true);
    setBookNotFound(false);
    setErrorMessage(null);

    const trimedInputValue = book.trim().replace(/\s/g, "%20");

    axios
      .get(`https://gutendex.com/books/?search=${trimedInputValue}`)
      .then((res) => {
        const response = res.data;

        if (!response.results.length > 0) {
          setBookNotFound(true);
        }

        const loadedBooks = [];

        for (const key in response.results) {
          loadedBooks.push({
            id: key,
            title: response.results[key].title,
            authors: response.results[key].authors,
            image: response.results[key].formats,
          });
        }

        setBookList(loadedBooks);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        setBookNotFound(false);
        setErrorMessage(true);
      });
  };

  const addToReadListHandler = (event) => {
    const bookToBeAddedIndex = bookList.findIndex((item) => item.id === event);

    const bookToBeAdded = bookList[bookToBeAddedIndex];
    let updatedBooks;

    const updatedBook = {
      ...bookToBeAdded,
      picked: true,
    };
    updatedBooks = [...bookList];
    updatedBooks[bookToBeAddedIndex] = updatedBook;

    setBookList(updatedBooks);
  };

  const removeFromReadListHandler = (id) => {
    const bookToBeAddedIndex = bookList.findIndex((item) => item.id === id);

    const bookToBeAdded = bookList[bookToBeAddedIndex];
    let updatedBooks;

    const updatedItem = {
      ...bookToBeAdded,
      picked: false,
    };
    updatedBooks = [...bookList];
    updatedBooks[bookToBeAddedIndex] = updatedItem;

    setBookList(updatedBooks);
  };

  return (
    <div className={classes.container}>
      <SearchBar onFetch={fetchBooksHandler} />

      <main>
        <ResultList resultList={bookList} onAdd={addToReadListHandler} />
        <ToReadList
          toReadList={bookList}
          onRemove={removeFromReadListHandler}
        />
      </main>
    </div>
  );
}

export default App;
