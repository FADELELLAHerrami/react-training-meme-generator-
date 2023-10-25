import { useState } from 'react';
import memeData from '../data/memeData';


export default function Input(){
    const [memeImage,setMemeImage] = useState("");
    function getMemeImage(e){
        e.preventDefault();
        const memeImageUrl = memeData.map((memeimage)=>{return(memeimage.url)});
        console.log(memeImageUrl);
        const randomNuber = Math.floor(Math.random() * memeImageUrl.length);
        setMemeImage(memeImageUrl[randomNuber]);
    }
    return (
        <main>
        {console.log(memeImage)}
            <form className="form">
                <input className="form--input" type="text"  placeholder="top text" />
                <input className="form--input" type="text"  placeholder="bottom text" />
                <button className="form--btn" onClick={getMemeImage}>Get a new meme image 🖼</button>
            </form>
            <img src={memeImage} className='meme--image' />
        </main>
    )
}