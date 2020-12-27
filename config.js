//CONFIGURAÇÃO
const CONFIG={
    choice:"neve",//Only snow has been mounted so far
    intervalCreate:1500,// Milliseconds
    creationPause:10000,// Milliseconds
    removeSnowDuration:8000,// Milliseconds
    windConf:{
        wind:true,
        windDirection:-1,// 1 = left || -1 = right
        windSpeed:3
    }
}
//-----------------------------------------------------
new Controller(CONFIG)