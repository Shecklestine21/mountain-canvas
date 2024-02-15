//canvas - fishing scene

//canvas setup
var cnv = document.getElementById("myCanvas");
var ctx = cnv.getContext("2d");
cnv.width = 1000;
cnv.height = 1000;

//sky
ctx.fillStyle = "lightblue";
ctx.fillRect(0, 0, 1000, 1000)

//ground
ctx.fillStyle = `green`;
ctx.fillRect(0, 850, 1000, 1000)

//mountain
ctx.fillStyle = "grey"
ctx.beginPath();
ctx.moveTo(1000,850);
ctx.lineTo(650,390);
ctx.lineTo(650,380);
ctx.lineTo(200,850);
ctx.fill();

//snow on the mountain
ctx.fillStyle = "white"
ctx.beginPath();
ctx.moveTo(650,385);
ctx.lineTo(475,550);
ctx.lineTo(715,475);
ctx.lineTo(650,385);
ctx.fill();

//cabin
ctx.fillStyle = "brown";
ctx.fillRect(100,750,120,100);
//windows
ctx.fillStyle = "lightblue";
ctx.fillRect(120,790,25,25);
ctx.fillRect(180,790,25,25);
//cabin roof
ctx.fillStyle = "black"
ctx.beginPath();
ctx.moveTo(100,120);
ctx.lineTo(100,750);
ctx.lineTo(220,750);
ctx.lineTo(100,700);
ctx.fill();

//sun
ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.arc(75, 50, 50, 0, 2*Math.PI);
ctx.fill();


//clouds
ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(800, 200, 40, 0, 2*Math.PI);
ctx.fill();
ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(750, 200, 40, 0, 2*Math.PI);
ctx.fill();
ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(775, 175, 40, 0, 2*Math.PI);
ctx.fill();

ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(220, 350, 40, 0, 2*Math.PI);
ctx.fill();
ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(165, 350, 40, 0, 2*Math.PI);
ctx.fill();
ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(190, 315, 40, 0, 2*Math.PI);
ctx.fill();

//text
ctx.font = "25px Arial";
ctx.fillStyle = "white";
ctx.fillText("Art by Riley Hodder", 750, 950)

//goat img
var goatImg = document.getElementById("goatEl");
ctx.drawImage(goatImg, 550, 400, 90, 90 );
ctx.drawImage(goatImg, 650, 600, 90, 90 );
ctx.drawImage(goatImg, 250, 760, 90, 90 );

//plane
var planeImg = document.getElementById("planeEl");
ctx.drawImage(planeImg, 350, 100, 90, 90 );


//markings for cords
//ctx.fillStyle = "cyan";
//ctx.beginPath();
//ctx.arc(475, 550, 20, 0, 2*Math.PI);
//ctx.fill();

//ctx.fillStyle = "cyan";
//ctx.beginPath();
//ctx.arc(715, 475, 20, 0, 2*Math.PI);
//ctx.fill();

//ctx.fillStyle = "cyan";
//ctx.beginPath();
//ctx.arc(650, 385, 20, 0, 2*Math.PI);
//ctx.fill();

//ctx.fillStyle = "cyan";
//ctx.beginPath();
//ctx.arc(163, 700, 20, 0, 2*Math.PI);
//ctx.fill();

//ctx.fillStyle = "cyan";
//ctx.beginPath();
//ctx.arc(220, 750, 20, 0, 2*Math.PI);
//ctx.fill();

//ctx.fillStyle = "cyan";
//ctx.beginPath();
//ctx.arc(105, 750, 20, 0, 2*Math.PI);
//ctx.fill();




//EXAMPLE   
//ctx.fillStyle = `brown`;
//ctx.fillRect(0, 200, 250, 25)













