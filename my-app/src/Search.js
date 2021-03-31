import React, { useState } from "react";

export default function Search() {
  const [keyword, setKeyword] = useState(null);

  function search(event) {
    event.preventDefault();
    //
    console.log(`searching the definition for ${keyword}`);
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
