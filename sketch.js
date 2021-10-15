let hühner = [];
let player;
let j;
let i;
let highscore;
const url = "https://codeweek-scoreboard-b92vu.ondigitalocean.app/score";
let postData;

function preload() {
  FliegendesHuhn.preload();
  httpGet(
    url + "?game=Moorhuhn&_sort=score&_order=desc&_limit=1",
    "json",
    false,
    (s) => (highscore = s)
  );
}

function setup() {
  createCanvas(1000, 500);
  for (j = 0; j < 6; j++) {
    hühner.push(new FliegendesHuhn());
  }

  player = new Spieler();
}

function draw() {
  hud();
  for (i = 0; i < hühner.length; i++) {
    let huhn = hühner[i];
    huhn.draw();
    huhn.fliegen();
    huhn.outOfMap();
    //print(huhn.punkte);
    player.schießen(huhn);
    if (huhn.status == "tot" || huhn.status == "outOfMap") {
      hühner[i] = new FliegendesHuhn();
    }
  }
  player.scope();
  if (int(frameCount / 30) == 120) {
    gameOverScreen();
    submitScore();
    giveHighscore();
  }
}

function gameOverScreen() {
  noLoop(draw);
  textSize(50);
  text("Game Over", 230, 250);
  textSize(30);
  text("dein Score:", 240, 300);
  text(player.punktzahl, 400, 302);
}

function submitScore() {
  postData = {
    game: "Moorhuhn",
    username: "Anton",
    score: player.punktzahl,
  };
  httpPost(url, "json", postData);
}

function giveHighscore() {
  
  if (highscore) {
    text("Highscore:", 240, 360)
    text(highscore[0].score, 400, 360);
    print(highscore[0]);
  }
}

function hud() {
  background("white");
  textSize(20);
  text(int(frameCount / 30), 100, 50);
  text(player.punktzahl, 600, 50);
  
}
