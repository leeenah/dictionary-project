import React from "react";

import "./Result.css";

export default function Result(props) {
  return (
    <div className="Result">
      <div> what word do you want to look up?</div>
      <p> {props.result}</p>
    </div>
  );
  //   else {
  //     return (
  //       <div>
  //         <h3> you searched for:</h3>
  //         <p> {props.results.word}</p>
  //         <p> phonetics: {props.results.word} </p>
  //       </div>
  //     );
  //   }
}
