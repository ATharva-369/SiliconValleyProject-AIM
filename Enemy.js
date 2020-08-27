class Enemy{
  constructor(x,y,w,h){
    this.body=Matter.Bodies.rectangle(x,y,w,h)
    Matter.World.add(world,this.body);
    this.w=w;
    this.h=h;
    this.body.isStatic=false;
    this.visibility = 255;
    this.image= loadImage("mikulka-smile-grin.png")
   
  }
  display(){
    if(this.body.speed<10){
    const pos=this.body.position;
    const angle=this.body.angle;
    push()
    translate(pos.x,pos.y);
    rotate(angle)
    imageMode(CENTER);
    image(this.image, 0, 0, 50, 50);
    pop()
  }
  else{
    push();
    World.remove(world,this.body)
    this.visibility-=5;
    tint(255,this.visibility);
    image(this.image,this.body.position.x,this.body.position.y,50,50);
    pop();
  }
}
score(){
  if(this.visibility<=0&&this.visibility>=-995){
    score++;
  } 
 }
//  soundPlay(){
//    this.sound.play();
//  }

}