import React from "react";
import memeData from "../memeData";

export default function Meme() {
  let url;

  function getMemeImage() {
    const memesArray = memeData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    url = memesArray[randomNumber].url;
  }

  return (
    <main>
      <div className="form">
        <p>{url}</p>
        <input type="text" className="form-input" placeholder="Top text" />

        <input type="text" className="form-input" placeholder="bottom text" />

        <button className="form-button" onClick={getMemeImage}>
          Get a new meme
        </button>
      </div>
    </main>
  );
}
