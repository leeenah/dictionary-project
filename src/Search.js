import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  const [keyword, setKeyword] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
  }

  function search(event) {
    event.preventDefault();
    console.log(`searching the definition for `);
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
    </div>
  );
}
