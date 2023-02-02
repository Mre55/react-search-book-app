import React from "react";

import classes from "./ResultList.module.css";

const BookItem = (props) => {
  return (
    <li key={props.id} className={classes.book}>
      <div className={classes["book-img-title"]}>
        <div>
          <img
            className={classes["book-img"]}
            src={props?.image["image/jpeg"]}
            alt={`${props.title}`}
          />
        </div>
        <div>
          <h3 className={classes.title}>{props.title}</h3>
          <p>
            By:{" "}
            {props.authors
              .map((author) => author["name"].replace(",", " "))
              .join(", ")}
          </p>
        </div>
      </div>
      {props.isPicked ? (
        <button
          className={classes["picked-btn"]}
          onClick={props.onAdd.bind(null, props.id)}
          disabled
        >
          Pick
        </button>
      ) : (
        <button
          className={classes["not-picked-btn"]}
          onClick={props.onAdd.bind(null, props.id)}
        >
          Pick
        </button>
      )}
    </li>
  );
};

export default BookItem;
