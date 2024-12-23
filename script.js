// script.js

// Add smooth scroll effect for the navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  });



  // JavaScript to manage the carousel behavior
document.querySelectorAll('.project-carousel').forEach((carousel) => {
    const images = carousel.querySelectorAll('.carousel-image');
    let currentIndex = 0;
  
    // Function to show the current image
    function showImage(index) {
      images.forEach((image, i) => {
        image.classList.remove('active');
        if (i === index) {
          image.classList.add('active');
        }
      });
    }
  
    // Next Image
    carousel.querySelector('.right').addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    });
  
    // Previous Image
    carousel.querySelector('.left').addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    });
  
    // Initialize the carousel by showing the first image
    showImage(currentIndex);
  });
  
  