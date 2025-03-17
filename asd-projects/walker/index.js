/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  var KEY = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    W: 87,
    A: 65,
    S: 83,
    D: 68
  }
  
  // Game Item Objects
  var walker1 = {
    positionX: 0,
    positionY: 0,
    speedX: 0,
    speedY: 0,
    ID: "#walker1",
    isIt: true
  }
  var walker2 = {
    positionX: $("#board").width() - 50,
    positionY: 0,
    speedX: 0,
    speedY: 0,
    ID: "#walker2",
    isIt: false
  }

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp);
  $(".gameWalker").on('click', changeColor);
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    /// For Walker1
    repositionGameItem(walker1);
    wallCollisions(walker1);
    redrawGameItem(walker1);
    isSeeker(walker1);

    /// For Walker2
    repositionGameItem(walker2);
    wallCollisions(walker2);
    redrawGameItem(walker2);
    isSeeker(walker2);

    handleCollision();

  }
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    if (event.which === KEY.LEFT) {
      console.log("Left Pressed");
      if (walker1.isIt === false) {
        walker1.speedX = -5;
      } else {
        walker1.speedX = -3;
      }
    } else if ( event.which === KEY.UP) {
      console.log("Up Pressed");
      if (walker1.isIt === false) {
        walker1.speedY = -5;
      } else {
        walker1.speedY = -3;
      }
    } else if ( event.which === KEY.RIGHT) {
      console.log("Right Pressed");
      if (walker1.isIt === false) {
        walker1.speedX = 5;
      } else {
        walker1.speedX = 3;
      }
    } else if ( event.which === KEY.DOWN) {
      console.log("Down Pressed");
      if (walker1.isIt === false) {
        walker1.speedY = 5;
      } else {
        walker1.speedY = 3;
      }
    }
    if (event.which === KEY.A) {
      console.log("Left Pressed");
      if (walker2.isIt === false) {
        walker2.speedX = -5;
      } else {
        walker2.speedX = -3;
      }
    } else if ( event.which === KEY.W) {
      console.log("Up Pressed");
      if (walker2.isIt === false) {
        walker2.speedY = -5;
      } else {
        walker2.speedY = -3;
      }
    } else if ( event.which === KEY.D) {
      console.log("Right Pressed");
      if (walker2.isIt === false) {
        walker2.speedX = 5;
      } else {
        walker2.speedX = 3;
      }
    } else if ( event.which === KEY.S) {
      console.log("Down Pressed");
      if (walker2.isIt === false) {
        walker2.speedY = 5;
      } else {
        walker2.speedY = 3;
      }
  
    }
  }

  function handleKeyUp(event) {
    if (event.which === KEY.LEFT || event.which === KEY.RIGHT) {
      walker1.speedX = 0;
    }
    if ( event.which === KEY.UP || event.which === KEY.DOWN) {
      walker1.speedY = 0;
    }

    if (event.which === KEY.A || event.which === KEY.D) {
      walker2.speedX = 0;
    }
    if ( event.which === KEY.W || event.which === KEY.S) {
      walker2.speedY = 0;
    }
  }
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
  /// Changes game items position
  function repositionGameItem(gameItem) {
    gameItem.positionX += gameItem.speedX;
    gameItem.positionY += gameItem.speedY;
  }
  
  /// Redraws the game objects
  function redrawGameItem(gameItem) {
    $(gameItem.ID).css("left", gameItem.positionX)
                .css("top", gameItem.positionY)
  }

  /// Handle wall collisions
  function wallCollisions(gameItem) {
    if (gameItem.positionX + 50 > $("#board").width()) {
      gameItem.positionX = $("#board").width() - 50;
    } else if (gameItem.positionX < 0) {
      gameItem.positionX = 0;
    }
    if (gameItem.positionY + 50 > $("#board").height()) {
      gameItem.positionY = $("#board").height() - 50;
    } else if (gameItem.positionY < 0) {
      gameItem.positionY = 0;
    }
  }

  /// handle game item collisions
  function handleCollision() {
    if (walker1.positionX > walker2.positionX && walker1.positionX < walker2.positionX + 50) {
      if (walker1.positionY > walker2.positionY && walker1.positionY < walker2.positionY + 50) {
        if (walker1.isIt) {
          walker1.isIt = false;
          walker2.isIt = true;
        } else {
          walker1.isIt = true;
          walker2.isIt = false;
        }
        walker1.positionX = 0;
        walker1.positionY = 0;
        walker2.positionX = $("#board").width() - 50;
        walker2.positionY = 0;
      }
    }
  }

  /// Gives game item a random color
  function changeColor() {
    var randomColor = "#000000".replace(/0/g, function () {
      return (~~(Math.random() * 16)).toString(16);
    });
    $(event.currentTarget).css("background-color", randomColor);
  }

  /// Gives the seeker a lower border radius
  function isSeeker(gameItem) {
    if (gameItem.isIt === true) {
      $(gameItem.ID).css("border-radius", 15);
    } else {
      $(gameItem.ID).css("border-radius", 50);
    }
  }
}
