import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { TailSpin } from "react-loader-spinner";




function Random() {
  const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
  const [loading,setLoading] = useState(true);
    const [gif,setGif] = useState('');
    
    async function fetchData(){
      setLoading(true)
      const url = `https://api.giphy.com/v1/gifs/random?api_key=1xMhrhbEZ73E1UJqWph4Y6wyiVA7OGWM`;
        const response = await axios.get(url);
        const imageSource = response.data.data.images.downsized_medium.url;
        console.log(imageSource)
        setGif(imageSource)
        setLoading(false)
    }

    useEffect(()=> {
      fetchData();
    },[])

    function clickHandler(){
      fetchData();
    }
  return (
    <div className="w-1/2  bg-green-500 rounded-lg border
     border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="text-2xl underline uppercase font-bold">A Random Gif</h1>
      {
        loading ? <TailSpin color="red" radius={"8px"} /> :  <img src={gif} alt="" width={450} />
      }
      <button className="w-9/12 bg-yellow-500 text-lg py-2 mb-[15px] rounded-lg" onClick={clickHandler}>Generate</button>
    </div>
  )
}

export default Random
