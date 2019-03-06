class Stat {
    constructor(name, color, start) {
        this.name = name;
        this.color = color;
        this.value = start;
    }

    draw(x, y) {
        noStroke();
        fill(this.color);
        rect(x, y, 200 * (this.value / max), 40);

        stroke(0);
        strokeWeight(2);
        noFill();
        rect(x, y, 200, 40);

        noStroke();
        fill(0);
        textAlign(LEFT, CENTER);
        textSize(20);
        text(this.name, x + 210, y + 20);
    }

    add(amount) {
        this.value += amount;
        if (this.value > max)
            this.value = max;
    }

    remove(amount) {
        this.value -= amount;
        if (this.value < 0)
            this.value = 0;
    }
}

const speed = 1;
const max = 100;
const hunger = new Stat("Hunger", "#e57119", 0);
const energy = new Stat("Energy", "#9de017", max);
const weight = new Stat("Weight", "#38b5d1", max / 2);
const hygiene = new Stat("Hygiene", "#e7f920", max);
const happiness = new Stat("Happiness", "#e01818", max);

let lastMillis;
let passedSeconds = 0;

function setup() {
    createCanvas(640, 480);
    lastMillis = millis();
}

function draw() {
    let milliseconds = millis();
    passedSeconds += (milliseconds - lastMillis) / 1000;
    lastMillis = milliseconds;
    while (passedSeconds >= 1 / speed) {
        passedSeconds -= 1 / speed;
        console.log(second());
    }

    background(255);

    let x = 300;
    let y = 10;
    let jump = 50;
    hunger.draw(x, y);
    energy.draw(x, y += jump);
    weight.draw(x, y += jump);
    hygiene.draw(x, y += jump);
    happiness.draw(x, y += jump);

    noStroke();
    fill(0);
    ellipse(75, 80, 50, 50);
    ellipse(175, 80, 50, 50);

    strokeWeight(5);
    stroke(0);
    noFill();

    let mouth = floor((happiness.value / max) * 4);
    if (mouth == 4)
        arc(125, 160, 180, 80, 0, PI);
    else if (mouth == 3)
        arc(125, 180, 120, 20, 0, PI);
    else if (mouth == 2)
        arc(125, 180, 120, 1, 0, PI);
    else if (mouth == 1)
        arc(125, 180, 120, 20, PI, 0);
    else if (mouth == 0)
        arc(125, 215, 180, 80, PI, 0);
}