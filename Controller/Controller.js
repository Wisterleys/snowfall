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
             new Snow(elemnt,this.removeSnowDuration,Math.random() * (95 - 1) + 1,0)
     },interval)
    }
    
    wind(conf){
        if(conf.wind){
            let cont=0;
            let direction =conf.windDirection
            let loop = setInterval(() => {
                if(document.querySelectorAll(".objectW").length){
                document.querySelectorAll(".objectW").forEach(e=>{
                    if(e.offsetTop+e.offsetHeight<window.innerHeight){
                        e.style.left=(e.offsetLeft+direction)+conf.windSpeed+"px"
                    }
                    
                })
            }
            cont++;
            if(cont>1000){clearInterval(loop);cont=0;setTimeout(()=>{this.wind(this.windConf)},10000)}
            }, 10);
        }
    }
}