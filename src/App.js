import React, { Fragment, useEffect, useState } from 'react'
import logo from './logo.svg';
import './App.css';
import axios from "axios"
import { Card } from './components/Card';
import { Modal } from './components/Modal';
import Spinner from './components/Spinner';
// import Loading from './loadingGif.gif';

function App() {
  const [imageUrls, setImageUrls] = useState([]);
  const [loading, setLoading]= useState(true);
  const [modalShow, setModalShow] = useState({
    status:false,
    imgUrl:'',
  });
  useEffect(()=>{
    fetchImages();
  },[])
  const clickHandler = (event,data) =>{
    setModalShow({status:true, imgUrl:data});
  }
  const closeModalHandler= ()=>{
    setModalShow({status:false, imgUrl:''});
    
  }
const fetchImages = async ()=>{
        let urllist=[]
        for(let i=0; i<10; i++){
        // let urlVal = await axios.get("https://random.imagecdn.app/v1/image?width=500&height=150&category=buildings&format=json")
        let urlVal = await axios.get("https://random.imagecdn.app/v1/image?category=buildings&format=json")
        urllist.push(urlVal.data.url);
        }
        setImageUrls(urllist);
        setLoading(false);

}



  return (
    <Fragment>
    <div>
    {modalShow.status && <Modal closeModalHandler={closeModalHandler} urlpath={modalShow.imgUrl}/>}
    </div>
      <h1 align="center">Image Gallery</h1>
      {loading? <Spinner />:
    <div className="row">
      {
        imageUrls.map((data, index)=>{
          return(<div className="column" onClick={(e)=>{clickHandler(e,data)}}><Card urlpath={data} key={index} /></div>)
        })
        
      }
    </div>}
    </Fragment>
  );
}

export default App;
