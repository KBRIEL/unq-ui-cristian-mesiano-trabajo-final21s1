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


     const[tachar1, setTachar1]=useState(true);
     const[tachar2, setTachar2]=useState(true);
     const[tachar3, setTachar3]=useState(true);
     const[tachar4, setTachar4]=useState(true);
     const[tachar5, setTachar5]=useState(true);
     const[tacharE, setTacharE]=useState(true);
     const[tacharF, setTacharF]=useState(true);
     const[tacharP, setTacharP]=useState(true);
     const[tacharG, setTacharG]=useState(true);
     const[tacharG2, setTacharG2]=useState(true);

     const[final,setFinal]=useState(0);


    const btn_1=()=>{
         if(tachar1){
        setUno(props.puntaje)
        puntajeFinal()
        props.reset()
         }

     }

     const btn_2=()=>{
          if(tachar2){
        setDos(props.puntaje)
        puntajeFinal()
        props.reset()
          }

     }


     const btn_3=()=>{
          if(tachar3){
        setTres(props.puntaje)
        puntajeFinal()
        props.reset()
          }


     }


     const btn_4=()=>{
          if(tachar4){
        setCuatro(props.puntaje)
        puntajeFinal()
        props.reset()
          }

     }


     const btn_5=()=>{
          if(tachar5){
          setCinco(props.puntaje)
          puntajeFinal()
          props.reset()
          }
        
     }

     const btn_escalera=()=>{

          if(tacharE){
               setEscalera(25)
        puntajeFinal()
        props.reset()
                }
       
     }

     const btn_full=()=>{
          if(tacharF){
             setFull(35)
        puntajeFinal()
        props.reset()  
          }
       
     }

     const btn_pocker=()=>{
          if(tacharP){
            setPocker(45)
        puntajeFinal()
        props.reset()  
          }
        
     }

     const btn_generala=()=>{
          if(tacharG){
             setGenerala(50)
        puntajeFinal()
        props.reset() 
          }
        
     }

// suma final del juego

const puntajeFinal=()=>{
    var total= uno + dos  +tres +cuatro + cinco + escalera + full + pocker + generala;
    if((uno>0 || !tachar1) && dos>0 && tres >0 && cuatro >0 && cinco>0 && escalera>0 && full >0 && pocker>0 && generala >0){
        setFinal(total)
        alert("GAME OVER ")
    }
    
}














     return(
    <div className=" letras-tablero">
        {final>0 && <h1>Game Over Puntos: {final}</h1>}

        <div id="cajon1"  className="marg">
             <a  onClick={()=>setTachar1(false)}>{tachar1 ? <h3>TACHAR </h3>:<h3 className="btn_tachado">TACHADO</h3>}</a> 
             <h2 >UNO : {uno}</h2>
             
             <button onClick={btn_1}>CARGAR PUNTOS</button>
        </div>
        <div id="cajon1" className="marg">
        <a  onClick={()=>setTachar2(false)}>{tachar2 ? <h3>TACHAR </h3>:<h3 className="btn_tachado">TACHADO</h3>}</a> 
             <h2>DOS : {dos}</h2>
             <button onClick={btn_2}>CARGAR PUNTOS</button>
            
        </div>
        
        <div id="cajon1"  className="marg">
        <a  onClick={()=>setTachar3(false)}>{tachar3 ? <h3>TACHAR </h3>:<h3 className="btn_tachado">TACHADO</h3>}</a> 
             <h2>TRES : {tres}</h2>
             <button onClick={btn_3}>CARGAR PUNTOS</button>
             
        </div>
        <div id="cajon1"  className="marg">
        <a  onClick={()=>setTachar4(false)}>{tachar4 ? <h3>TACHAR </h3>:<h3 className="btn_tachado">TACHADO</h3>}</a> 
             <h2>CUATRO : {cuatro }</h2>
             <button onClick={btn_4}>CARGAR PUNTOS</button>
            
        </div>
        <div id="cajon1"  className="marg">
        <a  onClick={()=>setTachar5(false)}>{tachar5 ? <h3>TACHAR </h3>:<h3 className="btn_tachado">TACHADO</h3>}</a> 
             <h2>CINCO : {cinco}</h2>
             <button onClick={btn_5}>CARGAR PUNTOS</button>
             
        </div>
        <div id="cajon1"  className="marg">
        <a  onClick={()=>setTacharE(false)}>{tacharE ? <h3>TACHAR </h3>:<h3 className="btn_tachado">TACHADO</h3>}</a> 
             <h2>ESCALERA: {escalera}</h2>
             <button onClick={btn_escalera}>CARGAR PUNTOS</button>
        </div>
        <div id="cajon1"   className="marg">
        <a  onClick={()=>setTacharF(false)}>{tacharF ? <h3>TACHAR </h3>:<h3 className="btn_tachado">TACHADO</h3>}</a> 
             <h2>FULL : {full}</h2>
             <button onClick={btn_full}>CARGAR PUNTOS</button>
        </div>
        
        <div id="cajon1"  className="marg">
        <a  onClick={()=>setTacharP(false)}>{tacharP ? <h3>TACHAR </h3>:<h3 className="btn_tachado">TACHADO</h3>}</a> 
             <h2>POCKER: {pocker}</h2>
             <button onClick={btn_pocker}>CARGAR PUNTOS</button>
        </div>
        
        <div id="cajon1"  className="marg">
        <a  onClick={()=>setTacharG(false)}>{tacharG ? <h3>TACHAR </h3>:<h3 className="btn_tachado">TACHADO</h3>}</a> 
             <h2>GENERALA: {generala}</h2>
             <button onClick={btn_generala}>CARGAR PUNTOS</button>
        </div>
        {final>0 && <h1>Game Over Puntos: {final}</h1>}
    </div>
         
     );




 }
 export default Tablero;