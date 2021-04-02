import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Search() {
  const [keyword, setKeyword] = useState(null);
  const [results, setResults] = useState(null);

  function handleResponse(response) {
    // console.log(response.data);
    setResults(response.data[0]);
  }

  // [{ word: response.data[0].word, phonetics: response.data[0] }];

  function search(event) {
    event.preventDefault();
    console.log(`searching the definition for ${keyword}`);
    let api = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(api).then(handleResponse);
  }

  function handleSearch(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }

  return (
    <div className="Search">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="enter a word"
          onChange={handleSearch}
        ></input>
      </form>
      <div>
        <Results results={results} />
      </div>
    </div>
  );
}
