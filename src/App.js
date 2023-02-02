import React, { useState } from "react";

import ResultList from "./components/ResultList/ResultList";
import SearchBar from "./components/SearchBar/SearchBar";
import ToReadList from "./components/ToReadList/ToReadList";
import classes from "./App.module.css";

function App() {
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
