class Snow{
    /*
    offsetHeight: 0
    offsetLeft: 8
    offsetParent: body
    offsetTop: 8
    offsetWidth:
    */
    constructor(element,removeSnowDuration=20000){
        this.element=element;
        this.removeSnowDuration=removeSnowDuration
        this.color="rgb(255,255,255)";
        this.interval=10
        this.body = [window.innerWidth,window.innerHeight];
        this.receives()
        this.loop(this.interval,this.removeSnowDuration)
    }
    receives(){
        this.element.style=`position:absolute;top:${0};left:${Math.random() * (95 - 1) + 1}%;background:${this.color};width:8px;height:8px;border-radius:360px;`
        //this.element.left=this.element.offsetLeft;
    }
    removeEl(){
        this.element.remove()
    }
    loop(interval,removeSnowDuration){
        let cont=this.element.offsetTop;
       let loop = setInterval(() => {
            this.element.style.top=cont+"px"
            this.element.offsetLeft+this.element.offsetWidth+1>=this.body[0]?this.removeEl():0
            this.element.offsetLeft<1?this.removeEl():0
            if(this.element.offsetTop+this.element.offsetHeight+1>this.body[1]){
                clearInterval(loop)
                this.element.style.transition=`height ${removeSnowDuration/1000}s, top ${removeSnowDuration/1000}s`
                //cont=0;
                this.element.style.width=this.element.offsetHeight+this.element.offsetHeight+"px"
                this.element.style.borderRadius="50px 50px 0px 0px"
                this.element.style.height="0px"
                this.element.style.top=this.body[1]+"px"
                
                setTimeout(() => {
                    this.removeEl() 
                },removeSnowDuration);
            }
            cont++;
        }, (interval));
    }
}