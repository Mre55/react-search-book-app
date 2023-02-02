import React from "react";

import classes from "./ToReadList.module.css";

const ToReadList = (props) => {
  const readList = props.toReadList.filter((book) => book.picked === true);

  return (
    <div className={classes["book-to-read-container"]}>
      <p className={classes["book-to-read-title"]}>To read list</p>
      <ul className={classes["book-to-read-list"]}>
        {readList.map((book) => (
          <li key={book.id} className={classes["book-to-read"]}>
            <div className={classes["book-img-title"]}>
              <div>
                <img
                  className={classes["book-img"]}
                  src={book?.image["image/jpeg"]}
                  alt={`${book.title}`}
                />
              </div>
              <div>
                <h5 className={classes.title}>{book.title}</h5>
              </div>
            </div>
            <button
              className={classes["pick-btn"]}
              onClick={props.onRemove.bind(null, book.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToReadList;
