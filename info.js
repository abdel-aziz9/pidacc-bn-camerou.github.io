// Sélectionner le slider
const slider = document.querySelector('.slider');

// Obtenir la largeur d'une image
const imageWidth = slider.clientWidth / 3;

// Défiler toutes les images dans le slider
function slideImages() {
  slider.style.transform = translateX(-${imageWidth}px);
  setTimeout(() => {
    slider.appendChild(slider.firstElementChild);
    slider.style.transform = 'translateX(0)';
  }, 5000); // Défilement toutes les 5 secondes
}

// Appeler la fonction de défilement des images
slideImages();