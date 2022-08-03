export function tempoRestanteDia():number{

    let today = new Date();
    const hora = today.getHours()
    const minutos = today.getMinutes()
    const segundos = today.getSeconds()

    const conversaoParaSegundos = hora*3600 + minutos*60 + segundos;
    //Segundos Totais do dia - segundos do horário atual        
    const num = 24 *3600 - conversaoParaSegundos

    //retorna em segundos
    return num;
}

export function diferencaDias():number{
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const today = new Date();
    
    const dia = today.getDate();
    const mes = today.getMonth() + 1;

    const dataAtual = new Date(2022, mes, dia);
    const dataLancamento = new Date(2022, 10, 21);
    
    const diffDays = Math.round(Math.abs(Number(dataAtual) - Number(dataLancamento)) / oneDay);
    return diffDays - 1;
}

export function conversorRelogio(num:number){
    let horaString: string, minutosString: string, segundosString: string;
    
    let hora = (Math.floor(num/3600))
    if(hora<10){
        const conversorParaString = String(hora);
        horaString = "0"+ conversorParaString;
    }else{
        horaString = String(hora)
    }

    let minutos= Math.floor((num-(hora*3600))/60);
    if(minutos<10){
        const conversorParaString = String(minutos);
        minutosString = "0"+ conversorParaString;
    }else{
        minutosString = String(minutos)
    }
    
    let segundos = Math.floor((num-(hora*3600))%60);
    if(segundos<10){
        const conversorParaString = String(segundos);
        segundosString = "0"+ conversorParaString;
    }else{
        segundosString = String(segundos)
    }

    return [horaString,minutosString,segundosString];
}