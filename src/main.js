const slider = document.querySelector('.slider');
const images = slider.querySelectorAll('img');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');

// Obtener referencias a los elementos <span> de la fecha actual
// const currentDateStart = document.getElementById('current-date-start');
const currentDateEnd = document.getElementById('current-date-end');

// Función para obtener la fecha actual en formato DD/MM/AAAA
function getCurrentDate() {
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
}

// Actualizar la fecha actual
const currentDate = getCurrentDate();
// currentDateStart.textContent = currentDate;
currentDateEnd.textContent = currentDate;


let currentImage = 0;
let timer;

function showImage() {
    images.forEach((image, index) => {
      if (index === currentImage) {
        image.classList.add('active');
      } else {
        image.classList.remove('active');
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

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

if (isMobile) {

const slider = document.querySelector('.slider');


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
function handleGesture() {
    if (touchEndX < touchStartX) {
        
        nextImage();
        stopTimer();
    }

    if (touchEndX > touchStartX) {
        
        prevImage();
        stopTimer();
    }

    touchStartX = 0;
    touchEndX = 0;
}}



