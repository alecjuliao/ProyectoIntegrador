window.onload = function(){

  fetch("https://api.themoviedb.org/3/genre/tv/list?api_key=c737da8edba65cd6dc516d8db8f7bf5b&language=en-US")
  .then(function(response){
   return response.json();
  })
  .then(function(datos){
   console.log(datos);
    var generos = document.querySelector(".listaGeneros");

    for (var i=0; i<datos.genres.length; i++){
      generos.innerHTML += '<li><a href="../seriesPorGenero/seriesPorGenero.html?id='+ datos.genres[i].id +'&name='+ datos.genres[i].name +'">'+  datos.genres[i].name + '</a></li>'
    }
  })






}
