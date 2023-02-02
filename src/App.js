import React, { useState } from "react";
import axios from "axios";

import ResultList from "./components/ResultList/ResultList";
import SearchBar from "./components/SearchBar/SearchBar";
import ToReadList from "./components/ToReadList/ToReadList";
import classes from "./App.module.css";

function App() {
  const [bookList, setBookList] = useState([]);

  const fetchBooksHandler = (book) => {
    if (book === null) {
      return;
    }

    if (book.trim() === "") {
      return;
    }

    const trimedInputValue = book.trim().replace(/\s/g, "%20");

    axios
      .get(`https://gutendex.com/books/?search=${trimedInputValue}`)
      .then((res) => {
        const response = res.data;

        const loadedBooks = [];

        for (const key in response.results) {
          loadedBooks.push({
            id: key,
            title: response.results[key].title,
            authors: response.results[key].authors,
            image: response.results[key].formats,
          });
        }
      })
      .catch((error) => {});
  };

  return (
    <div className={classes.container}>
      <SearchBar />

      <main>
        <ResultList />
        <ToReadList />
      </main>
    </div>
  );
}

export default App;
