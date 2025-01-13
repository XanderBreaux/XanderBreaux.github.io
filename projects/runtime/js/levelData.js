var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
      {
        name: "Level 1",
        number: 1,
        speed: 0,
        gameItems: [
          { type: "obstacle", x: 400, y: groundY },
          { type: "obstacle", x: 600, y: groundY },
          { type: "obstacle", x: 900, y: groundY },
          { type: "obstacle", x: 1400, y: groundY },
          { type: "obstacle", x: 1700, y: groundY },
          { type: "obstacle", x: 1900, y: groundY },
          { type: "obstacle", x: 2100, y: groundY },
          { type: "obstacle", x: 2500, y: groundY },
          { type: "reward", x: 700, y: groundY - 60},
          { type: "enemy", x: 1000, y: groundY - 60},
          { type: "enemy", x: 1200, y: groundY - 110},
          { type: "enemy", x: 1800, y: groundY - 60},
          { type: "enemy", x: 2000, y: groundY - 60},
          { type: "enemy", x: 2200, y: groundY - 60},
          { type: "enemy", x: 2400, y: groundY - 60},

          { type: "marker", x: 3000, y: groundY -20 },
        ],
       
      },
      {
        name: "Level 2",
        number: 2,
        speed: 0,
        gameItems: [
          { type: "obstacle", x: 400, y: groundY },
          { type: "obstacle", x: 600, y: groundY },
          { type: "obstacle", x: 900, y: groundY },
          { type: "obstacle", x: 1100, y: groundY },
          { type: "obstacle", x: 1600, y: groundY },
          { type: "obstacle", x: 1900, y: groundY },
          { type: "obstacle", x: 2100, y: groundY },
          { type: "obstacle", x: 2300, y: groundY },

          { type: "enemy", x: 1000, y: groundY - 60},
          { type: "reward", x: 700, y: groundY - 60},
          { type: "enemy", x: 300, y: groundY - 110},
          { type: "enemy", x: 750, y: groundY - 60},
          { type: "enemy", x: 1500, y: groundY - 60},
          { type: "enemy", x: 1600, y: groundY - 60},
          { type: "enemy", x: 1900, y: groundY - 60},
          { type: "enemy", x: 2500, y: groundY - 110},
          { type: "marker", x: 3000, y: groundY - 60},
        ],
      },
      {
        name:"Level 3",
        number: 3,
        speed: 0,
        gameItems: [
          { type: "obstacle", x: 400, y: groundY },
          { type: "obstacle", x: 600, y: groundY },
          { type: "obstacle", x: 900, y: groundY },
          { type: "obstacle", x: 900, y: groundY },
          { type: "obstacle", x: 1100, y: groundY },
          { type: "obstacle", x: 1300, y: groundY },
          { type: "obstacle", x: 1900, y: groundY },
          { type: "obstacle", x: 2300, y: groundY },
          { type: "obstacle", x: 2600, y: groundY },
          { type: "obstacle", x: 2450, y: groundY },
          { type: "reward", x: 700, y: groundY - 60},
          { type: "enemy", x: 500, y: groundY - 60},
          { type: "enemy", x: 750, y: groundY - 60},
          { type: "enemy", x: 1000, y: groundY - 60},
          { type: "enemy", x: 1200, y: groundY - 110},
          { type: "enemy", x: 1700, y: groundY - 60},
          { type: "enemy", x: 1550, y: groundY - 110},
          { type: "enemy", x: 1800, y: groundY - 60},
          { type: "enemy", x: 2200, y: groundY - 60},
          { type: "enemy", x: 2750, y: groundY - 110},
          { type: "marker", x: 3000, y: groundY - 60},
        ],

      },
      {
        name:"Level 4",
        number: 4,
        speed: 0,
        gameItems: [
          { type: "obstacle", x: 400, y: groundY },
          { type: "obstacle", x: 700, y: groundY },
          { type: "obstacle", x: 900, y: groundY },
          { type: "obstacle", x: 1300, y: groundY },
          { type: "obstacle", x: 1700, y: groundY },
          { type: "obstacle", x: 2000, y: groundY },
          { type: "obstacle", x: 2200, y: groundY },
          { type: "obstacle", x: 2500, y: groundY },
          { type: "obstacle", x: 2700, y: groundY },
          { type: "reward", x: 700, y: groundY - 60},
          { type: "enemy", x: 450, y: groundY - 60},
          { type: "enemy", x: 550, y: groundY - 110},
          { type: "enemy", x: 1100, y: groundY - 60},
          { type: "enemy", x: 1400, y: groundY - 60},
          { type: "enemy", x: 1600, y: groundY - 60},
          { type: "enemy", x: 1900, y: groundY - 110},
          { type: "enemy", x: 2000, y: groundY - 60},
          { type: "enemy", x: 2600, y: groundY - 60},
          { type: "enemy", x: 2900, y: groundY - 60},
          { type: "marker", x: 3000, y: groundY - 60},
        ],

      },
    ];
    window.opspark.levelData = levelData;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}
