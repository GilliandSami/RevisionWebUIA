// Étape 5 (suite) : Définition d'un élément web personnalisé pour représenter une chanson

// Crée un nouvel événement personnalisé 'play_click'. Cet événement peut être écouté et géré ailleurs dans l'application
const playClick = new CustomEvent('play_click')
const favoriteClick = new CustomEvent('favorite_click')

class SongItem extends HTMLElement {

  static observedAttributes = ['favorite'];

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    // Définit le HTML interne de l'élément. 
    // Utilise le modèle de littéraux de gabarit pour insérer dynamiquement l'attribut 'title' de l'élément dans le HTML.
    const favoriteIcon = this.getAttribute('favorite') == 'true' ? 'favorite' : 'favorite_border';

    this.innerHTML =
      `<a href="#">
      <div class="list-item-title">${this.getAttribute('title')}</div>
      <div class="list-item-actions">
        <button type="button" class="icon-button favorite-button ">
          <span class="material-icons">${favoriteIcon}</span>
        </button>
        <button type="button" class="icon-button play-button">
          <span class="material-icons">play_arrow</span>
        </button>
      </div>
    </a>`

    // Ajoute un écouteur d'événements sur le bouton de lecture. Lorsque ce bouton est cliqué, l'événement par défaut 
    // est empêché et l'événement personnalisé 'play_click' est déclenché sur l'élément.
    this.querySelector('.play-button').addEventListener('click', (e) => {
      e.preventDefault() // Empêche l'action par défaut (par exemple, suivre le lien).
      this.dispatchEvent(playClick) // Déclenche l'événement 'play_click' sur cet élément.
    })

    this.querySelector('.favorite-button').addEventListener('click', (e) => {
      e.preventDefault()
      this.dispatchEvent(favoriteClick)
    })
  }
}

customElements.define('song-item', SongItem)
