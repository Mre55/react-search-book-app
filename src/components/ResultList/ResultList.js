import React from "react";

import BookItem from "./BookItem";
import classes from "./ResultList.module.css";

const ResultList = (props) => {
  const listOfBooks = props.resultList.map((book) => (
    <BookItem
      key={book.id}
      id={book.id}
      title={book?.title}
      authors={book?.authors}
      image={book.image}
      isPicked={book.picked}
      onAdd={props.onAdd}
    />
  ));

  return (
    <div className={classes["all-books"]}>
      <ul className={classes["list-of-books"]}>{listOfBooks}</ul>
    </div>
  );
};

export default ResultList;
