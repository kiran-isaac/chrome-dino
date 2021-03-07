const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");

const distance = 0;
const framerate = 100;
let scrollspeed = 7;
let high = 0;
let highDisp = ["0","0","0","0","0"];

let score = 0;
let firstPass = true;
const scoresound = new Audio("assets/sounds/score.mp3");

const replay = new Image();
replay.src = "assets/images/replay.png";
const game_over = new Image();
game_over.src = "assets/images/gameover.png"

draw = function() {
    ctx.clearRect(0,0, canvas.width, canvas.height);

    for (var i = 0; i<decorations.length; i++) {
        decorations[i].draw()
    };
    for (var i = 0; i<obstacles.length; i++) {
        obstacles[i].draw()
        dino.checkCollision(obstacles[i]);
    };
    if (dino.isDead) {
        ctx.drawImage(replay,(canvas.width/2) -37,100,72,64);
        ctx.drawImage(game_over,(canvas.width/2)-195,200,381,21);
    };
    dino.draw();
    groundScroll.draw();
    //vulture.draw();

    score += scrollspeed/70;
    new_score = Math.floor(score).toString().split("");
    while (new_score.length != 5) {
        new_score.unshift("0");
    };
    if (parseInt(Math.floor(score).toString().slice(-2)) >= 0 && parseInt(Math.floor(score).toString().slice(-2)) <= 25 && Math.floor(score).toString().length >= 3) {
        if (firstPass) {
            flashFrameCount = 0;
            scoresound.play();
            scrollspeed += 0.2;
        };
    scoreText.draw(new_score,canvas.width-((18*new_score.length)+(10*new_score.length)),10,18,16,10);

/*    
        flashFrameCount += 1;

        if (flashFrameCount == scoreText.flashFrames) {
            console.log(flashFrameCount)
            flashFrameCount = 0;
            scoreText.flashState *= -1;
        };
        if (scoreText.flashState == -1) {
            scoreText.draw(new_score,canvas.width-((18*new_score.length)+(10*new_score.length)),10,18,16,10);
        };
*/

        firstPass = false;
    } else {
        scoreText.draw(new_score,canvas.width-((18*new_score.length)+(10*new_score.length)),10,18,16,10);
        firstPass = true;
    };
    if (score > high) {
        high = score;
        highDisp = new_score;
        highDisp.unshift("h","i"," ");
    };
    highText.draw(highDisp,canvas.width-400,10,18,16,10);
};

startUp = function() {
    scoreText = new Text();
    highText = new Text();
    groundScroll = new Scroller();
    decorations = [new Cloud(canvas.width),new Cloud(500+canvas.width),new Cloud(1000+canvas.width),new Cloud(1500+canvas.width)];
    obstacles = [new Cactus(canvas.width),new Cactus(canvas.width*1.55)];
    dino = new Dino();
};

window.addEventListener("keydown", ((evt => {
    const key  = evt.key.replace("Arrow", "");
    if (key === " " || key === "Up") {
        dino.jump();
    } else if (key === "Down") {
        dino.crouch = true;
    };
})));

window.setInterval(() => {draw();}, (1/framerate)*1000);

window.addEventListener("load",startUp());