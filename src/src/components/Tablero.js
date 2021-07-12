import { useEffect, useState } from "react";
import dado from './dado.png';
import d from './d.png';
import '../App.css';
import Dado from "./Dado";
import { render } from "@testing-library/react";


 function Tablero(props){

     const[uno, setUno]=useState(0);
     const[dos, setDos]=useState(0);
     const[tres,setTres]=useState(0);
     const[cuatro,setCuatro]=useState(0);
     const[cinco, setCinco]=useState(0);
     const[escalera, setEscalera]=useState(0);
     const[full, setFull]=useState(0);
     const[pocker,setPocker]=useState(0);
     const[generala, setGenerala]=useState(0);

     const[final,setFinal]=useState(0);


    const btn_1=()=>{
        setUno(props.puntaje)
        puntajeFinal()
        props.reset()
     }

     const btn_2=()=>{
        setDos(props.puntaje)
        puntajeFinal()
        props.reset()
     }


     const btn_3=()=>{
        setTres(props.puntaje)
        puntajeFinal()
        props.reset()

     }


     const btn_4=()=>{
        setCuatro(props.puntaje)
        puntajeFinal()
        props.reset()
     }


     const btn_5=()=>{
        setCinco(props.puntaje)
        puntajeFinal()
        props.reset()
     }

     const btn_escalera=()=>{
        setEscalera(25)
        puntajeFinal()
        props.reset()
     }

     const btn_full=()=>{
        setFull(35)
        puntajeFinal()
        props.reset()
     }

     const btn_pocker=()=>{
        setPocker(45)
        puntajeFinal()
        props.reset()
     }

     const btn_generala=()=>{
        setGenerala(50)
        puntajeFinal()
        props.reset()
     }

// suma final del juego

const puntajeFinal=()=>{
    var total= uno + dos  +tres +cuatro + cinco + escalera + full + pocker + generala;
    if(uno>0 && dos>0 && tres >0 && cuatro >0 && cinco>0 && escalera>0 && full >0 && pocker>0 && generala >0){
        setFinal(total)
        alert("GAME OVER ")
    }
    
}














     return(
    <div className=" letras-tablero">
        {final>0 && <h1>Game Over Puntos: {final}</h1>}

        <div id="cajon1"  className="marg">
             <h2 >UNO : {uno}</h2>
             
             <button onClick={btn_1}>CARGAR PUNTOS</button>
        </div>
        <div id="cajon1" className="marg">
             <h2>DOS : {dos}</h2>
             <button onClick={btn_2}>CARGAR PUNTOS</button>
            
        </div>
        
        <div id="cajon1"  className="marg">
             <h2  className="marg">TRES : {tres}</h2>
             <button onClick={btn_3}>CARGAR PUNTOS</button>
             
        </div>
        <div id="cajon1"  className="marg">
             <h2>CUATRO : {cuatro }</h2>
             <button onClick={btn_4}>CARGAR PUNTOS</button>
            
        </div>
        <div id="cajon1"  className="marg">
             <h2>CINCO : {cinco}</h2>
             <button onClick={btn_5}>CARGAR PUNTOS</button>
             
        </div>
        <div id="cajon1"  className="marg">
             <h2>ESCALERA: {escalera}</h2>
             <button onClick={btn_escalera}>CARGAR PUNTOS</button>
        </div>
        <div id="cajon1"   className="marg">
             <h2>FULL : {full}</h2>
             <button onClick={btn_full}>CARGAR PUNTOS</button>
        </div>
        
        <div id="cajon1"  className="marg">
             <h2>POCKER: {pocker}</h2>
             <button onClick={btn_pocker}>CARGAR PUNTOS</button>
        </div>
        
        <div id="cajon1"  className="marg">
             <h2>GENERALA: {generala}</h2>
             <button onClick={btn_generala}>CARGAR PUNTOS</button>
        </div>

    </div>
         
     );




 }
 export default Tablero;