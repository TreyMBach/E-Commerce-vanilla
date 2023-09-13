// JavaScript for rotating product images
const productImages = document.querySelectorAll('.productImages img');
let currentIndex = 0;

function showImage(index) {
    productImages.forEach((image, i) => {
        if (i === index) {
            image.classList.add('active');
        } else {
            image.classList.remove('active');
        }
    });
}

function rotateImages() {
    currentIndex = (currentIndex + 1) % productImages.length;
    showImage(currentIndex);
}

// Start rotating the images (adjust the interval as needed)
const rotationInterval = setInterval(rotateImages, 3000); // Rotate every 3 seconds

// Stop rotating when the user hovers over the product showcase
const productShowcase = document.querySelector('.productShowcase');
productShowcase.addEventListener('mouseenter', () => {
    clearInterval(rotationInterval);
});

// Resume rotating when the user moves the mouse out
productShowcase.addEventListener('mouseleave', () => {
    rotationInterval = setInterval(rotateImages, 3000);
});