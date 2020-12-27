class Controller{
    constructor(conf){
        this.intervalCreate=conf.intervalCreate
        this.controlToRemoveTimeSnow=conf.controlToRemoveTimeSnow
        this.downfallSpeed=10
        this.windConf=conf.windConf
        this.contAll=0
        //Methods
        this.animation(this.intervalCreate);
        this.wind(this.windConf);
        this.restart(this.intervalCreate)
    }
    restart(downfallSpeed){
        window.addEventListener("focus",e=>{
            document.querySelector(".objectW")?document.querySelectorAll(".objectW").forEach(e=>e.remove()):0
            this.animation(downfallSpeed);
            this.wind();
        })
    }
    animation(interval){
        let loop = setInterval(()=>{
            let elemnt=document.createElement("div")
            let att =document.createAttribute("class")
            att.value="objectW"
             elemnt.setAttributeNode(att)
             document.body.appendChild(elemnt)
             new Snow(elemnt,this.controlToRemoveTimeSnow)
             this.contAll>10?this.control(loop,this.intervalCreate):this.contAll++
     },interval)
    }
    control(loop,timeout){
        clearInterval(loop)
        this.contAll=0
        setTimeout(() => {
            this.animation(this.intervalCreate)
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