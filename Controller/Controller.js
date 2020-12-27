class Controller{
    constructor(conf={choice:"neve",intervalCreate:2000,downfallSpeed:1000}){
        this.intervalCreate=conf.intervalCreate
        this.intervalCreate=conf.intervalCreate
        this.downfallSpeed=conf.downfallSpeed
        this.contAll=0;
        //Methods
        this.animation(this.downfallSpeed);
        this.wind();
    }
    animation(interval){
        let loop = setInterval(()=>{
            let elemnt=document.createElement("div")
            let att =document.createAttribute("class")
            att.value="objectW"
             elemnt.setAttributeNode(att)
             document.body.appendChild(elemnt)
             new Snow(elemnt)
             this.contAll>2?this.control(loop,this.intervalCreate):this.contAll++
     },interval)
    }
    control(loop,timeout){
        clearInterval(loop)
        contAll=0
        setTimeout(() => {
            this.animation(this.downfallSpeed)
        }, timeout);
    }
    wind(windDirection="left",yes=false){
        if(yes){
            let cont=0;
            let direction =windDirection=="left"?1:-1
            let loop = setInterval(() => {
                if(document.querySelectorAll(".objectW").length){
                document.querySelectorAll(".objectW").forEach(e=>{
                    if(e.offsetTop+e.offsetHeight<window.innerHeight){
                        e.style.left=(e.offsetLeft+direction)+"px"
                    }
                    
                })
            }
            cont++;
            if(cont>1000){clearInterval(loop);cont=0;setTimeout(()=>{wind(windDirection,yes)},10000)}
            }, 10);
        }
    }
}