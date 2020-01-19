class Net{
    constructor(x,y){
        var options = {
            'isStatic':true,
            'density':10,
            'restitution':1.0
        }
        this.image = loadImage("net.png");
        this.body = Bodies.rectangle(x,y,100,300,options);
        World.add(world,this.body);
    }
    display(){
      imageMode(CENTER);
      image(this.image,this.body.position.x+20,this.body.position.y,100,300);
    }
}