// Étape 3 : Fournit des fonctions pour la communication avec l'API backend

const BASE_URL = 'https://webmob-ui-22-spotlified.herokuapp.com'

function loadJson(url) {
    return fetch(url)
        .then(response => {
            return response.json();
        });
}

function loadArtists() {
    const url = `${BASE_URL}/api/artists`;
    return loadJson(url);
}

function loadSongs(id) {
    const url = `${BASE_URL}/api/artists/${id}/songs`;
    return loadJson(url);
}

function loadSearchSongs(query) {
    const url = `${BASE_URL}/api/songs/search/${query}`;
    return loadJson(url);
}

export { loadArtists, loadSongs, loadSearchSongs }
