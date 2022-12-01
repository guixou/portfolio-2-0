'use strict';



console.log("Slider charger")

var slide = new Array("assets/images/training-image-01.jpg", "assets/images/training-image-02.jpg", "assets/images/training-image-03.jpg", "assets/images/training-image-04.jpg");
var numero = 0;

function ChangeSlide(sens) {
    document.getElementById("slide").src = slide[sens-1];
    document.getElementById("li1").classList.remove("orange");
    document.getElementById("li2").classList.remove("orange");
    document.getElementById("li3").classList.remove("orange");
    document.getElementById("li4").classList.remove("orange");
    document.getElementById("li"+sens).classList.add("orange");
}
    
