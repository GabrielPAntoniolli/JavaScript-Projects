var originalImg;
var otherImg;

function uploadImage(){
var file = document.getElementById("fInput");
var cnv = document.getElementById("canvas");
originalImg = new SimpleImage(file);
originalImg.drawTo(cnv);
otherImg = new SimpleImage(file);
}

function makeRed(){
resetImage();
for(var pixel of otherImg.values()){
    var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
if(avg < 128){
    pixel.setRed(avg * 2);
    pixel.setGreen(0);
    pixel.setBlue(0);
}else{
    pixel.setRed(255);
    pixel.setGreen(avg * 2 - 255);
    pixel.setBlue(avg * 2 - 255);
}
}
var cnv = document.getElementById("canvas");
otherImg.drawTo(cnv);
}

function makeBlur(){
resetImage();
for(var pixel of otherImg.values()){
    var x = pixel.getX();
    var y = pixel.getY();

                var right = img.getPixel(x+1, y);
                var left = img.getPixel(x-1, y);
                var top = img.getPixel(x, y-1);
                var bottom = img.getPixel(x, y+1);

var red = (right.getRed() + left.getRed() + top.getRed() + bottom.getRed())/4;
var green = (right.getGreen() + left.getGreen() + top.getGreen() + bottom.getGreen())/4;
var blue = (right.getBlue() + left.getBlue() + top.getBlue() + bottom.getBlue())/4;
pixel.setRed(red);
pixel.setRed(green);
pixel.setRed(blue);
}

var cnv = document.getElementById("canvas");
otherImg.drawTo(cnv);
}

function makeGrey(){
    resetImage();
for(var pixel of otherImg.values()){
var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
pixel.setRed(avg);
pixel.setGreen(avg);
pixel.setBlue(avg);
}
var cnv = document.getElementById("canvas");
otherImg.drawTo(cnv);
}

function resetImage(){
    var cnv = document.getElementById("canvas");
originalImg.drawTo(cnv);
}