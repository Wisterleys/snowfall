//CONFIGURAÇÃO
const CONFIG={
    choice:"neve",
    intervalCreate:900,// Milliseconds
    creationPause:10000,
    removeSnowDuration:2000,// Milliseconds
    windConf:{
        wind:true,
        windDirection:1// 1 = left || -1 = right
    }
}
//-----------------------------------------------------

new Controller(CONFIG)