var mouseX,mouseY;
var r; //radius
var a=0; //angle
var x;//triangle coordinate x
var y;// triangle coordinate y
var slider;
var n;//n amount of sides
var mx,my;//mouseX,mouseY translate coordinates
var l; //lines for grid
var C5; //challenge 5
var px; //fix
var py; //fix


function setup () {

	createCanvas(700,700);

	rectMode(CENTER);

push();
	slider = createSlider(0, 10, 0, .01); //largest radius 10
	slider.position(550, 25);
 pop();

 push();
  C5=(sin(a))/(cos(a)); //fix this
  textSize(100);
  text(C5,width/4,height/4);
  pop();

}

function draw () {

background(240);

drawGrid(); //grid
push();
r = slider.value(); //slider
textSize(25)
text(r,520,20);//raidus length
textSize(10);
pop();


if (a<=360) {

a+=0.01; //limit 360

}
else {
a=0;

}
push();
textSize(30)
text(int(a*57.2958%360),50,50);//degrees translated from radians
pop();

translate( mx-width/2, my-height/2); //translate map function
noFill();
strokeWeight(2.5)
ellipse(width/2,height/2, r*50, r*50);
strokeWeight(1);

keyPressed();//regular polygon
drawRight(); //animated right triangle


translate( -mx-width/2, -my-height/2)



/*
//console.log(py);
//equation for graph:
//y=25x+350
px= 2*(mx/50-width/100);
py= -2*(my/50-width/100);

text('hi',width/2,height/2);

*/ //FIXXX



}



function drawGrid() { //grid function
	var param=25; //distance between increments
	fill(0);
	for (var l=-width; l < width; l+=param) {
		line(l, -height, l, height);
		
		line(-width, l, width, l);
		
		
	}

  for (var h=-width-50; h < width+50; h+=125) {
    
    
    text(h/25, h-10+width/2, height/2+13); //hash position
	
	  text(-h/25, width/2+5, h-2+height/2);
  
    strokeWeight(2)
    line(h-25,height/2+10,h-25,height/2-10); //lines on grid
    line(width/2-10,h-25,width/2+10,h-25);
    strokeWeight(1)
  }


push();
	strokeWeight(3)
	line (width/2,0,width/2,height);
	line (0,height/2,width,height/2);
pop();


}

function drawRight() {


push(); //triangle
translate(width/2, height/2);
x = r*25*cos(a) ;
y = r*25*sin(a) ;
//strokeWeight(2.5);

fill('blue');
triangle(0, 0, x, y,x,0);
//triangle(0,0,-x,-y,-x,0);

//dots
fill('red')
strokeWeight(1)
ellipse(0,0,r*1.1,r*1.1);//center


ellipse(x,y,r*1.1,r*1.1);//position on circle


ellipse(x,0,r*1.1,r*1.1);//x intercept

//ellipse(-x,-y,r*1.1,r*1.1);
//ellipse(-x,0,r*1.1,r*1.1);


pop();

}

function keyPressed() { //regular polygons
	if (key =='3'){
		n=3;
	}
	else if (key =='2'){
		n=2;
	}
	else if (key =='4'){
		n=4;
	}
	else if (key =='5'){
		n=5;
	}
	else if (key =='6'){
		n=6;
	}
	else if (key =='7'){
		n=7;
	}
	else if (key =='8'){
		n=8;
	}
	else if (key =='9'){
		n=9;
	}
	else if (key =='0'){
		n=10;
	}

push();
  translate(width/2,height/2);
	fill('green')
	tint(255,128)
	rotate(a);
	polygon(0,0,r,n); //function
pop();

}


function polygon(x, y, radius, npoints) {
	var angle = TWO_PI / npoints; // radians / amount of points
	beginShape();
	for (var a = 0; a <= TWO_PI; a += angle) {
		var sx = x + cos(a) * radius*25; //verticies
		var sy = y + sin(a) * radius*25;
		vertex(sx, sy);
  	
  }
  endShape(CLOSE); //open works as well endShape(OPEN) maybe because reuglar polygons has to?
}



function mouseClicked() {

mx=mouseX;//mouse position translated up top
my=mouseY;
}
