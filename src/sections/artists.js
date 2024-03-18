// Étape 6 : Logique pour afficher les artistes en utilisant les données de l'API

import { loadArtists } from '../api.js'

const artistList = document.querySelector('.artist-list')

// Logique d'affichage des artistes...
const displayArtists = () => loadArtists().then((artists) => {

  artistList.replaceChildren()

  artists.forEach((artist) => {
    const newElement = document.createElement('artist-cover');
    newElement.setAttribute('href', `#artists-${artist.id}`);
    newElement.setAttribute('name', artist.name);
    newElement.setAttribute('cover', artist.image_url);
    artistList.appendChild(newElement);
  })
})

export { displayArtists }
