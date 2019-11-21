window.onload = function (){
  fetch("https://api.themoviedb.org/3/tv/top_rated?api_key=c737da8edba65cd6dc516d8db8f7bf5b&language=en-US&page=1"s)
    .then(function(response) {
      return response.json();
    })
    .then(function(rated) {
    var seriesRated = document.querySelector ("listaMejorPunt")
for (var i = 0; i < rated.results.lenght; i++)
seriesRated.innerHTML += '<li>' + '<a href="../info/info.html">' + '<img src="https://image.tmdb.org/t/p/w300/' + rated.results[i].poster_path + '">' + '</a>' + '</li>'





})
fetch("https://api.themoviedb.org/3/tv/popular?api_key=c737da8edba65cd6dc516d8db8f7bf5b&language=en-US&page=1")
  .then(function(response) {
    return response.json();
  })

  .then(function(rated) {
  var seriesRated = document.querySelector ("#populares")
  for(var i = 0; i < rated.results.length; i++) {
         console.log(rated.results[i]);
           seriesRated.innerHTML += '<li>'+ '<a href="#">' + '<img src="https://image.tmdb.org/t/p/w300/' + rated.results[i].poster_path + '">' + '</a>'+ '</li>'

       }




})


fetch("https://api.themoviedb.org/3/tv/airing_today?api_key=c737da8edba65cd6dc516d8db8f7bf5b&language=en-US&page=1")
  .then(function(response) {
    return response.json();
  })

  .then(function(rated) {
  var seriesRated = document.querySelector ("#alAire")
  for(var i = 0; i < rated.results.length; i++) {
         console.log(rated.results[i]);
           seriesRated.innerHTML += '<li>'+ '<a href="#">' + '<img src="https://image.tmdb.org/t/p/w300/' + rated.results[i].poster_path + '">' + '</a>'+ '</li>'

       }




})






}
