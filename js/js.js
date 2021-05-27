// Imterval Variables
var interval;
var avoidRecursion = true; // Control Interval
// Image Variable
var image1, image2, image3;
// Image Width and Height
var imageWidth = 50,
    imageHeight = 50;
// Div Width and Jeight
var divWidth, divHeight;
// Increment values for each images
var incrementXImage1 = 10;
var incrementXImage2 = 10;
var incrementYImage3 = 10;
// Position of Images at first
var image1X = 0;
var image2X = 0;
var image3Y = 0;
divWidth = document.getElementById("container").clientWidth;
console.log(divWidth);

// Function to make images move 
function startImages() {
    if (avoidRecursion) {
        image1 = document.images[0];
        image2 = document.images[1];
        image3 = document.images[2];

        divWidth = document.getElementById("container").clientWidth;
        divHeight = document.getElementById("container").clientHeight;
        interval = setInterval(function () {
            // Check First Image X Coordinate (Left Image)
            if (((image1X + incrementXImage1) > (parseInt(divWidth) - imageWidth)) || (image1X + incrementXImage1) < 0) {
                incrementXImage1 = -incrementXImage1;
            }
            // Check Second Image X Coordinate (Right Image)
            if (((image2X + incrementXImage2) > (parseInt(divWidth) - imageWidth)) || (image2X + incrementXImage2) < 0) {
                incrementXImage2 = -incrementXImage2;
            }
            // Check Third Image Y Coordinate (Bottom Image)
            if (((image3Y + incrementYImage3) > (parseInt(divHeight) - imageWidth)) || (image3Y + incrementYImage3) < 0) {
                incrementYImage3 = -incrementYImage3;
            }
            // Increment images position
            image1X += incrementXImage1;
            image2X += incrementXImage2;
            image3Y += incrementYImage3;
            // Move to new position
            image1.style.left = "" + image1X + "px";
            image2.style.right = "" + image2X + "px";
            image3.style.bottom = "" + image3Y + "px";

            // Avoid Recursion (Infinte Loop and makes images go fast fast fast) // Control Interval
            avoidRecursion = false;
        }, 100);
    }
}
// Function to make images stop
function stopImages() {
    clearInterval(interval);
    // Controll Interval
    avoidRecursion = true;
}