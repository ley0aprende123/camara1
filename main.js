function preload(){
    
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

}

function draw(){
    image(video,0,0,300,300);
fill("purple");
circle(50,50,100);
fill("blue");
rect(50,50,50,50);

}
