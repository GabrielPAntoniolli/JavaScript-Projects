var bgImage = null;
var fgImage = null;

function uploadBgImage(){
var bgFile = document.getElementById("bgImage");
var canvas = document.getElementById("canvas")
bgImage = new SimpleImage(bgFile);
bgImage.drawTo(canvas2);
}

function uploadFgImage(){
    var fgFile = document.getElementById("fgImage");
    var canvas = document.getElementById("canvas")
    fgImage = new SimpleImage(fgFile);
    fgImage.drawTo(canvas);
}

function doGreenScreen(){
if(fgImage == null || ! fgImage.complete()){
    alert("Foreground Image  not loaded!");
    return;
}
if(bgImage == null || ! bgImage.complete()){
    alert("Background Image not loaded!");
    return;
}


var output = new SimpleImage(fgImage.getWidth(), fgImage.getHeight());

for(var pixel of fgImage.values()){

    var x = pixel.getX();
    var y = pixel.getY();

if(pixel.getGreen() > 220){
    var bgPixel = bgImage.getPixel(x,y);
    output.setPixel(x,y,bgPixel); 
}else{
    output.setPixel(x,y,pixel);
}

}
clearCanvas();
output.drawTo(canvas);
}

function clearCanvas(){

var canvas = document.getElementById("canvas");
var canvas2 = document.getElementById("canvas2")

var context = canvas.getContext('2d');
context.clearRect(0, 0, canvas.width, canvas.height); 

var context2 = canvas2.getContext('2d');
context2.clearRect(0, 0, canvas2.width, canvas2.height); 
}