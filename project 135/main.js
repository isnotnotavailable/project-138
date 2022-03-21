img="";

function preload() {
    img= loadImage('tv.webp')
}

function setup() {
    canvas = createCanvas(640,420);
    canvas.center();
}

function draw() {
    image(img, 0, 0, 640, 420);
    fill('#eb3434')
    text("Dog", 40, 75);
    noFill();
    stroke('#eb3434')
    rect(30, 60, 450, 350);
}