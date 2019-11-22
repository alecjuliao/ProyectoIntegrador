
window.addEventListener("load", function() {
  var queryString = location.search; //Capturamos la query string del navegador
  var searchParams = new URLSearchParams(queryString); //Obtenemos las posiciones y los datos de la queryString
  var buscar = searchParams.get("mirar"); //con el método get obtenenemos el valor del término a buscar. En este obtenenemos lo que escribió el usuario en el campo de busqueda cuyo "name" es "search" (name="search").
  var page = 1;
  vermas()
  function vermas() {
    var url = "https://api.themoviedb.org/3/search/tv?api_key=c737da8edba65cd6dc516d8db8f7bf5b&language=en-US&query=" + buscar + '&page=' + page
    fetch(url)
      .then(function(respuesta) {
        return respuesta.json();
      })
      .then(function(datos) {
        var destino = document.querySelector(".resultados");
        var datosFinales = datos.results;
        var titulo = document.querySelector(".primero");
        for (var i = 0; i < datosFinales.length; i++) {
            destino.innerHTML += '<li><a href="../detalleSerie/pagina5.html?id=' + datos.results[i].id + '"> ' + '<img src="https://image.tmdb.org/t/p/w300/' + datos.results[i].poster_path + '">' + '</a></li>'

        }

      })
  }

});
