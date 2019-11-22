window.addEventListener("load", function() {

//Paso 1: Leo Storage
  var recuperoStorage = localStorage.getItem("seriesFavoritos");
  console.log(recuperoStorage);
  // Si todavía no tenía gifs favoritos
  if (recuperoStorage == null) {
    // Creo una lista vacia
    seriesFavoritos = [];
  } else {
    // Descomprimo el TEXTO que tenia en storage en el array que necesito trabajar
    seriesFavoritos = JSON.parse(recuperoStorage);
  }
  for (var i = 0; i < seriesFavoritos.length; i++) {
    if(!seriesFavoritos[i].empty) {
      // BUSCAR ESE SERIE Y MOSTRARLO
      fetch("https://api.themoviedb.org/3/tv/" + seriesFavoritos[i] + "?api_key=2e2296c9e03da266b3fa417a70458299&language=en-US")
        .then(function(response) {
          return response.json();
        })
        .then(function(serie) {
          console.log(serie)
        document.querySelector(".listaFav").innerHTML += '<li>'+ '<a href="../detalles-serie/detalles-serie.html?id='+ serie.id +'">' + '<img src="https://image.tmdb.org/t/p/w300/' + serie.poster_path + '">' + '</a>'+ '</li>'

        })
    }
  }
})
