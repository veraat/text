// var video = document.getElementById("videoElement");

var nosey = 0;
var nosex = 0;
var lWristy = 0;
var lWristx = 0;
var rWristy = 0;
var rWristx = 0;

var sie = 0;

// if (navigator.mediaDevices.getUserMedia) {
//     navigator.mediaDevices.getUserMedia({ video: true })
//       .then(function (stream) {
//         video.srcObject = stream;
//       })
//       .catch(function (err0r) {
//         console.log("Something went wrong!");
//       });
//   }

  function setup() {
    video = createCapture(VIDEO);
    // video.position(0, 250);
    video.size(550, 500);
    // video.filter(INVERT);
    
    canvas = createCanvas(750, 500);
    canvas.position(600, 240);

    posnet = ml5.poseNet(video, modelLoaded);
    posnet.on("pose" , gotPoses);
}

function modelLoaded() {
    console.log("Posenet loaded!");
}

function  draw()  {
  background("#969A97")
  text("font", 0 , 250)
  textSize(sie);
  fill(0, 102, 153);
}

function gotPoses(results) {
  // if(error){
  //   console.log(error);
  // }
  
  if (results.length > 0) {
    // console.log(result);
    nosex = results[0].pose.nose.x;
    nosey = results[0].pose.nose.y;

    lWristx = results[0].pose.leftWrist.x;

    rWristx = results[0].pose.rightWrist.x;
    
    sie = lWristx- rWristx;
    console.log("rx = " + rWristx + "ry = " +rWristy);
    console.log("nx = " + nosex + "ny = " +nosey);
    console.log("lx = " + lWristx + "ly = " +lWristy);

    document.getElementById("size").innerHTML = sie.toFixed(0) + "px";
    

  }
}