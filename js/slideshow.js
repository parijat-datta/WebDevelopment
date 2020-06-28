var images=["ami1.JPG","ami2.JPG","ami3.JPG","ami4.JPG"];
var caption=["Picture 1","Picture 2","Picture 3"];

var imageNumber=0;
var imageLength=images.length -1;

function changeImage(x){
imageNumber +=x;
if (imageNumber>imageLength){

	imageNumber=0;
}
if(imageNumber<0){
imageNumber=imageLength;

}
document.getElementById("slideshow").src=images[imageNumber];
document.getElementById("caption").innerHTML=caption[imageNumber];
return false;

}
function autoRun(){

	setInterval ("changeImage(1)",3000);
}