function setup() {
video=createCapture(VIDEO);
video.size(400,400);
video.position(430,130);

canvas=createCanvas(400,400);
canvas.position(930,130);

poseNet=ml5.poseNet(video,modalLoaded);
poseNet.on("pose",gotPoses);
}

function modalLoaded() {
console.log("Modal loaded");
}

function draw () {
background("#177, 107, 209")
}

function gotPoses(error,results) {
if(error) {
console.log(error);
}
if(results.length>0) {
console.log(results);
}
}