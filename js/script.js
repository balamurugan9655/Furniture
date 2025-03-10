function openSidebar() {
    document.getElementById("sidebar").style.left = "0";
}
function closeSidebar() {
    document.getElementById("sidebar").style.left = "-250px";
}

// let currentIndex = 0;
//         const images = ["./image/"];

//         function showImage(index) {
//             document.getElementById("carousel-image").src = images[index];
//         }

//         function prevSlide() {
//             currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
//             showImage(currentIndex);
//         }

//         function nextSlide() {
//             currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
//             showImage(currentIndex);
//         }