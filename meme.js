var smile;
var jokersLine;
var jokerLaugh;
var joker;
var sounds =[];

var pics = []; //create the arrays as global empty arrays.
//var saying =[];//then when I fill them in setup they will
//have useable stuff in ANY function.  Problem solved.

function preload(){
  joker = loadImage("joker.jpg");//load my images as variables
  //so I can use them and put them in an array
  smile = loadImage("jokerp.jpg");
  jokersLine = loadSound("serious.mp3");
  jokerLaugh = loadSound("laugh.mp3");

}
function setup() {
  createCanvas(600, 600);
  noLoop();
   pics = [joker, smile];

 sounds = [jokersLine, jokerLaugh];
 joker = map(mouseX, width, height);


}

function draw() {//put here in draw so it starts.  mousePressed will
//   //change it everytime I click.

  image(random(pics), 0,0, width, height);


}

function mousePressed(){

 random(sounds).play();
  image(random(pics), 0,0, width, height);


}
