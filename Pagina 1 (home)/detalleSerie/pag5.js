window.onload = function(){

  // FAVORITOS
  var recuperoStorage = localStorage.getItem("seriesFavoritos");
    // Si todavía no tenía gifs favoritos
    if (recuperoStorage == null) {
      // Creo una lista vacia
      seriesFavoritos = [];
    } else {
      // Descomprimo el TEXTO que tenia en storage en el array que necesito trabajar
      seriesFavoritos = JSON.parse(recuperoStorage);
    }

// ////////////////Info de la serie
var url_string = window.location.href;
var url = new URL(url_string);
var id = url.searchParams.get("id");
  console.log(id);
fetch("https://api.themoviedb.org/3/tv/" + id + "?api_key=c737da8edba65cd6dc516d8db8f7bf5b&language=en-US")
.then(function(respuesta){
 return respuesta.json();
})
.then(function(datos){
 console.log(datos);
  var info_conteiner = document.querySelector(".contenedorinfoserie");
  var foto_conteiner = document.querySelector(".contenedorposter");
console.log(foto_conteiner);

  info_conteiner.innerHTML += '<h2><strong>'+  datos.name + '</strong></h2>'

  var gnre = datos.genres
  var losgeneros ="";
  for (var i=0; i<gnre.length; i++){
    losgeneros += ' <a href="../seriesPorGenero/seriesPorGenero.html?id='+ datos.genres[i].id +'&name='+ datos.genres[i].name +'">' + datos.genres[i].name + '</a> '

  }
  info_conteiner.innerHTML += '<h3><strong>Géneros: </strong>' +  losgeneros + '</h3>'

  info_conteiner.innerHTML += '<h3><strong>Lenguaje original: </strong>'+  datos.original_language + '</h3>'

  info_conteiner.innerHTML += '<h3><strong>Sinopsis:</strong>'+  ' <p><em>' + datos.overview + '</em></p></h3>'

  // fecha de estreno
  info_conteiner.innerHTML += '<h3><strong>Fecha de estreno: </strong>'+  datos.first_air_date + '</h3>'

  // poster
  console.log(datos.poster_path)
    var imagen = "https://image.tmdb.org/t/p/w500/"+ datos.poster_path;
     foto_conteiner.innerHTML += "<img src="+ imagen + ">";
     console.log(foto_conteiner);
})
///////TRAILER
fetch("https://api.themoviedb.org/3/tv/" + id + "/videos?api_key=c737da8edba65cd6dc516d8db8f7bf5b&language=en-US")
  .then(function(respuesta){
    return respuesta.json();
  })
  .then(function(datos){
    console.log(datos);
     var div_trailer = document.querySelector(".contenedortrailer");
     var trailer = datos.results;

     for (var i=0; i<trailer.length; i++){
       div_trailer.innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + datos.results[i].key + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'


     }
   })



       console.log(recuperoStorage);
    /*FavoritoS */
     var datos = new URLSearchParams(location.search);
     var id = datos.get("id");
     if (seriesFavoritos.includes(id)) {
       document.querySelector(".buttonFav").innerHTML = "QUITAR DE FAVORITOS";
     }
     fetch("https://api.themoviedb.org/3/tv/" + id + "?api_key=c737da8edba65cd6dc516d8db8f7bf5b&language=en-US")
       .then(function(response) {
         return response.json();
       })

       .then(function(id) {
       })
       console.log(id);
       var botonFavorito = document.querySelector(".buttonFav")
       console.log(botonFavorito);
       document.querySelector(".buttonFav").onclick = function() {

       //Paso 2: Modificar la informacion
       // Si la serie ya era favorito
       if (seriesFavoritos.includes(id)) {
         // Lo quito
         var index = seriesFavoritos.indexOf(id);
         seriesFavoritos.splice(index, 1);
         document.querySelector(".buttonFav").innerHTML = "AGREGAR FAVORITO";
       } else {
         //Lo agrego
         seriesFavoritos.push(id);
         document.querySelector(".buttonFav").innerHTML = "QUITAR DE FAVORITOS";
       }
       //Paso 3: Escribir en storage
       var infoParaStorage = JSON.stringify(seriesFavoritos);
       localStorage.setItem("seriesFavoritos", infoParaStorage);
     }
     console.log(localStorage);



/////////////////// RECOMENDADOS
fetch("https://api.themoviedb.org/3/tv/" + id + "/recommendations?api_key=c737da8edba65cd6dc516d8db8f7bf5b&language=en-US&page=1")
  .then(function(respuesta){
    return respuesta.json();
  })
  .then(function(datos){
    console.log(datos);
     var recomen = document.querySelector("#seriesRecomendados");

     for (var i=0; i<datos.results.length; i++){
       document.querySelector("#seriesRecomendados").innerHTML += '<li><a href=pagina5.html?id='+ datos.results[i].id +'"> ' + '<img src="https://image.tmdb.org/t/p/w500/' + datos.results[i].poster_path + '">' + '</a></li>'
     }
   })





}
