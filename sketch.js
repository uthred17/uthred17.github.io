function setup() {
  createCanvas(800, 800);

  
}

function draw(){
  background(199, 199, 199);
  noStroke();
  
   var skin = color('	#CD853F');
  noStroke();
  ellipseMode(CENTER);
  
 
  
    // face
  noStroke();
  fill(skin);
  ellipse(width/2, height/2, 500, 600);
  
  //Hair
   fill(61, 2, 2);
ellipse(400, 181, 343, 173);
  
   // eye brow
  stroke('#333');
  strokeWeight(5);
  noFill();
  arc(300, 420, 80, 80, PI+.9, -.9);
  arc(500, 420, 80, 80, PI+.9, -.9);
  
    // eyes
  fill('white');
  ellipse(300, 420, 50, 50);
  ellipse(500, 420, 50, 50);
  fill('#111');
  ellipse(300, 420, 15, 15);
  ellipse(500, 420, 15, 15);
  
  // nose
  noStroke();
  fill('#fdbc85');
  beginShape();
  vertex(400, 425);
  vertex(400, 525);
  vertex(430, 500);
  endShape(CLOSE);
  
    // lips
  strokeWeight(20);
  stroke('#f28865');
  arc(400, 550, 150, 100, .9, PI-.9);
  noStroke();
  
    fill(skin);
  ellipse(15, 41, 5, 10);
  ellipse(650, 410, 50, 100);
  ellipse(150, 410, 50, 100);
  
  println("mouseX="+mouseX+", mouseY="+mouseY);
  

}
