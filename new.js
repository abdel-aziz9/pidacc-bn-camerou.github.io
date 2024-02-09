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






var counter = 1;
var intervalId;

function startSlider() {
    intervalId = setInterval(function() {
        document.getElementById('radio' + counter).checked = true;
        counter++;
        if (counter > 4) {
            counter = 1;
        }
    }, 2000);
}

function restartSlider() {
    clearInterval(intervalId);
    startSlider();
}

startSlider();

// Gestionnaire d'événement pour les clics sur les boutons radio
var radioButtons = document.querySelectorAll('input[type="radio"]');
radioButtons.forEach(function(radio) {
    radio.addEventListener('click', function() {
        counter = parseInt(this.id.replace('radio', '')); // Met à jour le compteur en fonction de l'ID du bouton radio cliqué
        restartSlider();
    });
});





