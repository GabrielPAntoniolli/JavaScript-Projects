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

function makeRainbow() {
    resetImage();
    var h = otherImg.getHeight();

    for (var pixel of otherImg.values()) {

        var y = pixel.getY();

        var avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;

        if (y <= h / 7) {
            if (avg < 128) {

                pixel.setRed(2 * avg);
                pixel.setGreen(0);
                pixel.setBlue(0);
            } else {
                pixel.setRed(255);
                pixel.setGreen(2 * avg - 255);
                pixel.setBlue(2 * avg - 255);
            }
        }
        if (y > h / 7 && y <= h / 7 * 2) {
            if (avg < 128) {
                pixel.setRed(2 * avg);
                pixel.setBlue(0.8 * avg);
                pixel.setBlue(0);

            } else {
                pixel.setRed(255);
                pixel.setGreen(1.2 * avg - 51);
                pixel.setBlue(2 * avg - 255);

            }


        }
        if (y > h / 7 * 2 && y <= h / 7 * 3) {
            if (avg < 128) {
                pixel.setRed(2 * avg);
                pixel.setBlue(2 * avg);
                pixel.setBlue(0);

            } else {
                pixel.setRed(255);
                pixel.setGreen(255);
                pixel.setBlue(2 * avg - 255);
            }
        }
        if (y > h / 7 * 3 && y <= h / 7 * 4) {
            if (avg < 128) {
                pixel.setRed(0);
                pixel.setBlue(2 * avg);
                pixel.setBlue(0);

            } else {
                pixel.setRed(2 * avg - 255);
                pixel.setGreen(255);
                pixel.setBlue(2 * avg - 255);
            }
        }
        if (y > h / 7 * 4 && y <= h / 7 * 5) {
            if (avg < 128) {
                pixel.setRed(0);
                pixel.setBlue(0);
                pixel.setBlue(2 * avg);

            } else {
                pixel.setRed(2 * avg - 255);
                pixel.setGreen(2 * avg - 255);
                pixel.setBlue(255);
            }
        }
        if (y > h / 7 * 5 && y <= h / 7 * 6) {
            if (avg < 128) {
                pixel.setRed(0.8 * avg);
                pixel.setBlue(0);
                pixel.setBlue(2 * avg);

            } else {
                pixel.setRed(1.2 * avg - 51);
                pixel.setGreen(2 * avg - 255);
                pixel.setBlue(255);
            }
        }
        if (y > h / 7 * 6 && y <= h) {
            if (avg < 128) {
                pixel.setRed(1.6 * avg);
                pixel.setBlue(0);
                pixel.setBlue(1.6 * avg);

            } else {
                pixel.setRed(0.4 * avg + 153);
                pixel.setGreen(2 * avg - 255);
                pixel.setBlue(0.4 * avg + 153);
            }
        }
    }
    var cnv = document.getElementById("canvas");
    otherImg.drawTo(cnv);
}


