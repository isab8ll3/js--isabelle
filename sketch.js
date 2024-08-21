function setup() {
    createCanvas(400, 400);
    background("white")
  }
  
  function draw() {
    stroke("#E91E5A");
    fill("#2196F3");
    
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }
  