
function setup() {
  createCanvas(windowWidth,windowHeight)
  angleMode(DEGREES)
  textFont('helveticaneue')
  
  
}



function draw() {
  background(0)
  noStroke()
 
  //cerchio();
  cerchio2()
  
  ore();
  minuti();
  secondi();
  
  triangolo();
  //linea1();
  //linea2();
  //linea3();
  
  oratesto();
  minutitesto();
 
  
}






function cerchio(){
fill(255)
stroke(255)
strokeWeight(2)

ellipse(width/2,height/2,10,10)

}

function cerchio2(){
if(width>height){
  var r = height/3
} else {  var r = width/3
 } 
noFill()
stroke(255,255,255,90)
strokeWeight(2)

ellipse(width/2,height/2,r*1.4,r*1.4)

}








function ore(){
  if(width>height){
  var r = height/3
} else {  var r = width/3
 }
  push()
  fill(255,255,255,200)
  translate(width/2,height/2)
  rotate(hour()*30)
  ellipse(0,-r,r/4,r/4)
  pop()
  
}

function minuti(){
  if(width>height){
  var r = height/3
} else {  var r = width/3
 }
  push()
  fill(255,255,255,200)
  translate(width/2,height/2)
  rotate(minute()*6)
  ellipse(0,-r,r/5.3,r/5.3)
  pop()
  
}

function secondi(){
  if(width>height){
  var r = height/3
} else {  var r = width/3
 }
  push()
  fill(255,255,255,200)
  translate(width/2,height/2)
  rotate(second()*6)
  ellipse(0,-r,r/7,r/7)
  pop()
  
}








function triangolo(){
 if(width>height){
  var r = height/3
} else {  var r = width/3
 }
  push()
  stroke(255)
  noFill()
  translate(width/2,height/2)
  rotate(-90)
  triangle(cos(second()*6)*r,sin(second()*6)*r, cos(minute()*6)*r,sin(minute()*6)*r,cos(hour()*30)*r,sin(hour()*30)*r  )
  pop()
  
}

function linea1(){
  if(width>height){
  var r = height/3
} else {  var r = width/3
 }
  push()
  stroke(255)
  strokeWeight(1)

  translate(width/2,height/2)
  rotate(-90)
  line(cos(second()*6)*r,sin(second()*6)*r,0,0)
  pop()
}

function linea2(){
  if(width>height){
  var r = height/3
} else {  var r = width/3
 }
  push()
  stroke(255)  
  strokeWeight(1)

  translate(width/2,height/2)
  rotate(-90)
  line(cos(minute()*6)*r,sin(minute()*6)*r,0,0)
  pop()
}

function linea3(){
  if(width>height){
  var r = height/3
} else {  var r = width/3
 }
  push()
  stroke(255)
  strokeWeight(1)

  translate(width/2,height/2)
  rotate(-90)
  line(cos(hour()*30)*r,sin(hour()*30)*r,0,0)
  pop()
}










function oratesto(){
  if(width>height){
  var r = height/3
} else {  var r = width/3
 }
  fill(255)
  textSize(r/1.2);
  // text(string, x, y)
  textAlign(CENTER);
    textStyle(NORMAL)

  var h = hour();
  if (h < 10) {
   text('0'+h ,width/2,height/2+r/10);
    }
    else {
        text(h,width/2,height/2+r/10);}
}



function minutitesto(){
  if(width>height){
  var r = height/3
} else {  var r = width/3
 }
  fill(255)
  textSize(r/2.3);
  // text(string, x, y)
  textAlign(CENTER);
  textStyle(NORMAL)
  var m = minute();
  if (m < 10) {
   text('0'+m ,width/2,height/2+r/2);
    }
    else {
        text(m,width/2,height/2+r/2);}
}










function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
