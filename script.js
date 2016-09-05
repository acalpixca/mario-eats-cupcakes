$(document).ready(function() {
	var headHeight=20;
	var headWidth=20;
	var gameBoardHeight=0;
	var gameBoardWidth=0;
	var juego;
	var $comida;
	var $visited;

	var docHeight=$(document).height();
	var docWidth=$(document).width();
	
	gameBoardHeight=Math.floor((docHeight/headHeight))-1;
	gameBoardWidth=Math.floor((docWidth/headWidth))-1;
	
	juego=new Game(gameBoardHeight,gameBoardWidth);

	//paint one cupcake per piece of food on the game board	
	for (i=0;i<juego.board.length;i++){
		for (j=0;j<juego.board[0].length;j++){
			if (juego.board[i][j]===2){
				$comida=$('<div class="food"><img src="img/cupcake20x20.jpg"/></div>');
				$comida.css({'left':j*headWidth,'top':i*headHeight,'width':headWidth,'height':headHeight});
				$comida.appendTo('body');
			}
		}
	}
	//juego.boardToConsole(); // function that displays the entire board on the log console. For debugging purposes.

	// Declare a business logic events and handlers so that we can process GAME OVER!	
	$(document).on( "gameOverDeathEvent", function( event ) {
		$gameOver=$('div.gameOverDeath');
		$gameOver.css({'width':docWidth-20,'height':docHeight-20});
		$gameOver.css("visibility","visible");
	});
	$(document).on( "gameOverWinEvent", function( event ) {
		$gameOver=$('div.gameOverWin');
		$gameOver.css({'width':docWidth-20,'height':docHeight-20});
		$gameOver.css("visibility","visible");
	});
	
	// end GAME OVER events and handlers definition

 	//paint the head of the snake... better known as mario
	$('div#mario').css({'left':juego.currentPosition().x*headWidth,'top':juego.currentPosition().y*headHeight});
	//paint the scoreboard and display its initial value
	$('div#scoreBoard').css({'left':docWidth-200,'top':5});
	$('div#scoreBoard').html("Score: "+ juego.getScore() + " Lives: "+ juego.getLives() + " Food left: " + juego.getFood());
	
	//now we process key event: up, down, left, right
	$(document).keydown(function(key) {
		//we create a div that will represent the spot we just visited before the keystroke. These divs
		//will form the body of the snake
		$visited=$('<div class="visited"></div>');
		$visited.css({'left':(juego.currentPosition().x) *headWidth,'top':juego.currentPosition().y*headHeight,'width':headWidth,'height':headHeight});
		
        	switch(parseInt(key.which,10)) {
			// Left arrow key pressed
			case 37:
				if(juego.currentPosition().x>0){
					juego.goLeft();
					$('div#mario').css({'left':juego.currentPosition().x*headWidth,'top':juego.currentPosition().y*headHeight});
				}
				break;
			// Up Arrow Pressed
			case 38:
				if (juego.currentPosition().y>0){
					juego.goUp();
					$('div#mario').css({'left':juego.currentPosition().x*headWidth,'top':juego.currentPosition().y*headHeight});
				}
				break;
			// Right Arrow Pressed
			case 39:				
				if (juego.currentPosition().x<docWidth-1){
					juego.goRight();
					$('div#mario').css({'left':juego.currentPosition().x*headWidth,'top':juego.currentPosition().y*headHeight});
				}
				break;
			// Down Arrow Pressed
			case 40:
				if(juego.currentPosition().y<docHeight-1){
					juego.goDown();
					$('div#mario').css({'left':juego.currentPosition().x*headWidth,'top':juego.currentPosition().y*headHeight});
				}
				break;
		}
		//we paint the previously visited spot after the keystroke.
		$visited.appendTo('body');
		
		//we display updated score and lives
		$('div#scoreBoard').html("Score: "+ juego.getScore() + " Lives: "+ juego.getLives() + " Food left: " + juego.getFood());
		
		// trigger event of GAME OVER!!
		if(juego.getLives()<0) {
			$(document).trigger( "gameOverDeathEvent", [ "Custom", "Event" ] );
		}
		if(juego.getFood()<=0) {
			$(document).trigger( "gameOverWinEvent", [ "Custom", "Event" ] );
		}
		// end GAME OVER
	});
});
