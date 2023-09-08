$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the loops below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can give you a better idea of where to create new platforms
     * Comment the lines out to remove the grid
     */

    // for (let i = 100; i < canvas.width; i += 100) {
    //   createPlatform(i, canvas.height, -1, -canvas.height);
    // }
    // for (let i = 100; i < canvas.height; i += 100) {
    //   createPlatform(canvas.width, i, -canvas.width, -1);
    // }

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)


    createPlatform(300, 610, 200, 150);
    createPlatform(450, 500, 550, 20);
    createPlatform(1200, 375, 200, 375);
    createPlatform(875, 250, 230, 20);
    createPlatform(540, 250, 230, 20);
    createPlatform(190, 250, 255, 20);
    createPlatform(400, 120, 1000, 20);
    createPlatform(425, 100, 200, 20);
    createPlatform(725, 100, 200, 20);
    createPlatform(1025, 100, 200, 20);
    createPlatform(55, 400, 120, 20)
    createPlatform(1350, 0, 300, 400)
    createPlatform(170, 150, 20, 475)
    createPlatform(0, 550, 100, 20)

    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)

    createCollectable('gem1', 350, 550, 0, 0);
    createCollectable('gem2', 700, 675, 0, 0);    
    createCollectable('gem3', 1250, 325, 0, 0);
    createCollectable('gem4', 1100, 50, 0, 0);
    createCollectable('gem5', 305, 200, 0, 0);


    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)

    createCannon('left', 50, 500, 10, 10);
    createCannon('bottom', 1100, 500, 10, 10)
    createCannon('top', 275, 450, 10, 10)


    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});
