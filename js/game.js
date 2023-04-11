const enemyBlock = document.querySelector(".enemyBlock");
const scoreTitle = document.querySelector(".score_title");
const scoreDisplay = document.querySelector(".score");
const levelDisplay = document.querySelector(".levelDisplay");
const overlay = document.querySelector(".overlay");
const modalContent = document.querySelector(".modal_content");
const modalText = document.querySelector(".modal_text");

let score = 0;
let currentLevel = 0;

const levels = [
  {
    target: 7,
    enemy: "Goblin",
    imageUrl: "images/enemy1.png",
    bg: "#bdeded",
  },
  {
    target: 10,
    enemy: "Witch",
    imageUrl: "images/enemy2.png",
    bg: "rgb(205 251 166)",
  },
  {
    target: 14,
    enemy: "Zombie",
    imageUrl: "images/enemy3.png",
    bg: "rgb(93 120 71)",
  },
  {
    target: 19,
    enemy: "Vampire",
    imageUrl: "images/enemy4.png",
    bg: "rgb(174 134 189)",
  },
  {
    target: 25,
    enemy: "Dragon",
    imageUrl: "images/enemy5.png",
    bg: "rgb(255 206 152)",
  },
];

levelDisplay.innerHTML = `You are starting  <span> Level ${
  currentLevel + 1
}</span>. The enemy in this level is <span>${
  levels[currentLevel].enemy
}</span>.`;

enemyBlock.addEventListener("click", () => {
  score++;
  scoreDisplay.innerHTML = score;
  checkLevelComplete();
});

function checkLevelComplete() {
  if (score >= levels[currentLevel].target) {
    currentLevel++;
    if (currentLevel < levels.length) {
      levelDisplay.innerHTML = `You have defeated the <span>${
        levels[currentLevel - 1].enemy
      }</span>. You have reached <span>Level ${
        currentLevel + 1
      }</span>. The enemy in this level is <span>${
        levels[currentLevel].enemy
      }</span>.`;
      updateEnemy();
    } else {
      openCongratModal();
      enemyBlock.style.pointerEvents = "none";
    }
  }
}

function openCongratModal() {
  overlay.style.display = "flex";
  levelDisplay.style.display = "none";
  scoreTitle.style.display = "none";
  modalText.innerHTML = `Congratulations! You have completed all levels! <span>Your score: ${score}</span>.`;
}

overlay.addEventListener("click", function () {
  overlay.style.display = "none";
  location.reload();
});

modalContent.addEventListener("click", function (e) {
  e.stopPropagation();
  if (e.target.className === "modal_submit") {
    overlay.style.display = "none";
    location.reload();
  }
});

function updateEnemy() {
  enemyBlock.style.backgroundImage = `url('${levels[currentLevel].imageUrl}')`;
  enemyBlock.style.backgroundColor = levels[currentLevel].bg;
}

updateEnemy();
