import { useEffect, useState } from "react";
import d from './d.png';
import '../App.css';
import Tablero from "./Tablero";



function Dado() {
var [puntos1,setPuntos1]= useState(0);
var [puntos2,setPuntos2]= useState(0);
var [puntos3,setPuntos3]= useState(0);
var [puntos4,setPuntos4]= useState(0);
var [puntos5,setPuntos5]= useState(0);

const [tirar1,setTirar1]=useState(true);
const [tirar2,setTirar2]=useState(true);
const [tirar3,setTirar3]=useState(true);
const [tirar4,setTirar4]=useState(true);
const [tirar5,setTirar5]=useState(true);


function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }


const lanzar=()=>{
  dado1();
  dado2();
  dado3();
  dado4();
  dado5();
   
}
const dado1=()=>{
  if(tirar1){
    setPuntos1(getRandom(1,6))
   }
  
}

const dado2=()=>{
  if(tirar2){
    setPuntos2(getRandom(1,6))
   }
  
}

const dado3=()=>{
  if(tirar3){
    setPuntos3(getRandom(1,6))

   }
  
}

const dado4=()=>{
  if(tirar4){
    setPuntos4(getRandom(1,6))

   }
  
}

const dado5=()=>{
  if(tirar5){
    setPuntos5(getRandom(1,6))

  }
  
}

const elegir1=()=>{
  setTirar1(!tirar1);
}
const elegir2=()=>{
  setTirar2(!tirar2);
}
const elegir3=()=>{
  setTirar3(!tirar3);
}
const elegir4=()=>{
  setTirar4(!tirar4);
}
const elegir5=()=>{
  setTirar5(!tirar5);
}




useEffect(()=>{



},[])


    return (
  <div >
    <div className="centradoT">
      <Tablero/>
    </div>
    
      <div >
        <div>
          
          <h1 className="letras-dados">DADO1 : {puntos1}</h1>
          <img src={d} width="3%"/>
          <button className="btn-select" onClick={elegir1}>{!tirar1 ? <h3>SELECTED</h3>:<h3>TO SELECT</h3>}</button>
        </div>
        <div>
          <h1 className="letras-dados">DADO2 : {puntos2}</h1>
          <img src={d} width="3%"/>
          <button className="btn-select" onClick={elegir2}>{!tirar2 ? <h3>SELECTED</h3>:<h3>TO SELECT</h3>}</button>
        </div>  
        <div>
          <h1 className="letras-dados">DADO3 : {puntos3}</h1>
          <img src={d} width="3%"/>
          <button className="btn-select" onClick={elegir3}>{!tirar3 ? <h3>SELECTED</h3>:<h3>TO SELECT</h3>}</button>
        </div>
        <div>
          <h1 className="letras-dados">DADO4 : {puntos4}</h1>
          <img src={d} width="3%"/>
          <button className="btn-select" onClick={elegir4}>{!tirar4 ? <h3>SELECTED</h3>:<h3>TO SELECT</h3>}</button>
        </div>
        <div>
          <h1 className="letras-dados">DADO5 : {puntos5}</h1>
          <img src={d} width="3%"/>
          <button className="btn-select" onClick={elegir5}>{!tirar5 ? <h3>SELECTED</h3>:<h3>TO SELECT</h3>}</button>
        </div>
    
      </div>
          <button onClick={lanzar}><h1>THROW</h1></button>
  </div>
    );
  }
  
  export default Dado;