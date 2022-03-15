function setup() {
  video = createCapture(VIDEO)
  video.size(550, 500);
 
   canvas = createCanvas(550, 550);
   canvas.position(560,150);

   poseNet = ml5.poseNet(video,modelLoaded);
   poseNet.on('pose', gotposes);
}
   function modelLoaded() {
     console.log('poseNet Is Initialized!');

   }
  
function gotposes(results)
{
  if(results.length >0);
  {
    console.log(result);
    noseX = result[0].pose.nose.x;
    nosey = result[0].pose.nose.y;
    console.log("noseX =" + noseX +"noseY" + noseY);

    liftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.leftWrist.x;
    difference = floor(leftWristX - rightWristX);

    console.log("leftWristX = " + leftWristX + "rightWristX")
  }
}

function draw() {
  background('#FFA500');

  document.getElementById("square_side").innerHTML = "Width And Height of a Square will be = "+difference +"px";
  fill('#FF0000');
  stroke('	#008000');

  square(noseX, noseY, difference);
}

noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
liftWristX = 0;
