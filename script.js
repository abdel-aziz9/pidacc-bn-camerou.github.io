const data = [
  { col1: 'Donnée1', col2: 'Donnée1', col3: 'Donnée1' },
  { col1: 'Donnée2', col2: 'Donnée2', col3: 'Donnée2' },
  { col1: 'Donnée3', col2: 'Donnée3', col3: 'Donnée3' },
  { col1: 'Donnée4', col2: 'Donnée4', col3: 'Donnée4' },
  { col1: 'Donnée5', col2: 'Donnée5', col3: 'Donnée5' },
  { col1: 'Donnée6', col2: 'Donnée6', col3: 'Donnée6' },
  { col1: 'Donnée7', col2: 'Donnée7', col3: 'Donnée7' },
  // Ajoutez plus de données au besoin
];

const table = document.getElementById('data-body');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
let currentPage = 0;
const itemsPerPage = 5;

// ... (code précédent)

function showData(page) {
  table.innerHTML = '';
  for (let i = page * itemsPerPage; i < (page + 1) * itemsPerPage; i++) {
    if (i < data.length) {
      const row = table.insertRow();
      const cell1 = row.insertCell(0);
      const cell2 = row.insertCell(1);
      const cell3 = row.insertCell(2);
      cell1.innerText = data[i].col1;
      cell2.innerText = data[i].col2;
      // Utilisation d'un lien téléchargeable pour la colonne 3
      const pdfLink = document.createElement('a');
      pdfLink.href = 'chemin/vers/votre/fichier.pdf'; // Remplacez ceci par le chemin réel:
      pdfLink.innerText = 'Télécharger PDF';
      pdfLink.download = 'nom-du-fichier.pdf'; // Spécifier le nom du fichier à télécharger
      cell3.appendChild(pdfLink);
    }
  }
}

// ... (code suivant)

function showNext() {
  currentPage = Math.min(currentPage + 1, Math.ceil(data.length / itemsPerPage) - 1);
  showData(currentPage);
  updatePaginationState();
}

function showPrev() {
  currentPage = Math.max(currentPage - 1, 0);
  showData(currentPage);
  updatePaginationState();
}

function updatePaginationState() {
  prevButton.disabled = currentPage === 0;
  nextButton.disabled = currentPage === Math.ceil(data.length / itemsPerPage) - 1;
}

// Initialiser l'affichage avec la première page
showData(currentPage);
updatePaginationState();







