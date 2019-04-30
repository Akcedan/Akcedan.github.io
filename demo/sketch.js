let sketch1 = function(p){ //p это просто имя переменной
    
 p.setup = function() {
  p.createCanvas(50, 50);
 }

 p.draw = function() {
  p.background(220);
  p.translate(25,25);
  p.ellipse(0,0,20,20);
  
 }
}

let sketch2 = function(p){ //p это просто имя переменной
    
 p.setup = function() {
  p.createCanvas(50, 50);
 }

 p.draw = function() {
  p.background(220);
  p.translate(25,25);
  p.rect(0,0,20,20);
 }
}


let sketch3 = function(p){ //p это просто имя переменной
    
 p.setup = function() {
  	p.createCanvas(200, 200);
	p.background(100);
	p.noLoop(); // отключаю перерисовку кадров
 }

 p.draw = function() {
 	p.rectMode(p.CENTER); // пусть рисует мои квадраты из центра
	p.translate(90, 90);
	p.squareFrectal(0, 0, 10);
 }


 p.squareFrectal = function(x, y, size) { //создаю функцию «Эллипс в эллипсе»
	if (size > 2) {
		p.rect(x, y, size, size); // квадрат размера size
		p.squareFrectal(x + size * 2, y, size / 2); // квадрат правее на два size и в два раза меньше
		p.squareFrectal(x, y + size * 2, size / 2); // квадрат ниже на два size и в два раза меньше
		p.squareFrectal(x - size * 2, y, size / 2); // квадрат левее на два size и в два раза меньше
		p.squareFrectal(x, y - size * 2, size / 2); // квадрат выше на два size и в два раза меньше
	}
}
}


new p5(sketch1, 'container1');
new p5(sketch2, 'container2');
new p5(sketch3, 'container3');
