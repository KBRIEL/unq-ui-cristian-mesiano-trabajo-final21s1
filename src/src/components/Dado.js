import { useEffect, useState } from "react";
import d from './d.png';
import '../App.css';
import Tablero from "./Tablero";



function Dado() {

const[puntaje,setPuntaje]=useState(0);
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

const [sum1,setSum1]=useState(false);
const [sum2,setSum2]=useState(false);
const [sum3,setSum3]=useState(false);
const [sum4,setSum4]=useState(false);
const [sum5,setSum5]=useState(false);

// funcion numero random entre el 1 y el 6
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

// lanzamiento de dados
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
// elegir que dado tirar o no
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

//sumatoria 
const sumar=()=>{
  var total=sumar1()+sumar2()+sumar3()+sumar4()+sumar5();
setPuntaje(total)
}

const sumar1=()=>{
  if(sum1){
   return puntos1
  }else{
    return 0
  } 
 
}

const sumar2=()=>{
  if(sum2){
   return puntos2
  }else{
    return 0
  } 
  
}

const sumar3=()=>{
  if(sum3){
   return puntos3
  }else{
    return 0
  } 
  
}

const sumar4=()=>{
  if(sum4){
   return puntos4
  }else{
    return 0
  } 
  
}

const sumar5=()=>{
  if(sum5){
   return puntos5
  }else{
    return 0
  } 
  
}

const reset=()=>{
  
setPuntaje(0);
setPuntos1(0);
setPuntos2(0);
setPuntos3(0);
setPuntos4(0);
setPuntos5(0);

setTirar1(true);
setTirar2(true);
setTirar3(true);
setTirar4(true);
setTirar5(true);

setSum1(false);
setSum2(false);
setSum3(false);
setSum4(false);
setSum5(false);

}

useEffect(()=>{



},[])


    return (
  <div App-link> 
    <div className="centrado">
      <div id="rigth" className="letras-dados"><h1>PUNTAJE : {puntaje}</h1></div>
      <div>
        <Tablero puntaje={puntaje} reset={reset}/>
      </div>
     
    
    </div>
    
   

      <div className={"centrado"} >
      <div className="containera">
<div className="col-md-12 justify-content-center">

        
       
        <div id="cajon1"  className="letras-dados">
          <h1 className="letras-dados marg">DADO1 : {puntos1}</h1>
          <img src={d} width="10%" onClick={elegir1}/>
          <button className="btn-select"   onClick={elegir1}>{!tirar1 ? <h3>SELECTED</h3>:<h3>TO SELECT</h3>}</button>
          <button className="btn-select" onClick={()=>setSum1(!sum1)}>{sum1 ? <h3>SUMADO</h3>:<h3>SUMAR</h3>}</button>
        </div>
        <div id="cajon1">
          <h1 className="letras-dados">DADO2 : {puntos2}</h1>
          <img src={d} width="10%"/>
          <button className="btn-select" onClick={elegir2}>{!tirar2 ? <h3>SELECTED</h3>:<h3>TO SELECT</h3>}</button>
          <button className="btn-select" onClick={()=>setSum2(!sum2)}>{sum2 ? <h3>SUMADO</h3>:<h3>SUMAR</h3>}</button>
        </div>  
        <div  id="cajon1">
          <h1 className="letras-dados">DADO3 : {puntos3}</h1>
          <img src={d} width="10%"/>
          <button className="btn-select" onClick={elegir3}>{!tirar3 ? <h3>SELECTED</h3>:<h3>TO SELECT</h3>}</button>
          <button className="btn-select" onClick={()=>setSum3(!sum3)}>{sum3 ? <h3>SUMADO</h3>:<h3>SUMAR</h3>}</button>
        </div>
        <div id="cajon1" >
          <h1 className="letras-dados">DADO4 : {puntos4}</h1>
          <img src={d} width="10%"/>
          <button className="btn-select" onClick={elegir4}>{!tirar4 ? <h3>SELECTED</h3>:<h3>TO SELECT</h3>}</button>
          <button className="btn-select" onClick={()=>setSum4(!sum4)}>{sum4 ? <h3>SUMADO</h3>:<h3>SUMAR</h3>}</button>
        </div>
        <div id="cajon1" >
          <h1 className="letras-dados">DADO5 : {puntos5}</h1>
          <img src={d} width="10%"/>
          <button className="btn-select" onClick={elegir5}>{!tirar5 ? <h3>SELECTED</h3>:<h3>TO SELECT</h3>}</button>
          <button className="btn-select" onClick={()=>setSum5(!sum5)}>{sum5 ? <h3>SUMADO</h3>:<h3>SUMAR</h3>}</button>
        </div>
    
      </div>
      </div>
      </div>
      <div>
        <button onClick={lanzar}><h1>THROW</h1></button>
          <button onClick={sumar}><h1>SUM</h1></button>
      </div>
  </div>
    );
  }
  
  export default Dado;