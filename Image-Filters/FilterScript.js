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
        pixel.setRed(255);
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