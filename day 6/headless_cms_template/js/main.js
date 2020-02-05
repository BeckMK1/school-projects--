"use strict";
// json
const movies = "http://wordpress.beckmk.dk/wp-json/wp/v2/posts?_embed";
const action = "http://wordpress.beckmk.dk/wp-json/wp/v2/posts?_embed&categories=21";
const drama = "http://wordpress.beckmk.dk/wp-json/wp/v2/posts?_embed&categories=24";
// fetch json
function showAll(){
fetch(movies)
  .then(function(response) {
    return response.json();
  })
  .then(function(posts) {
    console.log(posts);
    appendPosts(posts)
  });
};
showAll();

// action
function genreAction(){
fetch(action)
.then(function(response){
return response.json()
})
.then(function(genres){
appendAction(genres)
});
};
genreAction();
// 

function genreDrama(){
  fetch(drama)
  .then(function(response){
  return response.json()
  })
  .then(function(genres){
  appendDrama(genres)
  });
  };
  genreDrama();


// append posts
function appendPosts(posts) {
  let htmlTemplate ="";
  for (let post of posts){
  htmlTemplate += `
  <article>
  <img src="${getFeaturedImageUrl(post)}">
  <h2>${post.title.rendered}</h2>
  ${post.content.rendered}
  </article>
  `;
  }
document.querySelector("#movies").innerHTML = htmlTemplate;
};

// append action
function appendAction(genres){
let htmlTemplate ="";
for(let genre of genres){
htmlTemplate +=`
<article>
<h2>${genre.title.rendered}</h2>
${genre.content.rendered}
</article>
`
}
document.querySelector("#actionSelect").innerHTML = htmlTemplate;
};
function appendDrama(genres){
  let htmlTemplate ="";
  for(let genre of genres){
  htmlTemplate +=`
  <article>
  <h2>${genre.title.rendered}</h2>
  ${genre.content.rendered}
  </article>
  `
  }
  document.querySelector("#dramaSelect").innerHTML = htmlTemplate;
  };
function hideAction(){
let showAndHide = document.querySelector("#actionSelect");
if (showAndHide.style.display ==="none"){
showAndHide.style.display = "block";
} else{
showAndHide.style.display = "none";
}
};
function hideDrama(){
  let showAndHide = document.querySelector("#dramaSelect");
  if (showAndHide.style.display ==="none"){
  showAndHide.style.display = "block";
  } else{
  showAndHide.style.display = "none";
  }
  };

// get the featured image url
function getFeaturedImageUrl(post) {
  let imageUrl = "";
  if (post._embedded['wp:featuredmedia']) {
    imageUrl = post._embedded['wp:featuredmedia'][0].source_url;
  }
  return imageUrl;
};
// function search(value) {
//   let searchQuery = value.toLowerCase();
//   let filteredMovies = [];
//   for(let post of posts){
//     let title = post.title.rendered.toLowerCase();
//     if (title.includes(searchQuery)) {
//       filteredMovies.push(post);
//     }
//   }
//   console.log(filteredMovies);
//   appendPosts(filteredMovies);
// };