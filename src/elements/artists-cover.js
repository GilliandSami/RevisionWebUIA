// Étape 5 : Définition d'un élément web personnalisé pour représenter un artiste

class ArtistCover extends HTMLElement {
  connectedCallback() {
    const newContent = document.querySelector('#artist-list-item-template')

    // Clone le contenu du template pour créer une nouvelle instance de cet élément.
    // `true` indique que le clonage doit inclure aussi les descendants du nœud, donc toute la structure interne du template.
    const newElement = newContent.content.cloneNode(true)

    // Définit le lien (href) de l'élément <a> dans le nouvel élément cloné en utilisant l'attribut 'href' de l'élément personnalisé.
    newElement.querySelector('a').href = this.getAttribute('href')
    newElement.querySelector('img').src = this.getAttribute('cover')
    newElement.querySelector('div').innerText = this.getAttribute('name')

    // Remplace les enfants actuels de l'élément personnalisé par le nouvel élément cloné.
    // Cela permet d'afficher le contenu correct de l'artiste dans le DOM.
    this.replaceChildren(newElement)
  }
}

// Enregistre l'élément personnalisé 'artist-cover' auprès du navigateur, en associant la classe ArtistCover à ce nom.
// Cela permet d'utiliser l'élément <artist-cover> dans le HTML.
customElements.define('artist-cover', ArtistCover)
