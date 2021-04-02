import React from "react";

import "./Result.css";

export default function Result(props) {
  return (
    <div className="Result">
      <h3>{props.result[0].word}</h3>
      <div> {props.result[0].phonetics[0].text}</div>
    </div>
  );
}
