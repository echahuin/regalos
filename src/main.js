const slider = document.querySelector('.slider');
const images = slider.querySelectorAll('img');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');

let currentImage = 0;
let timer;

function showImage() {
    images.forEach((image, index) => {
        if (index === currentImage) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
}

function nextImage() {
    currentImage++;
    if (currentImage >= images.length) {
        currentImage = 0;
    }
    showImage();
}

function prevImage() {
    currentImage--;
    if (currentImage < 0) {
        currentImage = images.length - 1;
    }
    showImage();
}

function startTimer() {
    timer = setInterval(nextImage, 3000);
}

function stopTimer() {
    clearInterval(timer);
}

nextButton.addEventListener('click', () => {
    nextImage();
    stopTimer();
});

prevButton.addEventListener('click', () => {
    prevImage();
    stopTimer();
});

slider.addEventListener('mouseover', stopTimer);
slider.addEventListener('mouseout', startTimer);

showImage();
startTimer();


// dos

const slider_2 = document.querySelector('.slider_2');
const images_2 = slider_2.querySelectorAll('img');
const prevButton_2 = document.querySelector('.prev-btn_2');
const nextButton_2 = document.querySelector('.next-btn_2');

let currentImage_2 = 0;
let timer_2;

function showImage_2() {
    images_2.forEach((image, index) => {
        if (index === currentImage_2) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
}

function nextImage_2() {
    currentImage_2++;
    if (currentImage_2 >= images_2.length) {
        currentImage_2 = 0;
    }
    showImage_2();
}

function prevImage_2() {
    currentImage_2--;
    if (currentImage_2 < 0) {
        currentImage_2 = images_2.length - 1;
    }
    showImage_2();
}

function startTimer_2() {
    timer_2 = setInterval(nextImage_2, 3000);
}

function stopTimer_2() {
    clearInterval(timer_2);
}

nextButton_2.addEventListener('click', () => {
    nextImage_2();
    stopTimer_2();
});

prevButton_2.addEventListener('click', () => {
    prevImage_2();
    stopTimer_2();
});

slider_2.addEventListener('mouseover', stopTimer_2);
slider_2.addEventListener('mouseout', startTimer_2);

showImage_2();
startTimer_2();

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

if (isMobile) {

const slider = document.querySelector('.slider');
const slider_2 = document.querySelector('.slider_2');

let touchStartX = 0;
let touchEndX = 0;

slider.addEventListener('touchstart', (event) => {
    touchStartX = event.touches[0].clientX;
});

slider.addEventListener('touchmove', (event) => {
    touchEndX = event.touches[0].clientX;
});

slider.addEventListener('touchend', () => {
    handleGesture();
});

slider_2.addEventListener('touchstart', (event) => {
    touchStartX = event.touches[0].clientX;
});

slider_2.addEventListener('touchmove', (event) => {
    touchEndX = event.touches[0].clientX;
});

slider_2.addEventListener('touchend', () => {
    handleGesture();
});

function handleGesture() {
    if (touchEndX < touchStartX) {
        // Deslizar hacia la izquierda
        nextImage();
        stopTimer();
    }

    if (touchEndX > touchStartX) {
        // Deslizar hacia la derecha
        prevImage();
        stopTimer();
    }

    touchStartX = 0;
    touchEndX = 0;
}}