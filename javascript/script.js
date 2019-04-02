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

let x = 200;
let y = 200;
let dx = 4;
let dy = 4;
let radius = 30;

let animate = ()=>{
	requestAnimationFrame(animate);
	cxt.clearRect(0,0, innerHeight, innerWidth); 

	cxt.beginPath();
	cxt.arc(x, y, radius,0, Math.PI * 2, false);
	cxt.strokeStyle = 'purple';
	cxt.stroke();

	if (x + radius > innerWidth || x - radius < 0) {
		dx = -dx;
	}
	x += dx;
}

animate();