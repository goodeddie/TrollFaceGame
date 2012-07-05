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
		
		var scoreLabel = new ScoreLabel(8, 8);
		game.rootScene.addEventListener('enterframe', function () {
			scoreLabel.score = game.score;
		});
		game.rootScene.addChild(scoreLabel);
			
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
			game.score += 100;
		});
		
		game.rootScene.addChild(troll);
	};

/*************************************************************************************************/
/* START THE GAME                                                                                */
/*************************************************************************************************/
	game.start();
};
