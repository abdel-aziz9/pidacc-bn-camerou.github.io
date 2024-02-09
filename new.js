$(document).ready(function() {
  var slides = $('.slide');
  var currentIndex = 0;

  function showSlide(index) {
    slides.removeClass('active');
    slides.eq(index).addClass('active');
  }

  function nextSlide() {
    currentIndex++;
    if (currentIndex >= slides.length) {
      currentIndex =0;
    }
    showSlide(currentIndex);
  }

  setInterval(nextSlide, 5000); // Changer d'image toutes les 5 secondes
});





