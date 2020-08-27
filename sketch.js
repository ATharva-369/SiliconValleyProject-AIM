var player;
const {
  Engine, World, Bodies, Mouse, MouseConstraint, Constraint
} = Matter
// var mConstraint;
var slingshot;
var timer = 0;
var score = 0;
var gameState = "Form"
var reaction = 0;
var name = "";
var enemy_sound

function preload() {
  enemy_sound = loadSound("Farty-McSty.mp3");
}
function setup() {
  createCanvas(windowWidth - 50, windowHeight - 50);
  engine = Engine.create();
  world = engine.world;
  player = new Weapon(width / 2, height / 2, 20, 20);
  ground = new Ground(0, height - 40, width, 20)
  enemy1 = new Enemy(100, height / 2, 30, 30);
  ground1 = new Ground(100, height / 2 + 40, 50, 10);
  enemy2 = new Enemy(100, height / 2 - 200, 30, 30);
  ground2 = new Ground(100, height / 2 - 160, 30, 10)
  enemy3 = new Enemy(100, height - 100, 30, 30)
  ground3 = new Ground(100, height - 60, 30, 10);
  enemy4 = new Enemy(width - 40, height - 100, 30, 30)
  ground4 = new Ground(width - 40, height - 60, 30, 10)
  enemy5 = new Enemy(width - 40, height / 2, 30, 30)
  ground5 = new Ground(width - 40, height / 2 + 40, 30, 10)
  enemy6 = new Enemy(width - 40, height / 2 - 200, 30, 30)
  ground6 = new Ground(width - 40, height / 2 - 160, 30, 10)
  grounD1 = new Ground(width + 100, height, 20, height)
  form = new Form();
  // const mouse = Mouse.create(canvas.elt);
  // const options = {
  //   mouse: mouse
  // }
  // mConstraint = MouseConstraint.create(engine, options)
  // World.add(world, mConstraint);
  slingshot1 = new Slingshot(width / 2, height / 2, player.body)
  enemy_sound.play();
 enemy_sound.loop();


}

function draw() {
  if (gameState !== "Form" && gameState !== "End") {
    background(253, 236, 208);
    push()
    fill("blue")
    textSize(23);
    text("Time you have spent:" + timer, width / 2, height / 2 - 400);
    text("SCORE:" + score, width / 2 + 200, height / 2 - 200)
    pop();
    Matter.Engine.update(engine)
    ground.display();
    player.display();
    enemy2.display();
    enemy2.score();
    ground1.display();
    ground2.display();
    enemy1.display();
    enemy1.score();
    enemy3.display();
    enemy3.score();
    ground3.display();
    enemy4.display();
    enemy4.score();
    ground4.display();
    enemy5.display();
    enemy5.score();
    ground5.display();
    enemy6.display();
    enemy6.score();
    ground6.display();
    grounD1.display();
    slingshot1.display();
    console.log(enemy1.body.speed)
    time();
    if (score === 1200) {
      gameState = "End"
    }

  }
  else if (gameState === "Form") {
    form.display();
  }
  else if(gameState="End"){
    reaction = round(score / timer);
    push();
    fill("Purple")
    textSize(25)
    text("You: " + name + " finished the game!!", width / 2, height / 2);
    text("Your total reaction points:" + reaction, width / 2, height / 2 + 100)
    pop();
    enemy_sound.stop();

  }
  // score1()
}
function keyPressed() {
  if (key === " " && gameState !== "Form") {
    World.remove(world, player.body)
    player = new Weapon(width / 2, height / 2, 20, 20);
    slingshot1.attach(player.body)
    gameState = "onHold";
  }
}
function mouseDragged() {
  if (gameState === "onHold") {
    Matter.Body.setPosition(player.body, { x: mouseX, y: mouseY });
  }
}
function mouseReleased() {
  if (mouseDragged && gameState !== "Form") {
    slingshot1.shoot();
    gameState = "launched"
  }
  // birdSound.play();
}

function time() {
  if (frameCount % 60 == 0 && gameState !== "Form" && gameState !== "End") {
    timer++;
  }
}

