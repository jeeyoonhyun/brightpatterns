let xpos, ypos;
let xspeed;
let yspeed;
let rectWidth, rectHeight;
let count = 0;



function setup() {
    createCanvas(800,600);
    x = 100;
    y = 100;

}

    xspeed = 10;
    yspeed = 10;

function bingle() {
    count +=1;

    background(0);
    rect(x,y,rectWidth,rectHeight);

    rectWidth = 80;
    rectHeight = 60;

    // x = x + xspeed * EasingFunctions.easeInQuad(count*0.1);
    // y = y + yspeed * EasingFunctions.easeInQuad(count*0.1);

    xpos = xpos + xspeed * Math.abs(sin(count / Math.PI * 0.1));
    ypos = ypos + yspeed * Math.abs(cos(count / Math.PI * 0.1));

    console.log(xspeed * EasingFunctions.easeInQuad(count*0.1))

    if (xpos + rectWidth > width || x < 0) {
        xspeed = xspeed * -1;
    }

    if (ypos + rectHeight > height || y < 0) {
        yspeed = yspeed * -1;
    }
}