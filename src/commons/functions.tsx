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

export function associateCounter(){
    const horaInicial = conversorRelogio(tempoRestanteDia())[0];
    const minutosInicial = conversorRelogio(tempoRestanteDia())[1];
    const segundosInicial= conversorRelogio(tempoRestanteDia())[2];

    const digitoUmHora = Number(horaInicial.slice(0,1));
    const digitoDoisHora = Number(horaInicial.slice(1));
    
    const digitoUmMinutos = Number(minutosInicial.slice(0,1));
    const digitoDoisMinutos = Number(minutosInicial.slice(1));
    
    const digitoUmSegundos = Number(segundosInicial.slice(0,1));
    const digitoDoisSegundos = Number(segundosInicial.slice(1));
    
    return [digitoUmHora,digitoDoisHora,digitoUmMinutos,digitoDoisMinutos,digitoUmSegundos,digitoDoisSegundos];
}

export function numberOfNews(){
    let x = window.innerWidth;
    let numberOfNews: number;

    if(x>=1680){
        numberOfNews = 3;
    }else if(x<1680 && x>1380){
        numberOfNews = 2;
    }else if(x<1380 && x>800){
        numberOfNews = 1;
    }else{
        numberOfNews = 3;
    }
    return numberOfNews;
}