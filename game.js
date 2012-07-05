/*

Troll Face Game

created by goodeddie
July 5, 2012

Special thanks to Ubiquitous Entertainment Inc. / ARC for making the enchant.js engine and their images

*/

enchant();

window.onload = function(){
/*************************************************************************************************/
/* INITIALIZE THE GAME                                                                           */
/*************************************************************************************************/
	var gameWidth = 320;
	var gameHeight = 320;
	var game = new Game(gameWidth, gameHeight);

	game.fps = 15;
	game.preload("images/troll.png");
	game.score = 0;
	
/*************************************************************************************************/
/* SET UP THE GAME ASSETS AND RULES                                                              */
/*************************************************************************************************/
	game.onload = function(){
		var width = 32;
		var height = 32;

/*************************************************************************************************/
/* SET UP THE USER DISPLAY                                                                       */
/*************************************************************************************************/
		game.time = 30;
		
		var scoreLabel = new ScoreLabel(8, gameHeight - 10 - 8);
		game.rootScene.addChild(scoreLabel);
		
		var timeLabel = new TimeLabel(8, 8, 'countdown');
		timeLabel.time = game.time;
		game.rootScene.addChild(timeLabel);
		
		game.rootScene.addEventListener('enterframe', function () {
			scoreLabel.score = game.score;
			if (timeLabel.time == 0){
				// End game
			}
		});
			
/*************************************************************************************************/
/* SET UP THE TROLL                                                                              */
/*************************************************************************************************/
		troll = new Sprite(width, height);
		troll.image = game.assets["images/troll.png"];

		troll.x = Math.floor((Math.random()*(gameWidth-width))+1);
		troll.y = Math.floor((Math.random()*(gameHeight-height))+1);

		troll.speed = 10;
		troll.frame = 5;

		troll.addEventListener("enterframe", function(){
			if (game.frame%troll.speed == 0) {
				troll.x = Math.floor((Math.random()*(gameWidth-width))+1);
				troll.y = Math.floor((Math.random()*(gameHeight-height))+1);
			}
		});

		troll.addEventListener("touchstart", function(){
			game.score += 10;
			if ((timeLabel.time + 2) > game.time) {
				timeLabel.time = game.time;
			}
			else {
				timeLabel.time += 2;
			}
		});
		
		game.rootScene.addChild(troll);
	};

/*************************************************************************************************/
/* START THE GAME                                                                                */
/*************************************************************************************************/
	game.start();
};
