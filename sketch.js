import Player from './Player.js'
var player = new Player();

function setup() {
    createCanvas(400, 400);
}

function draw() {
    let ppos = player.pos;
    background(220);
    stroke(255, 204, 0);
    strokeWeight(4);
    circle(ppos.x, ppos.y, 25);
}
