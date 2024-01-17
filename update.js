const lirePlusButtons = document.querySelectorAll('.lire-plus');

lirePlusButtons.forEach(button => {
  button.addEventListener('click', () => {
    const item = button.parentNode;
    const contenuComplet = item.querySelector('.contenu-complet');
    const isExpanded = contenuComplet.style.display === 'block';

    if (isExpanded) {
      contenuComplet.style.display = 'none';
      button.textContent = 'Voir plus';
    } else {
      contenuComplet.style.display = 'block';
      button.textContent = 'Voir moins';
    }
  });
});


