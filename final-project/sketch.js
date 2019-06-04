
/*
https://api.sheety.co/dbadd06b-03c6-4f35-9ff6-c1d47479da96
https://sheety.co/
*/


let valute = {};
let valuteDayly = {};


function preload() {
	valute = loadJSON("https://api.sheety.co/dd7cf51d-c509-4236-9681-f506fd1b7db9"); //https://docs.google.com/spreadsheets/d/1i9WdRVppV_4zKsIUIF6af_ktAihiD_2UUhNjKXYKpcM/edit#gid=0
    valuteDayly = loadJSON("https://www.cbr-xml-daily.ru/daily_json.js");
}

function setup() {
	createCanvas(700, 400); 
	frameRate(5); // 5 кадров в секунду
    valute[0]["2020"] = valuteDayly.Valute.USD.Value
}

function draw() {
    background(255); 
	translate(50, 300); 
  //рисуем сетку
 strokeWeight(0.2); // толщина линии 
   
  for (i = 0; i<19; i++) {
    line (0,-10*i,580,-10*i);
  }
  
  for (i = 0; i<59; i++) {
    line (10*i,0,10*i,-180);
  }
  
  strokeWeight(1); // толщина линии 
  line (0,-200,0,0);
  line (0,0,600,0);
  fill (0);
  triangle (0,-200,-2,-195,2,-195);
  triangle (600,0,595,2,595,-2);
  noFill ();
  strokeWeight(4); 
  textSize(50);
  
  
	let indexP = 0;
     beginShape(); // начинаю рисовать ломаную линию
	for (let index in valute [0]) {       
		vertex(indexP * 50, -valute[0][index]);
		indexP++;
	}
  endShape();
  fill("black");

}