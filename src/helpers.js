// Étape 4 : Fonctions d'aide pour manipuler l'affichage des sections et activer les liens de navigation

const displaySection = (id) => {
  // Logique pour afficher la section demandée

  const activeSection = document.querySelector('section.active')
  activeSection.classList.remove('active')

  const newSection = document.querySelector(`#${id}-section`)
  newSection.classList.add('active')

}

const activateLink = (id) => {
  // Logique pour activer le lien de navigation correspondant

  const activeLink = document.querySelector(`nav a.active`)
  activeLink?.classList.remove('active')

  const link = document.querySelector(`nav a[href="${id}"]`)
  link?.classList.add('active')
}


export { displaySection, activateLink }
