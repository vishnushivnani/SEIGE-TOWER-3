class Block2{
    constructor(x, y, width, height,color) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height,color, options);
        this.x = x
        this.y = y
        this.width = width;
        this.height = height;
        this.color = color
        this.Visiblity= 255
        //this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      } 
      score(){

        if(this.Visiblity<0 && this.Visiblity >-105){
          score++;
        }
      }

      display(){
        if(this.body.speed < 6){
        var angle = this.body.angle;
        push();
        fill("red")
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        rect( 0, 0, this.width, this.height,this.color);
        pop();}
        else{
      World.remove(world,this.body);
      push();
      fill("red")
      translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
      this.Visiblity = this.Visiblity-5
      tint(255,this.Visiblity);
      rect( this.x, this.y, this.width, this.height,this.color)
pop();
        }
      }}
