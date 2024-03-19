// Étape 6 (suite) : Logique pour afficher les chansons d'un artiste sélectionné
import { loadSongs, loadSearchSongs } from '../api.js'
import { setItem, getItem, getItems, removeItem } from '../local-storage.js'
import playSong from './player.js'

const listSectionTitle = document.querySelector('#list-section h4')
const songList = document.querySelector('.list')


// Logique d'affichage des chansons...
const displaySongArray = (songs) => {
  songList.innerHTML = ''

  songs.forEach((song) => {
    const newElement = document.createElement('song-item')
    newElement.setAttribute('title', song.title)
    newElement.setAttribute('favorite', !!getItem(song.id));

    newElement.addEventListener('play_click', () => {
      playSong(song, songs)
    });

    newElement.addEventListener('favorite_click', () => {
      if (getItem(song.id)) {
        removeItem(song.id);
      } else {
        setItem(song.id, song);
      }

      newElement.setAttribute('favorite', !!getItem(song.id));
    });

    songList.appendChild(newElement);
  })
}

const displayArtistSongs = (id) => {
  loadSongs(id).then((songs) => {
    listSectionTitle.innerHTML = `Artistes > ${songs[0].artist.name}`

    displaySongArray(songs)
  })
}

const displaySearchSongs = (query) => {
  loadSearchSongs(query).then((songs) => {
    listSectionTitle.innerHTML = `Recherche`
    displaySongArray(songs)
  })
}

const displayFavoriteSongs = () => {
  const allSongs = getItems();

  listSectionTitle.innerHTML = 'Favoris';
  displaySongArray(allSongs);
}

export { displayArtistSongs, displaySearchSongs, displayFavoriteSongs }
