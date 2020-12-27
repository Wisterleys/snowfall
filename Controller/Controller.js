class Controller{
    constructor(conf){
        this.intervalCreate=conf.intervalCreate
        this.creationPause=conf.creationPause
        this.removeSnowDuration=conf.removeSnowDuration
        this.downfallSpeed=10
        this.windConf=conf.windConf
        //Methods
        this.animation(this.intervalCreate);
        this.wind(this.windConf);
        this.restart()
    }
    restart(){
        window.addEventListener("focus",e=>{
            document.querySelector(".objectW")?document.querySelectorAll(".objectW").forEach(e=>e.remove()):0
        })
    }
    animation(interval){
        setInterval(()=>{
            let elemnt=document.createElement("div")
            let att =document.createAttribute("class")
            att.value="objectW"
             elemnt.setAttributeNode(att)
             document.body.appendChild(elemnt)
             new Snow(elemnt,this.removeSnowDuration)
     },interval)
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