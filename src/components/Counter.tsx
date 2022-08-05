import { useEffect, useState } from "react";
import "./Counter.css"
import { tempoRestanteDia } from "../commons/functions";
import { diferencaDias } from "../commons/functions";
import { conversorRelogio } from "../commons/functions";
import { associateCounter } from "../commons/functions"

let counter = 0


export default function Counter(){

    const horaInicial = conversorRelogio(tempoRestanteDia())[0];
    const minutosInicial = conversorRelogio(tempoRestanteDia())[1];
    const segundosInicial= conversorRelogio(tempoRestanteDia())[2];

    const [dias,setDias] = useState(diferencaDias());
    const [tempoFimDia,setTempoFimDia] = useState(`${horaInicial}${minutosInicial}${segundosInicial}`);


    const [srcImg,setSrcImg] = useState(`images/segundos/counterNumber${0}.png`);


    let indice01hora = associateCounter()[0];
    let indice02hora = associateCounter()[1];
    let indice01minutos = associateCounter()[2];
    let indice02minutos = associateCounter()[3];
    let indice01segundos = associateCounter()[4];
    let indice02segundos = associateCounter()[5];

    console.log(`${indice01hora}${indice02hora} ${indice01minutos}${indice02minutos}  ${indice01segundos}${indice02segundos} `)
    

    useEffect(()=>{
        setInterval(()=>{
            if(tempoRestanteDia() > 0){
                const horaAtual = conversorRelogio(tempoRestanteDia())[0];
                const minutosAtual = conversorRelogio(tempoRestanteDia())[1];
                const segundosAtual= conversorRelogio(tempoRestanteDia())[2];
                setTempoFimDia(`${horaAtual}${minutosAtual}${segundosAtual}`);
            }else{
                setDias(diferencaDias()-1)
            }
        },1000);
    })

    useEffect(()=>{
        setInterval(()=>{
            setSrcImg(`images/segundos/counterNumber${indice02segundos}.png`)        
        },1000);
    },[indice02segundos])


    

    

    const digitoUm = String(dias).slice(0,1);
    const digitoDois = String(dias).slice(1);

    return(
        <div>
            <div className="contador">
                <div className="container">
                    <img src="images/1.png"/>
                    <img className="placeholderDays" src="images/placeholderDays.png"/>
                    <h1 className="daysCounter" id="digitOne">{digitoUm}</h1>
                    <h1 className="daysCounter" id="digitTwo">{digitoDois}</h1>
                    <img src= "images/daysUpscale.png" alt="Days" className="daysPng" />
                </div>
                <div className="counterEndDay">
                    <img src="images/placeholderTime.png" className="placeholderTimer"/>
                    <h2 className="digitsCounter" id="numberOne">{tempoFimDia.slice(0,1)}</h2>
                    <h2 className="digitsCounter" id="numberTwo">{tempoFimDia.slice(1,2)}</h2>
                    <h2 className="digitsCounter" id="numberThree">{tempoFimDia.slice(2,3)}</h2>
                    <h2 className="digitsCounter" id="numberFour">{tempoFimDia.slice(3,4)}</h2>
                    <h2 className="digitsCounter" id="numberFive">{tempoFimDia.slice(4,5)}</h2>
                    <h2 className="digitsCounter" id="numberSix">{tempoFimDia.slice(5)}</h2>
                </div>
                <img src={srcImg} id="imgCounter"></img>
                <img src="images/toUpscale.png" alt="To" className="to"/>
            </div>
        </div>
    )
}   