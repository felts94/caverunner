var sketchProc = function (processingInstance) {
    with (processingInstance) {
        size(1000, 1000);
        frameRate(30);
        var Winston = function (x, y, s, dirx, diry, r, g, b) {
            this.x = x;
            this.y = y;
            this.s = s;
            this.dirx = dirx;
            this.diry = diry;
            this.r = r;
            this.g = g;
            this.b = b;
        }

        Winston.prototype.disp = function () {
            noStroke();
            if (this.s > 0) {
                // face
                fill(this.r, this.g, this.b);
                ellipse(this.x, this.y, 5 * this.s, 5 * this.s);
                fill(this.r - 50, this.g - 50, this.b - 50);
                ellipse(this.x + this.s, this.y + this.s, 2 * this.s, 2 * this.s);
                ellipse(this.x + this.s, this.y - this.s, 2 * this.s, 2 * this.s);
                ellipse(this.x - this.s, this.y + this.s, 2 * this.s, 2 * this.s);
                ellipse(this.x - this.s, this.y - this.s, 2 * this.s, 2 * this.s);
                //rect(this.x - this.s,this.y - this.s,this.s*2, this.s*2)
                // ellipse(x + x, y + y, 10 * s, 10 * s);
                // ellipse(x - x, y - y, 10 * s, 10 * s);
                //drawWinston(x - s * dirx, y - s * diry, s - 1, dirx, diry, r + 10, g + 10, b + 10);
            }
        }

        Winston.prototype.update = function () {
            if (this.s > 0) {
                this.x = this.x - this.s * this.dirx;
                this.y = this.y - this.s * this.diry;
                // this.dirx *= this.s
                // this.diry +=
                this.s = this.s - 1;
                this.r += 10;
                this.g += 10;
                this.b += 10;
            }
        }

        // this defines a function called "drawWinston"
        var drawWinston = function (x, y, s, dirx, diry, r, g, b) {
            noStroke();
            if (s > 0) {
                // face
                fill(r, g, b);
                ellipse(x, y, 5 * s, 5 * s);

                // ellipse(x + x, y + y, 10 * s, 10 * s);
                // ellipse(x - x, y - y, 10 * s, 10 * s);
                drawWinston(x - s * dirx, y - s * diry, s - 1, dirx, diry, r + 10, g + 10, b + 10);
            }
        };
        var i = 1;
        var limit = 500*2;

        // the code inside the function will not be run until you
        // call the function!  Like this:
        mouseClicked = function () {
            i++;
            //drawWinston(mouseX, mouseY, 20, random(-0.5, 0.5), random(-0.5, 0.5));
        };
        var winstons = []
        draw = function () {
            i++;
            if (i % 2 === 0) {
                r = random(0, 200);
                g = random(0, 200);
                b = random(0, 200);
                var v = new PVector(pmouseX - mouseX, pmouseY - mouseY);
                v.normalize();
                if (v.mag() === 0) {
                    winstons.push(new Winston(mouseX + random(-100, 100), mouseY + random(-100, 100), 25, random(-1, 1), random(-1, 1), r, g, b));
                    //drawWinston(mouseX + random(-100,100), mouseY + random(-100,100), 20, random(-1, 1), random(-1, 1),r,g,b);
                }
                else {
                    winstons.push(new Winston(mouseX + random(-20, 20), mouseY + random(-20, 20), 25, v.x * 0.8, v.y * 0.8, r + 10, g + 10, b + 10));
                    //drawWinston(mouseX + random(-20,20), mouseY + random(-20,20), 20, v.x * 0.8, v.y * 0.8, r + 10, g + 10, b + 10);
                }
                if (i > limit) {
                    background(200, 200, 200);
                    i = 0;
                    winstons = []
                }
            }
            for (var j = 0; j < winstons.length; j++) {
                winstons[j].disp();
                winstons[j].update();
            }

        };

        // mouseOver = function () {
        //     i++;
        //     var v = new PVector(pmouseX - mouseX, pmouseY - mouseY);
        //     v.normalize();
        //     r = random(150,255);
        //     g = random(150,255);
        //     b = random(150,255);
        //     drawWinston(mouseX, mouseY, 10, v.x * 0.8, v.y * 0.8,r,g,b);
        //     if (i > limit) {
        //         background(255, 255, 255);
        //         i = 0;
        //     }
        // };

        // (try commenting it out and see what happens)

    }
}  