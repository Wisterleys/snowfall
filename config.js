//CONFIGURAÇÃO
const CONFIG={
    choice:"neve",
    intervalCreate:5000,// Milliseconds
    downfallSpeed:1000,// Milliseconds
    windConf:{
        wind:true,
        windDirection:1// 1 = left || -1 = right
    }
}
//-----------------------------------------------------

new Controller(CONFIG)