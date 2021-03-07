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