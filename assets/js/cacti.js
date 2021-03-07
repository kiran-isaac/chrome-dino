this.cacti1 = new Image();
this.cacti1.src = "assets/images/Cacti1.png";
this.cacti2 = new Image();
this.cacti2.src = "assets/images/Cacti1.png";
this.cacti3 = new Image();
this.cacti3.src = "assets/images/Cacti1.png";
this.cacti4 = new Image();
this.cacti4.src = "assets/images/Cacti4.png";

this.smallcacti1 = new Image();
this.smallcacti1.src = "assets/images/SmallCacti1.png";
this.smallcacti2 = new Image();
this.smallcacti2.src = "assets/images/SmallCacti2.png";
this.smallcacti3 = new Image();
this.smallcacti3.src = "assets/images/SmallCacti3.png";

class Cactus {
    constructor(x=canvas.width,size=this.size = Math.floor(Math.random()*2),type=this.type = Math.floor(Math.random()*3)) {
        this.x = x;
        this.startx = x;

        var image;
        this.smallScaler = 0.8;
        this.largeScaler = 1;


        this.smallHeight = (70*this.smallScaler)+10;
        this.largeheight = 96*this.largeScaler;

        this.size = size;
        this.type = type;
/*
        if (!this.size) {
            this.size = Math.floor(Math.random()*2)
        };
        if (!this.type) {
            if (this.size == 0) {
                this.type = Math.floor(Math.random()*4);
            } else {
                this.type = Math.floor(Math.random()*3);
            };
        };
*/
        if (this.size == 0) {
            if (this.type == 0) {
                this.image = [cacti1,this.largeheight,102*this.largeScaler,canvas.height-20-this.largeheight];
            } else if (this.type == 1) {
                this.image = [cacti2,this.largeheight,97*this.largeScaler,canvas.height-20-this.largeheight];
            } else if (this.type == 2){
                this.image = [cacti3,this.largeheight,100*this.largeScaler,canvas.height-20-this.largeheight];
            } else {
                this.image = [cacti4,this.largeheight,50*this.largeScaler,canvas.height-20-this.largeheight];
            };
        } else {
            if (this.type == 0) {
                this.image = [smallcacti1,this.smallHeight,(34*this.smallScaler)+10,canvas.height-20-this.smallHeight];
            } else if (this.type == 0) {
                this.image = [smallcacti2,this.smallHeight,(68*this.smallScaler)+10,canvas.height-20-this.smallHeight];
            } else {
                this.image = [smallcacti3,this.smallHeight,(102*this.smallScaler)+10,canvas.height-20-this.smallHeight];
            };
        };
        this.y = canvas.height-20-this.image[1];
        this.width = this.image[2];
    };

    draw() {
        this.x -= scrollspeed;

        if (this.x+200 <= 0) {
            this.x = canvas.width;
            this.size = Math.floor(Math.random()*2)
            if (this.size == 0) {
                this.type = Math.floor(Math.random()*4);
            } else {
                this.type = Math.floor(Math.random()*3);
            };
            if (this.size == 0) {
                if (this.type == 0) {
                    this.image = [cacti1,this.largeheight,102*this.largeScaler,canvas.height-20-this.largeheight];
                } else if (this.type == 1) {
                    this.image = [cacti2,this.largeheight,97*this.largeScaler,canvas.height-20-this.largeheight];
                } else if (this.type == 2){
                    this.image = [cacti3,this.largeheight,100*this.largeScaler,canvas.height-20-this.largeheight];
                } else {
                    this.image = [cacti4,this.largeheight,50*this.largeScaler,canvas.height-20-this.largeheight];
                };
            } else {
                if (this.type == 0) {
                    this.image = [smallcacti1,this.smallHeight,(34*this.smallScaler)+10,canvas.height-20-this.smallHeight];
                } else if (this.type == 0) {
                    this.image = [smallcacti2,this.smallHeight,(68*this.smallScaler)+10,canvas.height-20-this.smallHeight];
                } else {
                    this.image = [smallcacti3,this.smallHeight,(102*this.smallScaler)+10,canvas.height-20-this.smallHeight];
                };
            };
        };
        ctx.drawImage(this.image[0],this.x,this.image[3],this.image[2],this.image[1]);
    };
};