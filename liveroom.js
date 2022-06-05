var status = "";
objects = [];
function preload() 
{
    img = loadImage("small simple living room.jpg");
}
function setup() 
{
 canvas = createCanvas(640, 480);
 canvas.center();
 camera = createCapture(VIDEO);
 camera.hide;
}
function draw() 
{
    image(camera, 0, 0, 640, 480);
}