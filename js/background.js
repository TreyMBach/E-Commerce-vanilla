// JavaScript for controlling background image visibility
const backgroundImages = document.querySelectorAll('.backgroundImages img');

let currentIndex = 0;

function showImage(index) {
  backgroundImages.forEach((image, i) => {
    if (i === index) {
      image.classList.add('visible');
    } else {
      image.classList.remove('visible');
    }
  });
}

function rotateImages() {
  currentIndex = (currentIndex + 1) % backgroundImages.length;
  showImage(currentIndex);
}

// Initially show the first image
showImage(currentIndex);

// Start rotating the images after 5 seconds
setTimeout(() => {
  setInterval(rotateImages, 5000); // Rotate every 5 seconds
}, 5000);
