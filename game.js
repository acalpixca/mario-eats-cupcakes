function Game(){
	//attributes
	this.height=arguments[0];
	if (arguments.length>1) {
		this.width=arguments[1];
	}
	else {
		this.width=arguments[0];
	}
	this.board=[]; // will be initialized afterwards within constructor with initializeBoard()
	this.position={
		x:Math.floor(Math.random()*this.width),
		y:Math.floor(Math.random()*this.height)
	};
	this.score=0;
	this.lives=10;
	//methods
	this.addFood=function(){
		//adds random amount of food bites to the board.
		var maxAmountOfFood=Math.floor(this.board.length*this.board[0].length/10);
		var countFood=Math.floor(Math.random()*maxAmountOfFood);
		var randomX=0;
		var randomY=0;
		for (var i=0;i<countFood;i++){
			randomX=Math.floor(Math.random()*this.width);
			randomY=Math.floor(Math.random()*this.height);
			this.board[randomY][randomX]=2;
		}
	};
	
	this.doWhenMoving=function(){
		//checks for trouble and food, updates scores. Then marks the spot on the board as visited
		if(this.inTrouble()) {
			this.lives--;
		}
		else if (this.gotFood()){
			this.score++;
		}
		this.markAsVisited();
	};
	
	this.goUp=function(){
		//checks for board boundaries, then updates position, and takes appropriate actions via doWhenMoving
		if(this.position.y>0) {
			this.position.y--;
			this.doWhenMoving();
		}
	};
	
	this.goDown=function(){
		//checks for board boundaries, then updates position, and takes appropriate actions via doWhenMoving
		if(this.position.y<this.height-1){
			this.position.y++;
			this.doWhenMoving();
		}
	};
	
	this.goLeft=function(){
		//checks for board boundaries, then updates position, and takes appropriate actions via doWhenMoving
		if(this.position.x>0){
			this.position.x--;
			this.doWhenMoving();
		}
	};
	
	this.goRight=function(){
		//checks for board boundaries, then updates position, and takes appropriate actions via doWhenMoving
		if(this.position.x<this.width-1){
			this.position.x++;
			this.doWhenMoving();
		}
	};
	
	this.currentPosition=function(){
		//returns an object that contains the x and y positions on the board
		var pos={
			x:this.position.x,
			y:this.position.y
		};
		return(pos);
	};
	
	this.inTrouble=function(){
		//checks whether we have bitten ourselves
		return(this.board[this.position.y][this.position.x]===1);
	};
	this.gotFood=function(){
		//checks whether we bit on a bit of food
		return(this.board[this.position.y][this.position.x]===2);
	};
	this.markAsVisited=function(){
		//marks the board spot as visited
		this.board[this.position.y][this.position.x]=1;
	};
	
	this.gameOn=function(){
		//tells us whether there game is on or we've finished.
		return(this.lives>0);
	};
	
	this.getScore=function(){
		//tells us how many points we got so far
		return(this.score);
	};
	
	this.getLives=function(){
		//tells us how many lives we have left
		return(this.lives);
	};

	this.initializeBoard=function(){
		//sets the board to all zeros
		var tabla=new Array(this.height);
		for (var i=0;i<this.height;i++){
			tabla[i]=new Array(this.width);
			for (var j=0;j<this.width;j++){
				tabla[i][j]=0;
			}
		}
		return(tabla);
	}

	this.board=this.initializeBoard(); // we set the board to all zeros
	this.addFood(); //we add cakes to the board
}	

// helper functions


function boardToConsole(game){
	var stri="";
	for (var i=0;i<game.height;i++){
		for (var j=0;j<game.width;j++){
			stri+=game.board[i][j]+" ";
		}
		stri+="\n";
	}
	console.log(stri);
}

function gameStatusToConsole(){
	console.log("score: "+ juego.score + ". lives: " +juego.lives);
}
//using the game for testing purposes
/* 
var juego=new Game(30,30);
juego.addFood();


console.log("initial position: ("+ juego.currentPosition().x + ", " +juego.currentPosition().y +")");
//here we simulate a game of 50 moves or until game over
var movi=0;
for (var i=0;i<50;i++){
	movi=Math.floor(Math.random()*4);
	switch(movi){
		case(0):
			juego.goUp();
			break;
		case(1):
			juego.goDown();
			break;
		case(2):
			juego.goLeft();
			break;
		case(3):
			juego.goRight();
			break;
		default:
			juego.goRight();
	}
	if (!juego.gameOn()){break;}
}

boardToConsole(); 
gameStatusToConsole();*/
