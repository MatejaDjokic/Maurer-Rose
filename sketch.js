let n = 0;
let d = 0;
let dSlider;
let num = 0;
let slower = 5;

function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
}

function draw() {
    background(0);
    translate(width / 2, height / 2);
    stroke(255);

    noFill();
    beginShape();
    strokeWeight(1);
    for (let i = 0; i < 361; i++) {
        let k = i * d;
        let r = 150 * sin(n * k);
        let x = r * cos(k);
        let y = r * sin(k);
        vertex(x, y);
    }
    endShape();


    noFill();
    stroke(255, 0, 255, 255);
    strokeWeight(2);
    beginShape();
    for (let i = 0; i < 361; i++) {
        let k = i;
        let r = 150 * sin(n * k);
        let x = r * cos(k);
        let y = r * sin(k);
        vertex(x, y);
    }
    endShape();
    if (num % slower == 0) {
        n += 0.01;
        d += 0.01;
    }
    num++;
}