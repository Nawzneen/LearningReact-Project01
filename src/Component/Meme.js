import React from "react";
import memesData from "../memesData.js";
export default function Meme() {
  // const [memeImage, setMemeImage] = React.useState(
  //   "http://i.imgflip.com/1bij.jpg"
  // );

  const [meme, setMeme] = React.useState({
    topText: "",
    buttomText: "",
    randomImg: "http://i.imgflip.com/1bij.jpg",
  });
  function memeGenerator() {
    const memeArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memeArray.length);
    const randomMemeUrl = memeArray[randomNumber].url;

    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImg: randomMemeUrl,
    }));
  }

  //  * Challenge: Update our state to save the meme-related
  //  * data as an object called `meme`. It should have the
  //  * following 3 properties:
  //  * topText, bottomText, randomImage.
  //  *
  //  * The 2 text states can default to empty strings for now,
  //  * amd randomImage should default to "http://i.imgflip.com/1bij.jpg"
  //  *
  //  * Next, create a new state variable called `allMemeImages`
  //  * which will default to `memesData`, which we imported above
  //  *
  //  * Lastly, update the `getMemeImage` function and the markup
  //  * to reflect our newly reformed state object and array in the
  //  * correct way.

  return (
    <main>
      <div className="form">
        <input type="text" className="form--input" />
        <input type="text" className="form--input" />
        <button className="form--button" onClick={memeGenerator}>
          Get a new meme image
        </button>
      </div>
      <img className="memeUrl" src={meme.randomImg} width="100%" />
    </main>
  );
}
