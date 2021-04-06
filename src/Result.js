import React from "react";

import "./Result.css";

export default function Result(props) {
  // Reference: https://reactjs.org/docs/lists-and-keys.html
  // See Rendering multiple components
  const listItems = props.result[0].meanings.map((meaning, index) => (
    <div key={index}>
      <p>
        <strong>{meaning.partOfSpeech}</strong>
      </p>
      <p> {meaning.definitions[0].definition}</p>
      <p>
        <em>Example:</em> {meaning.definitions[0].example}
      </p>
      <li> {meaning.definitions[0].synonyms}</li>
    </div>
  ));

  // Reference: https://stackoverflow.com/questions/54114171/how-to-simply-play-an-mp3-once-onclick-in-react
  function playAudio() {
    let audio = new Audio(props.result[0].phonetics[0].audio);
    audio.play();
  }

  return (
    <div className="Result">
      <h3>{props.result[0].word}</h3>
      <div>
        <button className="fas fa-play-circle" onClick={playAudio}></button>

        {props.result[0].phonetics[0].text}
      </div>
      <div>{listItems}</div>
    </div>
  );
}
