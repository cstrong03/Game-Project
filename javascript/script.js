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

 function Obstacle (x, x_velocity, y){
 	this.x = x;
	this.x_velocity = x_velocity;
	this.y = y;

  this.draw = ()=> {
  	cxt.beginPath();
	cxt.rect(this.x, this.y, 50, 100);
	cxt.strokeStyle = 'magenta';
	cxt.stroke();
	cxt.fill();
  }
  this.update = ()=> {
  	this.draw();
  	if (this.x >= innerWidth) {
		this.dx = 250;
	}
	this.x += this.dx;

	
  }
}
let  obstacleArray= [];
for (let i = 0; i < 10; i++) {
	let x = Math.random() * (innerWidth - 50);
	let y = 700;
	let dx = (Math.random()- 0.5) * 8;
	obstacleArray.push(new Obstacle(x, y, dx));

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
		box.y_velocity -= 40;
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

// 	if(box.y >= obstacle.y && box.y <= obstacle.y+100){
// 	if(box.x+50>=obstacle.x && box.x+50 <= obstacle.x+50){
// 	box.x = obstacle.x-50;
// 		// youLose();
// 	}
// }
// 	if((box.x||box.x+50) >= obstacle.x && (box.x||box.x+50) <= obstacle.x+50){
// 	if(box.y+50>=obstacle.y){
// 		box.y = obstacle.y-50;
// 		// youLose();
// 	}
// }

	// cxt.clearRect(0,0, innerWidth, innerHeight);

	for(let i = 0; i < obstacleArray.length; i++){
		console.log(obstacleArray[i].update());

	 } 

	// obstacle.y_velocity += 1.5; //This simulates gravity meaning the rectangle will always fall.
	// obstacle.x += obstacle.x_velocity;
	// obstacle.y += obstacle.y_velocity;

	//  if(obstacle.y > 700){
	//  	obstacle.y = 700;
	//  	obstacle.y_velocity = 0;
	// }
// This above is so if the rectangle goes of one side of the screen then "teleport it back to the right side and vice versa"

	
	cxt.fillStyle = '#202020';
	cxt.fillRect(0,0,innerWidth,innerHeight);
	cxt.fillStyle = 'magenta';
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