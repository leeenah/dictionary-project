import React from "react";

import "./Result.css";

export default function Result(props) {
  const listItems = props.result[0].meanings.map((meaning, index) => (
    <div style={{ backgroundColor: "lightgrey" }} key={index}>
      <p>{meaning.partOfSpeech}</p>
      <p> {meaning.definitions[0].definition}</p>
      <p>Example: {meaning.definitions[0].example}</p>
      <p> {meaning.definitions[0].synonyms}</p>
    </div>
  ));

  return (
    <div className="Result">
      <h3>{props.result[0].word}</h3>
      <div> {props.result[0].phonetics[0].text}</div>
      <div>{listItems}</div>
    </div>
  );
}
