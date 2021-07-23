nose_x = 0;
nose_y = 0;
left_wrist_x = 0;
right_wrist_x = 0;
difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 500);
    canvas.center();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotposes);
}

function modelLoaded() {
    console.log("PoseNet is loaded");
}

function draw() {
    background("d4af37");
}

function gotposes(results) {
    if (results.lenth > 0) {
        console.log(results);
    }
}