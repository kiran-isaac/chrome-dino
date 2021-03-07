const cloud = new Image();
cloud.src = "assets/images/cloud.png"

const one = new Image();
const two = new Image();
const three = new Image();
const four= new Image();
const five = new Image();
const six = new Image();
const seven = new Image();
const eight = new Image();
const nine = new Image();
const zero = new Image();
const h = new Image();
const i_img = new Image();
one.src = "assets/images/numbers/1.png"
two.src = "assets/images/numbers/2.png"
three.src = "assets/images/numbers/3.png"
four.src = "assets/images/numbers/4.png"
five.src = "assets/images/numbers/5.png"
six.src = "assets/images/numbers/6.png"
seven.src = "assets/images/numbers/7.png"
eight.src = "assets/images/numbers/8.png"
nine.src = "assets/images/numbers/9.png"
zero.src = "assets/images/numbers/0.png"
h.src = "assets/images/numbers/h.png"
i_img.src = "assets/images/numbers/i.png"

class Scroller {
    constructor(image) {
        this.positions = [0,canvas.width]
        this.image = new Image();
        this.image.src = "assets/images/ground.png";
        this.width = 40;
    };
    draw() {
        this.positions[0] -= scrollspeed;
        this.positions[1] -= scrollspeed;
        if (this.positions[0] <= -canvas.width) {
            this.positions[0] = canvas.width;
        };
        if (this.positions[1] <= -canvas.width) {
            this.positions[1] = canvas.width;
        };
        ctx.drawImage(this.image,this.positions[0],canvas.height-this.width,canvas.width+10,this.width);
        ctx.drawImage(this.image,this.positions[1],canvas.height-this.width,canvas.width+10,this.width);
    };
};

class Cloud {
    constructor(x) {
        this.y = Math.floor(Math.random()*100)+20;
        this.x = x;
        this.speedRatio = 7;
        this.height = 30;
        this.width = 90;
    };

    draw() {
        this.speed = scrollspeed/this.speedRatio;
        this.x -= this.speed;
        ctx.drawImage(cloud,this.x,this.y,this.width,this.height)
        if (this.x + this.width <= 0) {
            this.y = Math.floor(Math.random()*200)+20;
            this.x = canvas.width + 200
        };
    };
};

class Text {
    draw(text,x,y,imageWidth,imageHeight,spacing) {
        this.x = x;
        this.y = y;
        this.spacing = spacing;
        this.imageWidth = imageWidth;
        this.imageHeight = imageHeight;

        this.flashFrames = 50;
        this.flashNo = 6;
        this.flashFramesTotal = this.flashNo * this.flashFrames;
        this.flashState = 1;

        this.displayString = [];
        var image;

        for (var i = 0; i < text.length; i++) {
            switch (text[i]) {
                case "0":
                    ctx.drawImage(zero,this.x,y,this.imageWidth,this.imageHeight);
                    break;
                case "1":
                    ctx.drawImage(one,this.x,y,this.imageWidth,this.imageHeight);
                    break;
                case "2":
                    ctx.drawImage(two,this.x,y,this.imageWidth,this.imageHeight);
                    break;
                case "3":
                    ctx.drawImage(three,this.x,y,this.imageWidth,this.imageHeight);
                    break;
                case "4":
                    ctx.drawImage(four,this.x,y,this.imageWidth,this.imageHeight);
                    break;
                case "5":
                    ctx.drawImage(five,this.x,y,this.imageWidth,this.imageHeight);
                    break;
                case "6":
                    ctx.drawImage(six,this.x,y,this.imageWidth,this.imageHeight);
                    break;
                case "7":
                    ctx.drawImage(seven,this.x,y,this.imageWidth,this.imageHeight);
                    break;
                case "8":
                    ctx.drawImage(eight,this.x,y,this.imageWidth,this.imageHeight);
                    break;
                case "9":
                    ctx.drawImage(nine,this.x,y,this.imageWidth,this.imageHeight);
                    break;
                case "h":
                    ctx.drawImage(h,this.x,y,this.imageWidth,this.imageHeight);
                    break;
                case "i":
                    ctx.drawImage(i_img,this.x,y,this.imageWidth,this.imageHeight);
                    break;
                case " ":
                    this.x -= 10;
                    break;
            };
            this.x += this.imageWidth + this.spacing;
        };
    };

    flash() {
        scoresound.play();
    };
};



