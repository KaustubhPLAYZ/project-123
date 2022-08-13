noseX=0;
noseY=0;

function preload(){
    Mustache = loadImage(' https://i.postimg.cc/3x3QzSGq/m.png');
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.position(600, 200);
    video = createCapture(VIDEO);
    video.size(600, 500);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 600, 500);
    image(Mustache, noseX -38, noseY , 80, 40);
}

function take_snapshot(){
    save('myFilterImage.png');
}

function modelLoaded(){
    console.log('poseNet is Intialialized');
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}