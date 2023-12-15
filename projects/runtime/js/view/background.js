var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    var timer;
    var count = 0
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invalid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;
        
        // container which will be returned
        var background;
        
        //////////////////////////////////////////////////////////////////
        // ANIMATION VARIABLES HERE //////////////////////////////////////
        //////////////////////////////////////////////////////////////////
        var backgroundImg = ["img/background4.png", "img/background3.png", "img/background2.png", "img/background1.png"];
        var backgrounds = [];
        var moonColor = ["rgb(245, 57, 5)", "rgb(240, 38, 143)", "rgb(133, 186, 255)", "rgb(209, 255, 227)"];
        var moons = [];
        var treeImg = ["img/tree4.png", "img/tree3.png", "img/tree2.png", "img/tree1.png",];
        var trees = [];
        var tree
        var buildings = [];
        // TODO (several):
      
      
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();

            // TODO 1:
            // this currently fills the background with an obnoxious yellow;
            // you should modify both the height and color to suit your game
            for (var count = 0; count < 4; count++){
                var backgroundFill = draw.bitmap(backgroundImg[count]);
                background.addChild(backgroundFill);
                backgrounds.push(backgroundFill);
            }
            // TODO 2: - Add a moon and starfield
            for (var i = 0; i <4; i++){
                var moon = draw.circle(125, "white", moonColor[i], 10);
                moon.x = 200;
                moon.y = 100;
                moon.scaleX = .5;
                moon.scaleY = .5;
                background.addChild(moon);
                moons.push(moon);
            }
            
            for(var circles = 0; circles < 200; circles++){
                var circle = draw.circle(2, "white", "white", 0);
                circle.x = canvasWidth * Math.random();
                circle.y = groundY * Math.random();
                background.addChild(circle);
            }


            var floor = draw.rect(canvasWidth, ground, "green");
            floor.x = 0;
            floor.y = 0;
            floor.scaleX = 1;
            floor.scaleY = 1;
            background.addChild(floor);
            
           
            // TODO 4: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            for (var i = 0; i < (canvasWidth/75); ++i) {
                var buildingHeight = 300 * Math.random() + 200;
                var building = draw.rect(75, buildingHeight, "rgba(0, 0, 0, .5)", "rgb(0, 0, 0)", 5);
                building.x = 75 * i;
                building.y = groundY - buildingHeight;
                background.addChild(building);
                buildings.push(building);
              }
            
            // TODO 3: Part 1 - Add a tree
            for (var i = 0; i < 4; i++){
                tree = draw.bitmap(treeImg[i]);
                tree.x = 300;
                tree.y = (canvasHeight/1.1) - 350;
                tree.scaleX = 0.35
                tree.scaleY = 0.35
                background.addChild(tree);
                trees.push(tree)
            }


            // Adding Timer
            timer = draw.circle(1, "black", "black", 1)
            timer.x = 0
            timer.y = groundY
            background.addChild(timer)
            
        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
           
            // TODO 3: Part 2 - Move the tree!
            for (var i = 0; i < trees.length; i++){
                var thing = trees[i]
                thing.x = thing.x - .75;
                if (thing.x < -475) {
                    thing.x = canvasWidth;
                }
            }

            
            
            timer.x -= 2;
            if (timer.x <= -2845){
                timer.x = 0;
                count += 1;
                background.removeChild(backgrounds[backgrounds.length -1]);
                backgrounds.pop();
                background.removeChild(moons[moons.length - 1]);
                moons.pop();
                background.removeChild(trees[trees.length -1]);
                trees.pop();
            }
            
            // TODO 4: Part 2 - Parallax
            for (var i = 0; i < buildings.length; i++) {
                var aBuilding = buildings[i];
              
                // code to do something with each element
                aBuilding.x = aBuilding.x - .5;
                if (aBuilding.x < -75){
                    aBuilding.x = canvasWidth
                }
              }

        } // end of update function - DO NOT DELETE
        
        
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
