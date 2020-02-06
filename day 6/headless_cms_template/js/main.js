"use strict";
// json
const movies = "http://wordpress.beckmk.dk/wp-json/wp/v2/posts?_embed";
const categories = "http://wordpress.beckmk.dk/wp-json/wp/v2/categories";

let movies = [];
// fetch json
function showAll(){
fetch(movies)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    console.log(json);
    appendPosts(json);
    movies = json
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
document.querySelector("#movies").innerHTML = htmlTemplate;
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
fetch(categories)
.then(function(response){
 return response.json();
})
.then(function(categories){
  appendGenres(categories);
});
}
getGenres();
function appendGenres(genres){
let htmlTemplate ="";
for(let genre of genres){
htmlTemplate +=`
<option value="${genre.id}">${genre.name}</option>
`;}
document.querySelector("#se")
}
// get the featured image url
function getFeaturedImageUrl(post) {
  let imageUrl = "";
  if (post._embedded['wp:featuredmedia']) {
    imageUrl = post._embedded['wp:featuredmedia'][0].source_url;
  }
  return imageUrl;
};
