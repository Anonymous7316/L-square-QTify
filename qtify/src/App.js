import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import Card from './components/Card/Card';
import Section from './components/Section/Section';
import axios from "axios";

function App() {
  const [data,setData] = useState([]);
  
  useEffect(()=>{
    async function getAlbumsData(){
      try{
        const res = await axios.get('https://qtify-backend-labs.crio.do/albums/top');
        setData(res.data);
      }
      catch(e){
        console.log(e);
      }
    }
    getAlbumsData()
  },[data]);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Hero/>
        <Section albumData={data} title={"Top Albums"}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
