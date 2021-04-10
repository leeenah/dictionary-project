import React from "react";

import "./Result.css";

export default function Result(props) {
  //Following the same format from the API response:
  const meanings = props.result.map((result, index) => (
    <div className="result" key={index}>
      {result.meanings.map((meaning) => (
        <div>
          <div className="partOfSpeech">
            <strong>{meaning.partOfSpeech}</strong>
          </div>

          {meaning.definitions.map((definition, index) => (
            <div className="definition" key={index}>
              {definition.definition != null && (
                <div>
                  <strong>{definition.definition}</strong>
                </div>
              )}
              {definition.example != null && (
                <div className="example"> "{definition.example}"</div>
              )}

              {definition.synonyms != null && (
                /** 
                 Slice: https://stackoverflow.com/a/14236643 
                 Join: https://stackoverflow.com/a/5080184
                 */
                <div className="synonyms">
                  {definition.synonyms.slice(0, 3).join(", ")}
                </div>
              )}
              <br />
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
      <br />
      <div>{meanings}</div>
    </div>
  );
}
