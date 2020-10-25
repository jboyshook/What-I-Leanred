var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var name = "Pratham Pawan";
var variable = "123";

var a = 3;
var b = 3;

var array1 = ["rishab", "yash", "ritvik", "pratham"]

var bool = true;

var form, player, game;

var cars, car1, car2, car3, car4;

var track, car1_img, car2_img, car3_img, car4_img;

class Dog 
{
  constructor(age, name, color) {
    this.age = age;
    this.name = name;
    this.color = color;
  }

  display() {
    rect(20, 20, 76, 24);
    console.log(self.age);
    console.log(self.name);
    console.log(self.color);
  }
}

var myDog = new Dog(12, "mike", "red");
console.log(myDog.name);
console.log(myDog.color);
console.log(myDog.age);

function preload()
{
  track = loadImage("../images/track.jpg");
  car1_img = loadImage("../images/car1.png");
  car2_img = loadImage("../images/car2.png");
  car3_img = loadImage("../images/car3.png");
  car4_img = loadImage("../images/car4.png");
  ground = loadImage("../images/ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  if (a % 2 === 0) {
    console.log("A IS EVEN");
  }

  else {
    console.log("A IS NOT ODD");
  }

  console.log(name.length);
  //console.log(name.toUpperCase());
  console.log(parseInt(variable));
  console.log(a + b);
  console.log(a * b);
  console.log(a / b);
  console.log(a - b);
  console.log(2 === 3);
  console.log(array1.length);
  array1.push("REHAN");
  array1.pop();

  switch (a) {
    case 1: console.log("MONDAY");
    break;

    case 2: console.log("TUESDAY");
    break;

    case 3: console.log("WEDNESDAY");
    break;

    default: console.log("NOT REACHABLE");
    break;
  }

  for (var i = 0; i < 10; i++) {
    console.log(i);
  }

  for (var i in array1) {
    console.log(array1[i]);
  }
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
  getArea();
}

function getArea() {
  var sqrSide = 2;
  var area = sqrSide * sqrSide;

  console.log(area);
} 