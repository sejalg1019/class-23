class Box{ //creating the class
    constructor(x,y,width,height){ //creating the constructor and arguments
        var options = { //properties
            restitution: 0.8
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world1,this.body); //adding into world1
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle; //storing the angle
        push(); //set
        translate(pos.x, pos.y); //shifting the box by pos.x, pos.y
        rotate(angle); //rotating the box 
        rectMode(CENTER);
        fill("purple");
        rect(0,0,this.width,this.height); //drawing the rectangle
        pop(); //reset
    }
}