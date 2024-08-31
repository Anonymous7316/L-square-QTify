import React, { useRef, useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import Card from './components/Card/Card';
import Section from './components/Section/Section';
import axios from "axios";

function App() {
  const [topData,setTopData] = useState([]);
  const [newData,setNewData] = useState([]);
  const [songsData,setSongsData] = useState([]);
  
  useEffect(()=>{
    async function getAlbumsData(){
      try{
        const resTop = axios.get('https://qtify-backend-labs.crio.do/albums/top');
        const resNew = axios.get('https://qtify-backend-labs.crio.do/albums/new');
        const resSongs = axios.get('https://qtify-backend-labs.crio.do/songs');
        const res = await Promise.allSettled([resTop,resNew,resSongs]);
        console.log(res)
        setTopData(res[0].value.data);
        setNewData(res[1].value.data);
        setSongsData(res[2].value.data);
      }
      catch(e){
        console.log(e);
      }
    }
    getAlbumsData()
  },[]);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/> 
        <Hero/>
        <Section albumData={topData} title={"Top Albums"}/>
        <Section albumData={newData} title={"New Albums"}/>
        <Section albumData={songsData} title={"Songs"}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
