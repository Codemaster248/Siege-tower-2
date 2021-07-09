class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.Visbility =255
    this.image=loadImage("block.png")
      World.add(world, this.body);
    }
    display(){
      if(this.body.speed < 1){     
       var nothing
      }
      else{
       // World.remove(world, this.body)
        push()
        this.Visbility=this.Visbility-5
        tint(255,this.Visbility)
        pop()
      }
      //console.log(this.body.speed)
     var pos= this.body.position;
     rectMode(CENTER);
     rect(pos.x,pos.y,this.width, this.height);
    }
}