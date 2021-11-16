
function setup() {
  createCanvas(400,400);
}

function draw() 
{
  background(30);

  if(keyIsDown(RIGHT_ARROW)){
    background('#45a36a');
  }

  if(keyIsDown(LEFT_ARROW)){
    background('#6a5ba3');
  }

  if(keyIsDown(UP_ARROW)){
    background('#b05ba9');
  }

  if(keyIsDown(DOWN_ARROW)){
    background('#55a394');
  }

}




