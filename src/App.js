import React from 'react';
import "./style/style.scss";
import Tab from "./componentes/tab";
import Card from "./componentes/Card";



function App() {
  return (
    <>
    <Tab />

    
    <div background="blue" className="ed-video">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/wKcnM1L-u18" 
    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    autoplay="1"
    controls="1"
    color="blue"
    allowfullscreen></iframe>
    </div>

   

    </>
  );
}

export default App;
