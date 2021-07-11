import { useEffect, useState } from "react";
import dado from './dado.png';
import d from './d.png';
import '../App.css';
import Dado from "./Dado";
import { render } from "@testing-library/react";


 function Tablero(){
     const[uno, setUno]=useState(0);
     const[dos, setDos]=useState(0);
     const[tres,setTres]=useState(0);
     const[cuatro,setCuatro]=useState(0);
     const[cinco, setCinco]=useState(0);
     const[doble, setDoble]=useState(0);
     const[full, setFull]=useState(0);
     const[pocker,setPocker]=useState(0);
     const[escalera,setEscalera]=useState(0);
     const[generala, setGenerala]=useState(0);

     return(
    <div className="centrado letras-tablero">

        <div >
             <h3>UNO : {uno}</h3>
             <input type="text" />
        </div>
        <div>
             <h2>DOS : {dos}</h2>
             <input type="text" />
        </div>
        
        <div>
             <h2>TRES : {tres}</h2>
             <input type="text" />
        </div>
        <div>
             <h2>CUATRO : {cuatro}</h2>
             <input type="text" />
        </div>
        <div>
             <h2>CINCO : {cinco}</h2>
             <input type="text" />
        </div>
        <div>
             <h2>DOBLE: {doble}</h2>
             <input type="text" />
        </div>
        <div>
             <h2>FULL : {full}</h2>
             <input type="text" />
        </div>
        
        <div>
             <h2>POCKER: {pocker}</h2>
             <input type="text" />
        </div>
        <div>
             <h2>ESCALERA: {escalera}</h2>
             <input type="text" />
        </div>
        <div>
             <h2>GENERALA: {generala}</h2>
             <input type="text" />
        </div>

    </div>
         
     );




 }
 export default Tablero;