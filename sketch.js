//var leftEyeX = 500;

function setup(){
  createCanvas(800, 800);
  smooth();
  frameRate(20);
  //background(100);
}



function draw(){
  background(100);
  
  for(let x = 30; x < width; x += 80){
    for(let y = 30; y < height; y += 80){
      
      //drawEye(100, 400);
      
        var skin = color('	#CD853F');
  noStroke();
  
  let x1 = map(mouseX, 0, width, 100, 75);
  let x2 = map(mouseX, 0, width, -17, 17, true);
  let x3 = map(mouseX, 0, width, 5, -17);
  
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
  arc(300, 420+x3, 80, 80, PI+.9, -.9);
  arc(500, 420, 80, 80, PI+.9, -.9);
  
    // eyes
  fill('white');
  ellipse(300, 420, 50, 50);
  ellipse(500, 420, 50, 50);
  fill('#111');
  ellipse(500+x2, 420, 15, 15);
  //ellipse(500, 420, 15, 15);
  
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
      
   drawEye(300, 420);
  
  console.log("mouseX="+mouseX+", mouseY="+mouseY);
        

    }
    
    
    
  }
  
        
  

        
 
 
 
   

    }
//Blink function
function drawEye(x, y){


  
  
  fill(255);
  ellipse(x, y, 30, 30);

  if(random(10) < 9){
    fill(0);
   
    ellipse(x + 1, y +1, 7, 7);
  }
  else {
    
    stroke(0);
    line(x-1, y, x + 1, y);    
  }
}




  

  
