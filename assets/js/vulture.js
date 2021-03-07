const vultureUp = new Image();
vultureUp.src = "assets/images/vultureup.png";
const vultureDown = new Image();
vultureDown.src = "assets/images/vulturedwn.png";

class Vulture {
    constructor() {
        this.flapstate = 1;
        this.flapspeed = 30;
        this.framecount = 0;
        this.x = canvas.width + 100;
        this.y = ((Math.floor(Math.random()*3))*25)+230;
        this.height = 40;
        this.width = 100;
        this.speed = scrollspeed - (Math.floor(Math.random()*2)+1);
    };

    draw() {
        var image;
        if (this.flapstate == 1) {
            image = vultureUp;
        } else if (this.flapstate == -1) {
            image = vultureDown;
        };
        if (this.framecount == this.flapspeed) {
            this.framecount = 0;
            this.flapstate *= -1;
        } else {
            this.framecount += 1;
        };
        this.x -= this.speed
        if (this.x <= -canvas.width) {
            this.x = canvas.width + 100;
            this.y = ((Math.floor(Math.random()*3))*25)+230;
            this.speed = scrollspeed - (Math.floor(Math.random()*2)+1);
        };

        ctx.drawImage(image,this.x,this.y,this.width,this.height);
    
    };
};

