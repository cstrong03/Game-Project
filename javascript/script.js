// https://www.youtube.com/channel/UCdS3ojA8RL8t1r18Gj1cl6w
// https://www.youtube.com/watch?v=yq2au9EfeRQ&list=PLpPnRKq7eNW3We9VdCfx9fprhqXHwTPXL&index=4&t=614s
// PothOnProgramming is responsible for my jumping animation


let canvas = document.querySelector('canvas');
let cxt = canvas.getContext('2d');
canvas.width = innerWidth;
canvas.height = innerHeight;


let box = {
	height: 50,
	jumping: true,
	width: 50,
	x: 0,
	x_velocity: 0,
	y: 0,
	y_velocity: 0
};

 class Obstacle{ 
 	constructor(x, x_velocity, y){
 	this.x = x;
	this.x_velocity = x_velocity;
	this.y = 700;
}
  draw() {
  	cxt.beginPath();
	cxt.rect(this.x, this.y, 50, 100);
	cxt.strokeStyle = 'magenta';
	cxt.stroke();
	cxt.fill();
  }
  update(){
  	this.draw();
  	if (this.x >= innerWidth) {
		this.x_velocity = 250;
	}
}
collision(){
	for(let i = 0; i < obstacleArray.length; i++){
		if(box.y >= obstacleArray[i].y && box.y <= obstacleArray[i].y+100){
		if(box.x+50 >= obstacleArray[i].x && box.x+50 <= obstacleArray[i].x+50){
		box.x = obstacleArray[i].x-50;
			// youLose();
		}
	}
		if((box.x||box.x+50) >= obstacleArray[i].x && (box.x||box.x+50) <= obstacleArray[i].x+50){
		if(box.y+50 >= obstacleArray[i].y){
			box.y = obstacleArray[i].y-50;
			// youLose();
		}
	}
}
	
}
}



let obstacleArray = [];
for(let i = 0; i < 3; i++){
	obstacleArray.push(new Obstacle(200, 0,))
	obstacleArray.push(new Obstacle(400, 0,))
	obstacleArray.push(new Obstacle(600, 0,))
}


let controller = {
	right: false,
	up: false,
	keyListener: function(event){
		let key_state = (event.type === 'keydown')?true:false;
		// using the true and false on the keydown will stop my block from continuing on after i release the key. Making keyup false

		switch(event.keyCode){

			case 32:
				controller.up = key_state;
			break;
			case 39:
				controller.right = key_state;
			break;
		}
	}

};

let loop = function(){
	if (controller.up && box.jumping === false) {
		box.y_velocity -= 50;
		box.jumping = true;
	}
	if (controller.right) {
		box.x_velocity += 0.5
	}

	box.y_velocity += 1.5; //This simulates gravity meaning the rectangle will always fall.
	box.x += box.x_velocity;
	box.y += box.y_velocity;
	box.x_velocity *= 0.9; //Both lines simulate friction. The reducde the x and y velocity to make it look like you are gradually slowing down. 
	box.y_velocity *= 0.9;
	

	 if(box.y > 750){
	 	box.jumping = false;
	 	box.y = 750;
	 	box.y_velocity = 0;
	}


	cxt.clearRect(0,0, innerWidth, innerHeight);
	for(let i = 0; i < obstacleArray.length; i++){
		obstacleArray[i].update();
		obstacleArray[i].collision();

	 }


// 	if(box.y >= this.y && box.y <= this.y+100){
// 	if(box.x+50>=this.x && box.x+50 <= this.x+50){
// 	box.x = this.x-50;
// 		// youLose();
// 	}
// }
// 	if((box.x||box.x+50) >= this.x && (box.x||box.x+50) <= this.x+50){
// 	if(box.y+50>=this.y){
// 		box.y = this.y-50;
// 		// youLose();
// 	}
// }


	// obstacle.y_velocity += 1.5; //This simulates gravity meaning the rectangle will always fall.
	// obstacle.x += obstacle.x_velocity;
	// obstacle.y += obstacle.y_velocity;

	//  if(obstacle.y > 700){
	//  	obstacle.y = 700;
	//  	obstacle.y_velocity = 0;
	// }
// This above is so if the rectangle goes of one side of the screen then "teleport it back to the right side and vice versa"

	
	cxt.fillRect(0,0, 50, 50);
	cxt.fillStyle = 'purple';
	cxt.rect(box.x, box.y, box.width, box.height);
	cxt.fill();
	cxt.strokeStyle = 'purple';



	window.requestAnimationFrame(loop);

};

// function youLose() {
// 	document.querySelector().addEventListener('', (){
// 		document.querySelector('#bg-modal').style.display = 'flex';
// 	})

// 	document.querySelector('#close').addEventListener('click', (){
// 		document.querySelector('#bg-modal').style.display = "none";
// 	})
// }


window.addEventListener('keydown', controller.keyListener);
window.addEventListener('keyup', controller.keyListener);
window.requestAnimationFrame(loop);