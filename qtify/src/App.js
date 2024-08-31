import React, { useRef, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import Card from './components/Card/Card';
import Section from './components/Section/Section';
import axios from "axios";

function App() {
  const topData = useRef([]);
  const newData = useRef([]);
  
  useEffect(()=>{
    async function getAlbumsData(){
      try{
        const resTop = axios.get('https://qtify-backend-labs.crio.do/albums/top');
        const resNew = axios.get('https://qtify-backend-labs.crio.do/albums/new');
        const res = await Promise.allSettled([resTop,resNew]);
        topData.current = res[0].value.data;
        newData.current = res[1].value.data;
      }
      catch(e){
        console.log(e);
      }
    }
    getAlbumsData()
  },[topData.current,newData.current]);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/> 
        <Hero/>
        <Section albumData={topData.current} title={"Top Albums"}/>
        <Section albumData={newData.current} title={"New Albums"}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
