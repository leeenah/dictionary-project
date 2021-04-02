import React from "react";

import "./Results.css";

export default function Results(props) {
  if (props.results == null)
    return (
      <div className="Results">
        <div> what word do you want to look up?</div>
      </div>
    );
  else {
    return (
      <div>
        <h3> you searched for:</h3>
        <p> {props.results.word}</p>
        <p> phonetics: {props.results.phonetics[0].text} </p>
      </div>
    );
  }
}
