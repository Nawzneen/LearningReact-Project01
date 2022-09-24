import React from "react";
import memesData from "../memesData.js";
export default function Meme() {
  const [memeImage, setMemeImage] = React.useState("");
  function memeGenerator() {
    const memeArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memeArray.length);
    const randomMemeUrl = memeArray[randomNumber].url;
    setMemeImage(randomMemeUrl);
  }
  // State

  return (
    <main>
      <div className="form">
        <input type="text" className="form--input" />
        <input type="text" className="form--input" />
        <button className="form--button" onClick={memeGenerator}>
          Get a new meme image
        </button>
      </div>
      <img className="memeUrl" src={memeImage} width="100%" />
    </main>
  );
}
