
var width = window.innerWidth;

var image = document.getElementsByClassName('image');



function parallaxDown() {
    new simpleParallax(image, {
        scale: 2,
        orientation: "down",
        maxTransition: 75,
        overflow: true,
        delay: 0.3,
    });
    console.log("down");
}
    
function parallaxRight() {
    new simpleParallax(image, {
        scale: 1.3,
        orientation: "right",
        maxTransition: 75,
        overflow: true,
        delay: 0.3,
    });
    console.log("right");
}
let parallax = width < 768 ? true : false;
if (parallax) {
    parallaxRight();
} else {
    parallaxDown();
    }


