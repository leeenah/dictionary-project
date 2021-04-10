import React, { useState } from "react";
import axios from "axios";

import "./Search.css";

export default function Search(props) {
  const [query, setQuery] = useState(null);

  function handleResponse(response) {
    props.updateResult(response.data);
  }

  function search(event) {
    event.preventDefault();
    let api = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${query}`;
    axios.get(api).then(handleResponse);
  }

  function handleSearch(event) {
    event.preventDefault();
    setQuery(event.target.value);
  }

  return (
    <div className="Search">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Search for a word"
          onChange={handleSearch}
        ></input>
        <div>
          <span>Get definitions, examples, synonyms</span>
        </div>
      </form>
    </div>
  );
}
