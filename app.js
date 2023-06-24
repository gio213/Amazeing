const LEVEL_1 = [
    ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", ".", "*"],
    ["*", "S", ".", ".", ".", ".", ".", "*", "*", ".", "*", ".", "T"],
    ["*", "*", "*", "*", "*", ".", ".", ".", ".", ".", "*", ".", "*"],
    ["*", "*", "*", "*", "*", ".", "*", "*", "*", ".", "*", ".", "*"],
    ["*", "*", "*", "*", "*", ".", "*", "*", "*", "*", "*", ".", "*"],
    ["*", "*", "*", "*", "*", ".", "*", "*", "*", "*", "*", ".", "*"],
    ["*", "*", "*", "*", "*", ".", ".", ".", ".", ".", ".", ".", "*"],
    ["*", "*", "*", "*", "*", ".", "*", "*", "*", "*", "*", "*", "*"],
    ["*", ".", ".", ".", ".", ".", ".", ".", ".", ".", "*", "*", "*"],
    ["*", ".", "*", "*", "*", "*", "*", "*", ".", ".", ".", "*", "*"],
    ["*", ".", ".", ".", ".", "*", "*", "*", "*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*", "*"],
  ],
  LEVEL_2 = [
    [
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
    ],
    [
      "*",
      ".",
      ".",
      "S",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      "*",
    ],
    [
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      ".",
      "*",
    ],
    [
      "*",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      "*",
    ],
    [
      "*",
      ".",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
    ],
    [
      "*",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      ".",
      "T",
    ],
    [
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
      "*",
    ],
  ],
  LEVEL_3 = [
    ["*", "*", "*", "*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "S", "*", "*", "*"],
    ["*", "*", "*", "*", ".", "*", "*", "*"],
    ["*", "*", "*", "*", ".", "*", "*", "*"],
    ["*", "*", "*", "*", ".", "*", "*", "*"],
    ["*", ".", ".", ".", ".", ".", ".", "*"],
    ["*", ".", "*", "*", "*", "*", ".", "*"],
    ["*", ".", ".", "*", "*", "*", ".", "*"],
    ["*", ".", ".", "*", "*", "*", ".", "*"],
    ["*", "*", ".", "*", "*", "*", "*", "*"],
    ["*", "T", ".", "*", "*", "*", "*", "*"],
    ["*", "*", "*", "*", "*", "*", "*", "*"],
  ];

const main = document.querySelector("main");
console.log(LEVEL_1[0][0]);
let array = [];
let newPosition;
let currentPosition;
let playerPosition;
let player = document.querySelector(".s");
let mazeDiv = document.createElement("div");
let wall;
console.log(LEVEL_1[1]);
const initTime = Date.now();
const getElapsedTime = () => {
  return Number((Date.now() - initTime) / 1000).toFixed(2) + "s";
};

const createMaze = (level) => {
  mazeDiv.classList.add("maze");
  main.appendChild(mazeDiv);
  for (let i = 0; i < level.length; i++) {
    level[i].forEach((element) => {
      wall = document.createElement("div");
      wall.classList.add("wall");
      mazeDiv.appendChild(wall);
      array.push(wall);

      //** check the element and add the class */
      switch (element) {
        case ".":
          wall.classList.add("path");
          break;
        case "S":
          wall.classList.add("s");
          break;
        case "T":
          wall.classList.add("t");
          break;
      }
    });
  }

  console.log(array);
  // const movePlayer = () => {
  //   player = document.querySelector(".s");
  //   currentPosition = array.indexOf(player);
  //   console.log(currentPosition);

  //   const moveUp = () => {
  //     array[currentPosition].classList.remove("s");
  //     newPosition = currentPosition - 13;
  //     playerPosition = newPosition;
  //     array[newPosition].classList.add("s");

  //   const moveDown = () => {
  //     array[currentPosition].classList.remove("s");
  //     newPosition = currentPosition + 13;
  //     playerPosition = newPosition;
  //     array[newPosition].classList.add("s");
  //   };
  //   const moveLeft = () => {
  //     array[currentPosition].classList.remove("s");
  //     newPosition = currentPosition - 1;
  //     playerPosition = newPosition;
  //     array[newPosition].classList.add("s");
  //   };
  //   const moveRight = () => {
  //     array[currentPosition].classList.remove("s");
  //     newPosition = currentPosition + 1;
  //     playerPosition = newPosition;
  //     array[newPosition].classList.add("s");
  //   };
  // };
  //   //** move player */
  //   document.addEventListener("keydown", (e) => {

  //       switch (e.key) {
  //         case "ArrowUp":
  //           moveUp();
  //           break;
  //         case "ArrowDown":
  //           moveDown();
  //           break;
  //         case "ArrowLeft":
  //           moveLeft();
  //           break;
  //         case "ArrowRight":
  //           moveRight();
  //           break;
  //       }
  //     }
  // };
};
const movePlayer = () => {
  player = document.querySelector(".s");
  currentPosition = array.indexOf(player);

  document.addEventListener("keydown", (e) => {
    array.forEach((element) => {
      switch (e.key) {
        case "ArrowUp":
          array[currentPosition].classList.remove("s");
          newPosition = currentPosition - 13;
          playerPosition = newPosition;
          array[newPosition].classList.add("s");
          break;
        case "ArrowDown":
          array[currentPosition].classList.remove("s");
          newPosition = currentPosition + 13;
          playerPosition = newPosition;
          array[newPosition].classList.add("s");
          break;
        case "ArrowLeft":
          array[currentPosition].classList.remove("s");
          newPosition = currentPosition - 1;
          playerPosition = newPosition;
          array[newPosition].classList.add("s");
          break;
        case "ArrowRight":
          array[currentPosition].classList.remove("s");
          newPosition = currentPosition + 1;
          playerPosition = newPosition;
          array[newPosition].classList.add("s");
          break;
      }
    });
  });
};

window.addEventListener("keydown", movePlayer);

const selectLevel = () => {
  const select = document.createElement("select");
  const option1 = document.createElement("option");
  const option2 = document.createElement("option");
  const option3 = document.createElement("option");
  main.appendChild(select);
  select.appendChild(option1);
  select.appendChild(option2);
  select.appendChild(option3);

  option1.textContent = "Level 1";
  option2.textContent = "Level 2";
  option3.textContent = "Level 3";
  select.value = createMaze(LEVEL_1);
  select.selectedIndex = 0;
  select.addEventListener("change", (e) => {
    switch (e.target.value) {
      case "Level 1":
        createMaze(LEVEL_1);
        break;
      case "Level 2":
        createMaze(LEVEL_2);
        break;
      case "Level 3":
        createMaze(LEVEL_3);

        break;
    }
  });
};

selectLevel();
