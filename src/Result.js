import React from "react";

import "./Result.css";

export default function Result(props) {
  //Following the same format from the API response:
  const meanings = props.result.map((result, index) => (
    <div key={index} style={{ border: "1px solid rgba(255, 0, 0, 1)" }}>
      {result.meanings.map((meaning) => (
        <div>
          <div> Part of Speech: {meaning.partOfSpeech}</div>
          <br />
          {meaning.definitions.map((definition) => (
            <div>
              {definition.definition != null && (
                <div>Definition: {definition.definition}</div>
              )}
              <br />

              {definition.example != null && (
                <div>Example: {definition.example}</div>
              )}
              <br />
              {definition.synonyms != null && (
                <div>similar: {definition.synonyms}</div>
              )}
            </div>
          ))}
        </div>
      ))}
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
      <div>{meanings}</div>
    </div>
  );
}
