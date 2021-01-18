var originalImage;
var otherImage

function upload(){
var fileInput = document.getElementById("imageInput");
var canvas = document.getElementById("canvas");
var canvas2 = document.getElementById("canvas2");
 originalImage = new SimpleImage(fileInput);
 otherImage = new SimpleImage(fileInput);
originalImage.drawTo(canvas);
otherImage.drawTo(canvas2);

}

function makeGrey(){
for(var pixel of otherImage.values()){
var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
pixel.setRed(avg);
pixel.setGreen(avg);
pixel.setBlue(avg);
}
var canvas = document.getElementById("canvas");
otherImage.drawTo(canvas2);

}
