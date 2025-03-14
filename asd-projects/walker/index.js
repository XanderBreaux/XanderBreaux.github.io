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
  var walker = {
    positionX: 0,
    positionY: 0,
    speedX: 0,
    speedY: 0,
  }

  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp);
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem();
    wallCollisions();
    redrawGameItem();


  }
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    if (event.which === KEY.LEFT) {
      console.log("Left Pressed");
      walker.speedX = -5;
    } else if ( event.which === KEY.UP) {
      console.log("Up Pressed");
      walker.speedY = -5;
    } else if ( event.which === KEY.RIGHT) {
      console.log("Right Pressed");
      walker.speedX = 5;
    } else if ( event.which === KEY.DOWN) {
      console.log("Down Pressed");
      walker.speedY = 5;
    }
  }

  function handleKeyUp(event) {
    if (event.which === KEY.LEFT || event.which === KEY.RIGHT) {
      walker.speedX = 0;
    }
    if ( event.which === KEY.UP || event.which === KEY.DOWN) {
      walker.speedY = 0;
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
  function repositionGameItem() {
    walker.positionX += walker.speedX;
    walker.positionY += walker.speedY;
  }
  
  /// Redraws the game object
  function redrawGameItem() {
    $("#walker").css("left", walker.positionX)
                .css("top", walker.positionY)
  }

  /// Handle wall collisions
  function wallCollisions() {
    if (walker.positionX + 50 > $("#board").width()) {
      walker.positionX = $("#board").width() - 50;
    } else if (walker.positionX < 0) {
      walker.positionX = 0;
    }
    if (walker.positionY + 50 > $("#board").height()) {
      walker.positionY = $("#board").height() - 50;
    } else if (walker.positionY < 0) {
      walker.positionY = 0;
    }
  }
}
