class Box{

    constructor(x,y) {

      var options = {
        restitution:0.8,
        friction:1.0,
        density:1.0
          
      }
      this.body = Bodies.rectangle(x,y,60,60,options);
      this.width = 60;
      this.height = 60;
      this.visibility = 255;
      World.add(world, this.body);

    }
    display(){

      var pos =this.body.position;
      if(this.body.speed < 3){
        push();
        rectMode(CENTER);
        fill("blue");
        rect(pos.x, pos.y, this.width, this.height);
        pop();
      }
      else{
        push();
        World.remove(world, this.body);
        this.visibility = this.visibility - 5;
        tint(255, this.visibility);
        pop();
      }

    }

    score(){
      if(this.visibility < 0 && this.visibility >-105){
        score++;
      }
    }

  }