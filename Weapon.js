class Weapon{
  constructor(x,y,w,h){
    this.body=Matter.Bodies.rectangle(x,y,w,h)
    Matter.World.add(world,this.body);
    this.w=w;
    this.h=h;
    this.body.isStatic=false;
    this.body.restitution=0.8;
    this.image=loadImage("hand_alpha.png")
  }
  display(){
    const pos=this.body.position;
    const angle=this.body.angle;
    push()
    translate(pos.x,pos.y);
    rotate(angle)
    imageMode(CENTER);
    image(this.image, 0, 0, 50, 50);
    pop()
  }
}