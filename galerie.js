// Récupération de toutes les photos
const photos = Array.from(document.querySelectorAll('.photo'));

// Tri des photos par date
photos.sort((a, b) => {
  const dateA = new Date(a.dataset.date);
  const dateB = new Date(b.dataset.date);
  return dateB - dateA; // Pour trier dans l'ordre décroissant (du plus récent au plus ancien)
});

// Réorganisation des éléments dans la galerie après le tri
const gallery = document.querySelector('.gallery');
photos.forEach(photo => gallery.appendChild(photo));