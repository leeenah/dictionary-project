import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Search() {
  const [keyword, setKeyword] = useState(null);
  const [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    console.log(response.data[0].word);
    console.log(response.data[0].phonetics[0].text);
    setResults(response.data[0].word);
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
      what word do you want to look up?
      <form onSubmit={search}>
        <input type="search" onChange={handleSearch}></input>
      </form>
      <div>
        <Results results1={results} />
      </div>
    </div>
  );
}
