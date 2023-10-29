import { useEffect, useState } from 'react';


export default function Input(){
    // array of url images 
    // state of meme (object)
    const [meme, setMeme] = useState(
        {
            textTop: "",
            textBottom: "",
            randomImage: "http://i.imgflip.com/1bij.jpg"
        }
    );
    // state of array of url images 
    const [allMemeImages,setAllMemeImages] = useState({});
    // function getMemeImage
    function getMemeImage(e){
        e.preventDefault();
        const randomNumber = Math.floor(Math.random() * allMemeImages.length);
        const url = allMemeImages[randomNumber];
        setMeme((prevMeme)=>{
            return({...prevMeme, randomImage: url.url});
        });
    }
    // function to manage inputs
    function handleInputChange(event){
        const {name,value} = event.target;
        return(
            setMeme((prevMeme)=>({
                ...prevMeme,
                [name]: value
            }))
        )
    }
    // use useUffect to fetch the api 
    useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemeImages(data.data.memes));

    },[])
    // return 
    return (
        <main>
            <form className="form">
                <input onChange={handleInputChange} value={meme.textTop} name='textTop' className="form--input" type="text"  placeholder="top text" />
                <input onChange={handleInputChange} value={meme.textBottom} name='textBottom' className="form--input" type="text"  placeholder="bottom text" />
                <button className="form--btn" onClick={getMemeImage}>Get a new meme image 🖼</button>
            </form>
            <div className='meme'>
                <img src={meme.randomImage} className='meme--image' />
                <h2 className='meme--text top'>{meme.textTop}</h2>
                <h2 className='meme--text bottom'>{meme.textBottom}</h2>
            </div>
        </main>
    )
}