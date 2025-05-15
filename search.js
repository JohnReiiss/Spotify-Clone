const resultArtist = document.getElementById("result-artist");
const playlistContainer = document.getElementById("result-playlists");
const searchInput = document.getElementById("search-input");

function requestApi(searchTerm) {
  fetch(`http://localhost:3000/api/artists`)

    .then((response) => {
      if (!response.ok) {
        throw new Error(`Erro na API: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
  console.log("Dados filtrados recebidos da API:", data);
  displayResults(data.artists);
})
    .catch((error) => console.error("Erro ao buscar dados:", error));
}

function displayResults(results) {
  hidePlaylists();
  const artistImage = document.getElementById("artist-img");
  const artistName = document.getElementById("artist-name");

  console.log("Resultados processados:", results);

  const searchTerm = searchInput.value.toLowerCase().trim();

  const filteredResults = results.filter((artist) =>
    artist.name.toLowerCase().includes(searchTerm)
  );

  if (filteredResults.length > 0) {
    const firstResult = filteredResults[0];
    artistImage.src = firstResult.urlImg;
    artistName.innerText = firstResult.name;
    resultArtist.classList.remove("hidden");
  } else {
    resultArtist.classList.add("hidden");
    console.warn("Nenhum artista correspondente encontrado.");
  }
}

function hidePlaylists() {
  playlistContainer.classList.add("hidden");
}

searchInput.addEventListener("input", function () {
  const searchTerm = searchInput.value.toLowerCase().trim();

  if (searchTerm.length < 2) {
    resultArtist.classList.add("hidden");
    playlistContainer.classList.remove("hidden");
    return;
  }

  requestApi(searchTerm);
});
