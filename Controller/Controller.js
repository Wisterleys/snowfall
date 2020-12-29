class Controller{
    constructor(conf){
        this.intervalCreate=conf.intervalCreate
        this.creationPause=conf.creationPause
        this.removeSnowDuration=conf.removeSnowDuration
        this.body =[window.innerWidth,window.innerHeight]
        this.downfallSpeed=10
        this.windStop=false
        this.windConf=conf.windConf
        this.toggle= conf.windConf.windDirection=="toggle"?true:false
        this.WindToggle=1
        //Methods
        this.animation(this.intervalCreate,this.removeSnowDuration,this.body,this.windConf);
        this.wind(this.windConf);
        this.restart()
    }
    restart(){
        window.addEventListener("focus",e=>{
            this.cleanAll()
        })
    }
    cleanAll(overload=false){
        if(document.querySelector(".objectW")){
            for(let l=document.querySelectorAll(".objectW").length-1;l>20;l--){
                document.querySelectorAll(".objectW")[l].remove()
            }

        }
        this.intervalCreate<1500&&overload?console.log("creation of snowflakes with overload. Please set to 1500 milliseconds"):0
           
    }
    createElement(){
        let elemnt=document.createElement("div")
        let att =document.createAttribute("class")
        att.value="objectW"
        elemnt.setAttributeNode(att)
        document.body.appendChild(elemnt)
        return elemnt;
    }
    animation(interval,removeSnowDuration=false,body=false,wind=false){
        setInterval(()=>{
             new Snow(this.createElement(),removeSnowDuration,body,Math.random() * (95 - 1) + 1,0)
             wind.wind&&!this.windStop?new Snow(this.createElement(),removeSnowDuration,body,this.windConf.windDirection==1?1:95,Math.random() * (95 - 1) + 1):0
             document.querySelectorAll(".objectW").length>30?this.cleanAll(true):0
     },interval)
    }
    directionWindToggle(WindToggle){
        return WindToggle<0?this.WindToggle=1:this.WindToggle=-1
    }
    wind(conf){
        if(conf.wind){
            let cont=0;
            
            let direction =this.windConf.windDirection=this.toggle?this.directionWindToggle(this.WindToggle):conf.windDirection
            console.log(this.windConf.windDirection,this.WindToggle)
            let loop = setInterval(() => {
                if(document.querySelectorAll(".objectW").length){
                document.querySelectorAll(".objectW").forEach(e=>{
                    if(e.offsetTop+e.offsetHeight<window.innerHeight){
                        e.style.left=direction<0?(e.offsetLeft+direction)-conf.windSpeed+"px":(e.offsetLeft+direction)+conf.windSpeed+"px"
                    }
                    
                })
            }
            cont++;
            if(cont>1000){
                clearInterval(loop);
                this.windStop=true;
                setTimeout(()=>{this.wind(this.windConf);this.windStop=false;cont=0;},10000)}
            }, 10);
        }
    }
}