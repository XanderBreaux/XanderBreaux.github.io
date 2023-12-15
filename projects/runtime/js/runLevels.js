

var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;
  var imgEnemy, imgMarker;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(false);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
  
    function createSawBlade(x, y){
      var hitZoneSize = 25;
      var damageFromObstacle = 10;
      var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
      sawBladeHitZone.x = x;
      sawBladeHitZone.y = y;
      game.addGameItem(sawBladeHitZone);
      var obstacleImage = draw.bitmap("img/sawblade.png");
      obstacleImage.x = -25
      obstacleImage.y = -25
      sawBladeHitZone.addChild(obstacleImage);
    }
    

    function createEnemy(x, y) {
      // all code from TODO 11 and 12
      var enemy = game.createGameItem("enemy", 25);
      var redSquare
      if (currentLevel === 0){
        redSquare = draw.bitmap("img/enemy1.png")
      } else if (currentLevel === 1){
        redSquare = draw.bitmap("img/enemy2.png")
      } else if (currentLevel === 2){
        redSquare = draw.bitmap("img/enemy3.png")
      } else if (currentLevel === 3){
        redSquare = draw.bitmap("img/enemy4.png")
      }
      redSquare.x = -25;
      redSquare.y = -25;
      enemy.addChild(redSquare);
      enemy.x = x;
      enemy.y = y;
      enemy.velocityX = -2
      game.addGameItem(enemy);
      enemy.onPlayerCollision = function () {
        game.changeIntegrity(-25)
      };
      enemy.onProjectileCollision = function () {
        game.increaseScore(100);
        enemy.fadeOut();
      }
      

    }
    function createReward(x, y) {
      // all code from TODO 11 and 12
      var reward = game.createGameItem("rewards", 25);
      var redSquare;
      if (currentLevel === 0){
        redSquare = draw.bitmap("img/item1.png");
      } else if (currentLevel === 1){
        redSquare = draw.bitmap("img/item2.png");
      } else if (currentLevel === 2){
        redSquare = draw.bitmap("img/item3.png");
      } else if (currentLevel === 3){
        redSquare = draw.bitmap("img/item4.png");
      }
      redSquare.x = -15;
      redSquare.y = -20;
      redSquare.scaleX = 1.75
      redSquare.scaleY = 1.75
      reward.addChild(redSquare);
      reward.x = x;
      reward.y = y;
      reward.velocityX = -2
      game.addGameItem(reward);
      reward.onPlayerCollision = function () {
        game.changeIntegrity(50)
        reward.fadeOut();
      };
      reward.onProjectileCollision = function () {
        game.changeIntegrity(50)
        reward.fadeOut();
      }
      

    }
    function createMarker(x, y) {
      // all code from TODO 11 and 12
      var marker = game.createGameItem("marker", 1);
      var redSquare 
      if (currentLevel === 0){
        redSquare = draw.bitmap("img/marker1.webp")
      } else if (currentLevel === 1){
        redSquare = draw.bitmap("img/marker2.png")
      } else if (currentLevel === 2){
        redSquare = draw.bitmap("img/marker3.png")
      } else if (currentLevel === 3){
        redSquare = draw.bitmap("img/marker4.png")

      }
      redSquare.x = -120;
      redSquare.y = -350;
      redSquare.scaleX = 1.2
      redSquare.scaleY = 1.2
      marker.addChild(redSquare);
      marker.x = x;
      marker.y = y;
      marker.velocityX = -2
      game.addGameItem(marker);
      marker.onPlayerCollision = function () {
        startLevel()
        marker.fadeOut()
      }
      marker.onProjectileCollision = function () {
        marker.fadeOut()
        startLevel()
      }
    }
    function levelNumber(){
      return currentLevel;
    }
    
    
    function startLevel() {
      // TODO 13 goes below here\
      var level = levelData[currentLevel];
      var levelObjects = levelData[currentLevel]["gameItems"];
      for (var i = 0; i < levelObjects.length; i++){
        if (levelObjects[i].type === "obstacle"){
          createSawBlade(levelObjects[i].x, levelObjects[i].y);

        } else if (levelObjects[i].type === "reward"){
          createReward(levelObjects[i].x, levelObjects[i].y);

        } else if (levelObjects[i].type === "enemy"){
          createEnemy(levelObjects[i].x, levelObjects[i].y);

        } else if (levelObjects[i].type === "marker"){
          createMarker(levelObjects[i].x, levelObjects[i].y);

        }
      }
      

      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
