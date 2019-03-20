function windowResized() {
    console.log('resized');
    resizeCanvas(windowWidth, windowHeight);
}

var p5field;
var introCopy;
var count = 0;

let xpos, ypos; // Starting position of shape
let xspeed = 1; // Speed of the shape
let yspeed = 1; // Speed of the shape
let xdirection = 1; // Left or Right
let ydirection = 1; // Top to Bottom
let inputWidth = 1;
let inputHeight = 1;

var 빙글빙글할까 = '시러';
var 몇빙글 = [];
var 첨빙글 = [];

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    canvas.style('z-index','-1');

    // create input
    p5field = createInput('C15jk');
    p5field.class('aTarget')
    main();

    // text that changes with input
    introCopy = createP(p5field.value());
    introCopy.class('intro');
    introCopy.position(500,200);

    //bg
    var bgString = "hsl("+random(120,240)+","+random(80,100)+"%,"+20+"%)"
    $("html").css("background-color", bgString);

    //bounce
    xpos = windowWidth / 2;
    ypos = windowHeight / 2;


    $('input').each(function(key, value){
        첨빙글[key] = (random(-10, 10) * 0.03);
        몇빙글[key] = 0;
    });
}

function drawBackground() {
    background($("html").css("background-color"));
    noStroke();
    for (i=0; i<16; i++) {
        for (k=0; k<16; k++) {
            if (k % 2 == 1) {
                var xCoor = 40 + windowWidth / 16*i - count;
            } else {
                var xCoor = windowWidth / 16*i + count;
            }
            var yCoor = 40 + k * 100; 
            if (xCoor > windowWidth) {
                xCoor = xCoor % windowWidth;
            } else if (xCoor < 0) {
                xCoor = windowWidth + (xCoor % windowWidth);
            }
            ellipse(xCoor,yCoor,40);
            fill(255,255,255);
        }
    }

    뀨();
}

// function keyTyped(){

// }
// function keyReleased(){
//     background(0,0,200);
// }

function draw() {
    count += 1;
    textSize(500);
	text(count,500,500);
    drawBackground();
    p5field.input(updateText);

    xpos = xpos + xspeed * xdirection;
    ypos = ypos + yspeed * ydirection;
    if (xpos > windowWidth - inputWidth || xpos < 0) {
        xdirection *= -1;
      }
    if (ypos > windowHeight - inputHeight || ypos < 0) {
        ydirection *= -1;
      }
    p5field.position(xpos,ypos);
}

function updateText() {
    introCopy.html(p5field.value());
}

function 뀨() {

    $('input').hover(function(){
        빙글빙글할까 = '하자!';
    });
    if(빙글빙글할까 == '하자!'){
        $('input').each(function(key, value){
            몇빙글[key] = 몇빙글[key] + 첨빙글[key];
            $(this).css('transform', 'rotate(' + 몇빙글[key] % 360 + 'deg)');
        });
    }
}