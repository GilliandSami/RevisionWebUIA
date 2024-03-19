// Étape 7 : Routage et initialisation de l'application SPA

import './elements/artists-cover.js'
import './elements/song-item.js'

import { displaySection, activateLink } from './helpers.js'

import { displayArtists } from './sections/artists.js'
import { displayArtistSongs, displaySearchSongs, displayFavoriteSongs, displayLyrics } from './sections/songs.js'

// Logique de routage basée sur l'URL pour décider quelle section afficher
const routeur = () => {
  const hash = window.location.hash || '#home'
  const hashs = hash.split('-')

  activateLink(hashs[0])

  switch (hashs[0]) {
    case '#artists':
      if (hashs[1]) {
        displaySection('list')
        displayArtistSongs(hashs[1])
      } else {
        displaySection('artists')
        displayArtists()
      }
      break;

    case '#player':
      displaySection('player')
      break;

    case '#home':
      displaySection('home')
      break;

    case '#search':
      displaySection('list')
      displaySearchSongs(hashs[1])
      break;

    case '#favorites':
      displaySection('list')
      displayFavoriteSongs()
      break;

    case '#songs':
      displaySection('lyrics');
      displayLyrics(hashs[1]);
      break;
  }
}

window.addEventListener('hashchange', routeur)

// Appel initial pour configurer la vue basée sur l'URL actuelle
routeur()


const searchButton = document.querySelector('#search-trigger')
const searchInput = document.querySelector('#search-input')

searchButton.addEventListener('click', () => {
  searchInput.classList.add('active')
})

searchInput.addEventListener('input', (e) => {
  window.location.hash = `#search-${encodeURIComponent(searchInput.value)}`
})
