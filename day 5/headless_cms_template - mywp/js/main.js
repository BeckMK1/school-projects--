"use strict";

const url = "http://wordpress.beckmk.dk/wp-json/wp/v2/posts?categories=1";
// const url = "https://api.cederdorff.com/wp-json/wp/v2/posts?_embed";

fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(posts) {
    console.log(posts);
    appendPosts(posts);
  });

function appendPosts(posts) {
let htmlTemplate ="";
for (let post of posts){
htmlTemplate += `
<article>
<h2>${post.title.rendered}</h2>
${post.content.rendered}
</article>
`;
}    
document.querySelector("#content").innerHTML = htmlTemplate;
}

// get the featured image url
function getFeaturedImageUrl(post) {
  let imageUrl = "";
  if (post._embedded['wp:featuredmedia']) {
    imageUrl = post._embedded['wp:featuredmedia'][0].source_url;
  }
  return imageUrl;
}