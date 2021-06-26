function preload()
{

}

function setup()
{
    canvas = createCanvas(350, 350);
    canvas.center();
    img = createCapture(VIDEO);
    img.hide();
    poseNet = ml5.poseNet(img, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}

function modelLoaded()
{
    console.log("PoseNet has Started");
}

function draw()
{
    image(img, 0, 0, 350, 350);

}

function take_snapshot()
{
    save('My-Moustache-Face.jpg');
}