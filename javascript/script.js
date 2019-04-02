// https://www.youtube.com/channel/UCdS3ojA8RL8t1r18Gj1cl6w
// PothOnProgramming is responsible for my jumping animation


let canvas = document.querySelector('canvas');
let cxt = canvas.getContext('2d');
canvas.width = 700;
canvas.height = 700;

let rectangle = {
	height: 50,
	jumping: true,
	width: 50,
	x: 100,
	x_velocity: 0,
	y: 0,
	y_velocity: 0
};

let controller = {
	left: false,
	right: false,
	up: false,
	keyListener: function(event){
		let key_state = (event.type === 'keydown')?true:false;
		// using the true and false on the keydown will stop my block from continuing on after i release the key. Making keyup false

		switch(event.keyCode){

			case 37:
				controller.left = key_state;
			break;
			case 38:
				controller.up = key_state;
			break;
			case 39:
				controller.right = key_state;
			break;
		}
	}

};

let loop = function(){
	if (controller.up && rectangle.jumping === false) {
		rectangle.y_velocity -= 40;
		rectangle.jumping = true;
	}
	if (controller.left) {
		rectangle.x_velocity -= 0.5;
	}
	if (controller.right) {
		rectangle.x_velocity += 0.5
	}

	rectangle.y_velocity += 1.5; //This simulates gravity meaning the rectangle will always fall.
	rectangle.x += rectangle.x_velocity;
	rectangle.y += rectangle.y_velocity;
	rectangle.x_velocity *= 0.9; //Both lines simulate friction. The reducde the x and y velocity to make it look like you are gradually slowing down. 
	rectangle.y_velocity *= 0.9;

	 if(rectangle.y > 500){
	 	rectangle.jumping = false;
	 	rectangle.y = 500;
	 	rectangle.y_velocity = 0;
	}

	if (rectangle.x < -200) {
		rectangle.x = 500;
	}
	else if (rectangle.x > 500) {
		rectangle.x = -200;
	}
// This above is so if the rectangle goes of one side of the screen then "teleport it back to the right side and vice versa"

	cxt.fillStyle = '#202020';
	cxt.fillRect(0,0,700,700);
	cxt.fillStyle = 'magenta';
	cxt.rect(rectangle.x, rectangle.y, rectangle.width, rectangle.height);
	cxt.fill();
	cxt.strokeStyle = 'purple';
	cxt.lineWidth = 4;
	cxt.beginPath();
	cxt.moveTo(500,500);
	cxt.lineTo(500, 500);
	cxt.stroke();

	window.requestAnimationFrame(loop);

};


window.addEventListener('keydown', controller.keyListener);
window.addEventListener('keyup', controller.keyListener);
window.requestAnimationFrame(loop);





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

// function Circle (x, y, dx, dy, radius) {
// 	this.x = x;
// 	this.y = y;
// 	this.dx = dx;
// 	this.dy = dy;
// 	this.radius = radius;

//   this.draw = function(){
//   	cxt.beginPath();
// 	cxt.arc(this.x, this.y, this.radius,0, Math.PI * 2, false);
// 	cxt.strokeStyle = 'magenta';
// 	cxt.stroke();
// 	cxt.fill();
//   }
//   this.update = function(){
//   	if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
// 		this.dx = -this.dx;
// 	}

// 	if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
// 	this.dy = -this.dy;
// }

// 	this.x += this.dx;
// 	this.y += this.dy;

// 	this.draw();
//   }
// }


// let circleArray = [];
// for (let i = 0; i < 100; i++) {
// 	let radius = 30;
// 	let x = Math.random() * (innerWidth - radius * 2) + radius;
// 	let y = Math.random() * (innerHeight- radius * 2) + radius;
// 	let dx = (Math.random()- 0.5) * 8;
// 	let dy = (Math.random() - 0.5) * 8;
// 	circleArray.push(new Circle(x, y, dx, dy, radius));

// }



// let animate = ()=>{
// 	requestAnimationFrame(animate);
// 	cxt.clearRect(0,0, innerWidth, innerHeight);

// 	for(let i = 0; i < circleArray.length; i++){
// 		circleArray[i].update();
// 	} 

// }
// animate();
