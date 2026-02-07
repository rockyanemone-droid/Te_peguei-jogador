let score = 0;
let enemyHealth = 100;

const startScreen = document.getElementById("startScreen");
const loader = document.getElementById("loader");
const game = document.getElementById("game");

const loadingSound = document.getElementById("loadingSound");
const bgm = document.getElementById("bgm");

function startGame() {
  startScreen.style.display = "none";
  loader.style.display = "flex";

  loadingSound.play();

  setTimeout(() => {
    loader.style.display = "none";
    game.style.display = "block";
    bgm.play();
  }, 3000);
}

function updateHUD() {
  document.getElementById("score").innerText = score;
  document.getElementById("enemyHealth").innerText = enemyHealth;
}

function animateEnemy() {
  const enemy = document.getElementById("enemy");
  enemy.style.transform = "translateX(-20px)";
  setTimeout(() => {
    enemy.style.transform = "translateX(0)";
  }, 120);
}

function flashPlayer() {
  const player = document.getElementById("player");
  player.style.filter = "drop-shadow(0 0 15px #b30000)";
  setTimeout(() => {
    player.style.filter = "none";
  }, 120);
}

function checkEnemy() {
  if (enemyHealth <= 0) {
    enemyHealth = 0;
    document.getElementById("enemy").style.opacity = "0.3";
    alert("Te peguei, jogador.");
  }
  updateHUD();
}

function shoot() {
  document.getElementById("shootSound").play();
  flashPlayer();
  enemyHealth -= 30;
  score += 15;
  animateEnemy();
  checkEnemy();
}

function punch() {
  document.getElementById("punchSound").play();
  enemyHealth -= 15;
  score += 8;
  animateEnemy();
  checkEnemy();
}

function kick() {
  document.getElementById("kickSound").play();
  enemyHealth -= 10;
  score += 5;
  animateEnemy();
  checkEnemy();
}