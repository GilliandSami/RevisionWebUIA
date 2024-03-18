// Étape 5 (suite) : Définition d'un élément web personnalisé pour représenter une chanson

// Crée un nouvel événement personnalisé 'play_click'. Cet événement peut être écouté et géré ailleurs dans l'application
const playClick = new CustomEvent('play_click')

class SongItem extends HTMLElement {
  connectedCallback() {
    // Définit le HTML interne de l'élément. 
    // Utilise le modèle de littéraux de gabarit pour insérer dynamiquement l'attribut 'title' de l'élément dans le HTML.

    this.innerHTML =
      `<a href="#">
    <div class="list-item-title">${this.getAttribute('title')}</div>
    <div class="list-item-actions">
      <button type="button" class="icon-button favorite-button ">
        <span class="material-icons">favorite</span>
      </button>
      <button type="button" class="icon-button play-button">
        <span class="material-icons">play_arrow</span>
      </button>
    </div>
  </a>`

    // Ajoute un écouteur d'événements sur le bouton de lecture. Lorsque ce bouton est cliqué, l'événement par défaut est empêché
    // (par exemple, si le bouton est dans un formulaire, cela empêcherait le formulaire de se soumettre) et l'événement personnalisé 'play_click'
    // est déclenché sur l'élément. Cela permet à d'autres parties de l'application d'écouter et de réagir à cet événement.
    this.querySelector('.play-button').addEventListener('click', (e) => {
      e.preventDefault()
      this.dispatchEvent(playClick)
    })
  }
}
customElements.define('song-item', SongItem)
