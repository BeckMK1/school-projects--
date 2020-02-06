"use strict";
// json

let movies = [];

// fetch json
function showAll(){
fetch("http://wordpress.beckmk.dk/wp-json/wp/v2/posts?_embed")
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    console.log(json);
    appendPosts(json);
    movies = json;
  });
};
showAll();

// append posts
function appendPosts(movies) {
  let htmlTemplate ="";
  for (let movie of movies){
  htmlTemplate += `
  <article>
  <img src="${movie.acf.img}">
  <h2>${movie.title.rendered}</h2>
  <p>${movie.acf.description}</p>
  </article>
  `;
  }
document.querySelector("#movies-container").innerHTML = htmlTemplate;
};

// search
function search(value) {
  let searchQuery = value.toLowerCase();
  let filteredMovies = [];
  for(let movie of movies){
    let title = movie.title.rendered.toLowerCase();
    if (title.includes(searchQuery)) {
      filteredMovies.push(movie);
    }
  }
  console.log(filteredMovies);
  appendPosts(filteredMovies);
};

function getGenres(){
fetch("http://wordpress.beckmk.dk/wp-json/wp/v2/categories")
.then(function(response){
 return response.json();
})
.then(function(categories){
  appendGenres(categories);
  console.log(categories);
});
}
getGenres();

function appendGenres(genres){
let htmlTemplate ="";
for(let genre of genres){
htmlTemplate +=`
<option value="${genre.id}">${genre.name}</option>
`;
}
document.querySelector("#select-genre").innerHTML += htmlTemplate;
}
function genreSelected(genreId){
console.log(`genre ID: ${genreId}`);
if (genreId){
fetch(`http://wordpress.beckmk.dk/wp-json/wp/v2/posts?_embed&categories=${genreId}`)
.then(function(response){
  return response.json(); 
})
.then(function(movies) {
console.log(movies);
appendMoviesByGenre(movies);
});
} else {
 document.querySelector("#movies-by-genre-container").innerHTML =`
  <p>Please, select genre</p>
 `; 
  }
}

function appendMoviesByGenre(moviesByGenre){
  let htmlTemplate = "";

  for (let movie of moviesByGenre) {
  htmlTemplate +=`
  <article>
  <h2>${movie.title.rendered} (${movie.acf.year})</h2>
  <img src="${movie.acf.img}">
  <p>${movie.acf.description}</p>
  iframe src="${movie.acf.trailer}"></iframe>
  </article>
  `;
  }
  if (moviesByGenre.length === 0) {
    htmlTemplate = `
    <p> no movies</p>
    `;
  }
document.querySelector("#movies-by-genre-container").innerHTML = htmlTemplate;
}

