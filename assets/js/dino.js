const jumpsound = new Audio("assets/sounds/jump.mp3");
const deathsound = new Audio("assets/sounds/death.mp3")

class Dino {
    constructor() {
        this.still = new Image();
        this.still.src = "assets/images/still.png"
        this.run1 = new Image();
        this.run1.src = "assets/images/run1.png";
        this.run2 = new Image();
        this.run2.src = "assets/images/run2.png";
        this.crouch1 = new Image()
        this.crouch1.src = "assets/images/crouch1.png";
        this.crouch2 = new Image();
        this.crouch2.src = "assets/images/crouch2.png";
        this.dead = new Image();
        this.dead.src = "assets/images/dead.png";

        this.runspeed = 8;
        this.framecount = 0;
        this.x = 100;
        this.runstate = 1;
        this.stopped = false;
        this.height = 110;
        this.width = 100;
        this.y = canvas.height - this.height;
        this.yVel = 0;
        this.jumpheight = 21;
        this.isJump = false;
        this.minkeypress = 80;
        this.crouchY = this.y+36
        this.isDead = false;
    };

    timerStart() {
        this.start = new Date();
    };

    timerEnd() {
        this.end = new Date();
        return this.end-this.start;
    };

    draw() {
        var image;
        if (!this.stopped) {
            this.y -= this.yVel;
            if (this.y >= canvas.height+this.height-200) {
                this.isJump = false;
                this.yVel = 0;
                this.y = canvas.height-this.height;
            };
            if (this.isJump) {
                image = this.still;
                if (this.yVel <= 0) {
                    this.yVel -= 0.5;
                } else {
                    this.yVel -= 1;
                };
            } else if (this.runstate === 1) {
                image = this.run1;
                this.yVel = 0;
                this.width = 100;
                if (this.crouch) {
                    image = this.crouch1
                    this.width = 125;
                };
            } else {
                image = this.run2;
                this.yVel = 0;
                this.width = 100;
                if (this.crouch) {
                    image = this.crouch2
                    this.width = 125;
                };
            };
        };
        if (this.stopped) {
            image = this.dead;
        } else if (this.runspeed === this.framecount) {
            this.runstate *= -1;
            this.framecount = 0;
        };
        this.framecount += 1;
        this.jumpframecount += 1;
        ctx.drawImage(image,this.x,this.y,this.width,this.height);
    };

    jump() {
        if (!this.isJump && !this.crouch && !this.isDead) {
            this.timerStart();
            this.bigJump()
            jumpsound.play();
        };
    };
    
    smallJump() {
        this.yVel += this.jumpheight-5;
        this.isJump = true;
    };

    bigJump() {
        this.yVel += this.jumpheight;
        this.isJump = true;
    };

    jumpRelease() {
        let time = this.timerEnd();
        if (time <= 10) {
            this.yVel += 5;
        };
    };

    checkCollision(obstacle) {
        if (((this.isJump == false && this.x+this.width-5 >= obstacle.x && this.x+this.width <= obstacle.x+obstacle.image[1])) || (this.isJump == true && this.x+this.width-27 >= obstacle.x && this.y+this.height-2 >= obstacle.image[3] && this.x+30 <= obstacle.x + obstacle.image[1])) {
            this.die();
        };
    };

    die() {
        scrollspeed = 0;
        this.stopped = true;
        this.isDead = true;
        window.addEventListener("keydown",((evt => {
            if (this.isDead) {
                const key  = evt.key.replace("Arrow", "");
                this.isDead = false;
                scrollspeed = 7;
                this.stopped = false;
                this.framecount = 0;
                score = 0;
                if (key == " " || key == "Up") {
                    for (var i = 0; i < obstacles.length; i++) {
                        obstacles[i].x = obstacles[i].startx;
                    };
                };
            };   
        })));
    };
};