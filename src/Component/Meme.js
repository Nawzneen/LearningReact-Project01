import React from "react";
import memesData from "../memesData.js";
export default function Meme() {
  const [memeImage, setMemeImage] = React.useState(
    "http://i.imgflip.com/1bij.jpg"
  );
  const [allMeme, setAllMeme] = React.useState([]);
  const [meme, setMeme] = React.useState({
    topText: "",
    buttomText: "",
    randomImg: "http://i.imgflip.com/1bij.jpg",
  });
  function memeGenerator() {
    // const memeArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * allMeme.length);
    const randomMemeUrl = allMeme[randomNumber].url;

    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImg: randomMemeUrl,
    }));
  }
  function handleChange(event) {
    const { name, value, type } = event.target;
    setMeme((prevMeme) => ({ ...prevMeme, [name]: value }));
  }

  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMeme(data.data.memes));
    console.log("Test");
  }, []);
  return (
    <main className="container">
      <div>
        <div className="form">
          <input
            type="text"
            className="form--input"
            value={meme.topText}
            name="topText"
            placeholder="Type..."
            onChange={handleChange}
          />
          <input
            type="text"
            className="form--input"
            value={meme.buttomText}
            name="buttomText"
            placeholder="Type..."
            onChange={handleChange}
          />
          <button className="form--button" onClick={memeGenerator}>
            Get a new meme image
          </button>
        </div>
        <div className="meme">
          <img className="meme--image" src={meme.randomImg} width="100%" />
          <h2 className="meme--text top">{meme.topText}</h2>
          <h2 className="meme--text bottom">{meme.buttomText}</h2>
        </div>
      </div>
    </main>
  );
}
