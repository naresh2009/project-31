class Drop{
    constructor(x,y){
        var Option={
            friction:0.01,
            restitution:0.1
        }
        this.rain=Bodies.circle(x,y,5,Option);
        //this.rain.color="blue";
        this.radius=5;
        World .add(world,this.rain)
    }
   
    updateY(){
        if(this.rain.position.y>height){
            Matter .Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)})
        }
    }
    display(){
        ellipseMode(CENTER)
        ellipse(this.rain.position.x,this.rain.position.y,this.radius,this.radius);

        
    }
    
}