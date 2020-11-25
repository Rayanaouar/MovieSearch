const API_TOKEN = "cce68fd8162864a0236994af9389fbae"

export function getFilmsFromApiWithSearchedText(text,page){
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text + "&page=" + page
    return fetch(url)
    .then((Response)=>Response.json())
    .catch((error) =>console.error(error))
}

export function getImageFromApi(name){
    return 'https://image.tmdb.org/t/p/w300' + name
}
 export function getFilmDetailFromApi(id){
     const url = 'https://api.themoviedb.org/3/movie/'+ id +'?api_key='+ API_TOKEN + '&language=fr'
     return fetch(url)
     .then((Response)=>Response.json())
     .catch((error)=>console.error(error))
 }

 export  function getPopularFilms(){
    const url = 'https://api.themoviedb.org/3/movie/popular?api_key=' + API_TOKEN + '&language=fr&page=' + 1
 }