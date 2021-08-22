import React, { useEffect, useState } from 'react'
import logo from './logo.svg';
import './App.css';
import { Gallery } from './components/Gallery';
import axios from "axios"

let urls = [];

function App() {
  const [imageUrls, setImageUrls] = useState(
    {name:[]}
    
)

const abc = ()=>{

        for(let i=0; i<10; i++){
        axios.get("https://random.imagecdn.app/v1/image?width=500&height=150&category=buildings&format=json").then(
            resp=>urls.push(resp.data.url)
        )
        }
        setImageUrls({name:urls})
        console.log(imageUrls);

}

useEffect(()=>{
// let urls = [];

//     for(let i=0; i<10; i++){
//     axios.get("https://random.imagecdn.app/v1/image?width=500&height=150&category=buildings&format=json").then(
//         resp=>urls.push(resp.data.url)
//     )
//     }
//     setImageUrls({name:urls})
//     console.log(imageUrls);
abc();
},[])
// abc();

const cardVal = "";
if(imageUrls.name.length > 0){
    alert('12435ffgf---//-ttg45')
}
else{
    alert('34');
    // alert(typeof imageUrls)
}
  return (
    <div className="App">
      <Gallery name={imageUrls.name[0]}/>
    </div>
  );
}

export default App;
