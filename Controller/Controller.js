class Controller{
    constructor(conf){
        this.intervalCreate=conf.intervalCreate
        this.creationPause=conf.creationPause
        this.removeSnowDuration=conf.removeSnowDuration
        this.body =[window.innerWidth,window.innerHeight]
        this.downfallSpeed=10
        this.windStop=false
        this.windConf=conf.windConf
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
    cleanAll(){document.querySelector(".objectW")?document.querySelectorAll(".objectW").forEach(e=>e.remove()):0}
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
             wind.wind&&!this.windStop?new Snow(this.createElement(),removeSnowDuration,body,wind.windDirection==1?1:95,Math.random() * (95 - 1) + 1):0
             document.querySelectorAll(".objectW").length>50?this.cleanAll():0
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