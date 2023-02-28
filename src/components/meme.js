import React,{useState,useEffect} from "react";


export default function Meme() {
 // const[memeImage,setMemeImage]=useState(".../images/Pictures/scr.png ")//
  const[meme,setMeme]=useState(
   { topText:"",
    bottomText:"",
    randomImage:".../images/Pictures/scr.png"
  }
 )
 const [allmemesImages,setAllmemesImages]=useState([])

useEffect(()=>{
  fetch("https://api.imgflip.com/get_memes")
  .then(res=>res.json())
  .then(data=>setAllmemesImages(data.data.memes))
},[])


  function getMemeImage() {

    const randomNumber = Math.floor(Math.random() * allmemesImages.length);
    const url=allmemesImages[randomNumber].url
    setMeme(prevMeme=>({
      ...prevMeme,
      randomImage:url
    }))
  }
  function handleChange(event){
    const{name,value}=event.target
    setMeme(prevMeme=>({
      ...prevMeme,
      [name]:value
    }))
  }
  return (
    <main>
      
      <div className="form">
        
        <input type="text"
         className="form-input"
          placeholder="Top text"
          onChange={handleChange}
           name="topText"
           value={meme.topText}
           />

        <input type="text"
         className="form-input"
          placeholder="bottom text"
           onChange={handleChange} 
           name="bottomText"
           value={meme.bottomText}
           />

        <button className="form-button" onClick={getMemeImage}>
          Get a new meme
        </button>
        <div>
        <img src={meme.randomImage} className="memeImg" class="absolute" name="randomImage" />
        <h2 class="relative pl-32 text-5xl text-gray-700" >{meme.topText}</h2>
        <h2 class="relative pl-32 text-5xl text-gray-700 ">{meme.bottomText}</h2>
        </div>
      </div>
    </main>
 )}
