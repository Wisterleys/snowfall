//CONFIGURAÇÃO
const CONFIG={
    choice:"neve",
    intervalCreate:1000,// Milliseconds
    controlToRemoveTimeSnow:2000,// Milliseconds
    windConf:{
        wind:true,
        windDirection:1// 1 = left || -1 = right
    }
}
//-----------------------------------------------------

new Controller(CONFIG)