import { useEffect, useState } from "react";
import "./Counter.css"
import { tempoRestanteDia } from "../../commons/functions";
import { diferencaDias } from "../../commons/functions";
import { associateCounter } from "../../commons/functions"

export default function Counter(){

    //Horário Atual utilizado no primeiro carregamento
    let indice01hora = associateCounter()[0];
    let indice02hora = associateCounter()[1];
    let indice03minutos = associateCounter()[2];
    let indice04minutos = associateCounter()[3];
    let indice05segundos = associateCounter()[4];
    let indice06segundos = associateCounter()[5];

    const [dias,setDias] = useState(diferencaDias());

    //Diferença de dia atual utilizado no primeiro carregamento
    let digitoUm = String(dias).slice(0,1);
    let digitoDois = String(dias).slice(1);


    if(diferencaDias()>=10){
        digitoUm = String(dias).slice(0,1);
        digitoDois = String(dias).slice(1);
    }else{
        digitoUm = '0'
        digitoDois = String(diferencaDias());
    }
    

    const [srcImg08Segundos,setSrcImg8] = useState(`images/segundos8/counterNumber${indice06segundos}.png`);
    const [srcImg07Segundos,setSrcImg7] = useState(`images/segundos7/counterNumber${indice05segundos}.png`);
    const [srcImg06Minutos,setSrcImg6] = useState(`images/minutos6/counterNumber${indice04minutos}.png`);
    const [srcImg05Minutos,setSrcImg5] = useState(`images/minutos5/counterNumber${indice03minutos}.png`);
    const [srcImg04Horas,setSrcImg4] = useState(`images/hora4/counterNumber${indice02hora}.png`);
    const [srcImg03Horas,setSrcImg3] = useState(`images/hora3/counterNumber${indice01hora}.png`);
    const [srcImg02Dia,setSrcImg2] = useState(`images/dia2/counterNumber${digitoDois}.png`);
    const [srcImg01Dia,setSrcImg1] = useState(`images/dia1/counterNumber${digitoUm}.png`);

    useEffect(()=>{
        setInterval(()=>{
            if(tempoRestanteDia() <= 0){
                
                setDias(diferencaDias());
                
     

                setSrcImg1(`images/dia1/counterNumber${digitoDois}`);
                setSrcImg2(`images/dia2/counterNumber${digitoUm}`);
            }
        },1000);
    });

    useEffect(()=>{
        setInterval(()=>{
            indice06segundos = associateCounter()[5];
            indice05segundos = associateCounter()[4];
            indice04minutos = associateCounter()[3];
            indice03minutos = associateCounter()[2];
            indice02hora = associateCounter()[1];
            indice01hora = associateCounter()[0];

            setSrcImg3(`images/hora3/counterNumber${indice01hora}.png`);
            setSrcImg4(`images/hora4/counterNumber${indice02hora}.png`);
            setSrcImg5(`images/minutos5/counterNumber${indice03minutos}.png`);
            setSrcImg6(`images/minutos6/counterNumber${indice04minutos}.png`);
            setSrcImg7(`images/segundos7/counterNumber${indice05segundos}.png`); 
            setSrcImg8(`images/segundos8/counterNumber${indice06segundos}.png`);       
        },1000);
    },[]);

    return(
        <div>
            <div className="contador">
                <div className="container">
                    <img src={srcImg01Dia} className="daysCounter" id="day1"/>
                    <img src={srcImg02Dia} className="daysCounter" id="day2"/>
                    <img src= "images/daysUpscale.png" alt="Days" className="daysPng" />
                </div>
                <div className="containerCountdown">
                    <img src={srcImg03Horas} className="imgCounter" id="img01" alt=""></img>
                    <img src={srcImg04Horas} className="imgCounter" id="img02" alt=""></img>
                    <img src={srcImg05Minutos} className="imgCounter" id="img03" alt=""></img>
                    <img src={srcImg06Minutos} className="imgCounter" id="img04" alt=""></img>
                    <img src={srcImg07Segundos} className="imgCounter" id="img05"></img>
                    <img src={srcImg08Segundos} className="imgCounter" id="img06"></img>
                </div>
                <img src="images/toUpscale.png" alt="To" className="to"/>
            </div>
        </div>
    );
}   