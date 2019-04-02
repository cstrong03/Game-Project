let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


let cxt = canvas.getContext('2d');

// cxt.fillStyle = 'rgba(255, 0, 0, 0.5)';
// cxt.fillRect(100, 100, 100, 100);
// cxt.fillStyle = 'rgba(0, 0, 255, 0.5)';
// cxt.fillRect(300, 100, 100, 100);
// cxt.fillStyle = 'rgba(0, 255, 0, 0.5)';
// cxt.fillRect(500, 100, 100, 100);
// // console.log(canvas);

// // Drawing lines
// // the use x and y values starting from the top left

// cxt.beginPath();
// cxt.moveTo(50, 300);
// cxt.lineTo(300, 100);
// cxt.lineTo(400, 100);
// cxt.strokeStyle = '#fa34a3';
// cxt.stroke();



function Circle (x, y, dx, dy, radius) {
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;

  this.draw = function(){
  	cxt.beginPath();
	cxt.arc(this.x, this.y, this.radius,0, Math.PI * 2, false);
	cxt.strokeStyle = 'magenta';
	cxt.stroke();
	cxt.fill();
  }
  this.update = function(){
  	if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
		this.dx = -this.dx;
	}

	if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
	this.dy = -this.dy;
}

	this.x += this.dx;
	this.y += this.dy;

	this.draw();
  }
}


let circleArray = [];

for(let i = 0; i < 100; i++){
	let radius = 30;
	let x = Math.random() * (innerWidth - radius * 2) + radius;
	let y = Math.random() * (innerHeight- radius * 2) + radius;
	let dx = (Math.random()- 0.5) * 8;
	let dy = (Math.random() - 0.5) * 8;
	circleArray.push(new Circle(x, y, dx, dy, radius));

}



let animate = ()=>{
	requestAnimationFrame(animate);
	cxt.clearRect(0,0, innerWidth, innerHeight);

	for(let i = 0; i < circleArray.length; i++){
		circleArray[i].update();
	} 

}
animate();