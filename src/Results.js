import React from "react";

import "./Results.css";

export default function Results(props) {
  return (
    <div className="Results">
      <h2> you searched for:</h2>
      <p> {props.results1}</p>
      <p> noun: </p>
    </div>
  );
}
