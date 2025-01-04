
let width = 1500
let height = 800

function setup() {
    createCanvas(width, height);
}

function draw() {
    let d = 70;
    let size = 5;

    let tempo = 0.005    
    background(255);

    drawShape(size,d,width,height,0,0, tempo)
    drawShape(size,d,width,height,0,0, tempo/2)
    drawShape(size,d,width,height,0,0, tempo * 2/3)
    drawShape(size,d,width,height,0,0, tempo/4)

    
}

drawShape = (size, d, width, height, offsetX, offsetY, tempo) => {
    
    drawRotatingSection(size,d,0,tempo,width/2 + offsetX,height/2 + offsetY,'blue')
    drawRotatingSection(size,d,QUARTER_PI,tempo,width/2 + offsetX,height/2 + offsetY,'black')

}

drawRotatingSection = (size, d, initialRot, tempo, centerX, centerY, color) => {
    resetMatrix()
    translate(centerX, centerY)
    rotate(frameCount * tempo + initialRot)
    drawSection(size,d, color)
}

drawSection = (size, d, color) => {
    noFill();

    for (let i = 0; i < size; i++) {
        stroke(240 * (1 - i/size),240* (1 - i/size),100)
        strokeWeight(2)
        circle(0, i * d, d);
        circle(0, - i * d, d);
        circle(- i * d, 0, d);
        circle(i * d, 0, d);
    }
}