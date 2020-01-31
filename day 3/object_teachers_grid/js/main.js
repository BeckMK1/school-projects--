"use strict";

// declaring teacher objects

// Birgitte
let teachers = [{
  name: "Birgitte Kirk Iversen",
  initials: "bki",
  mail: "bki@baaa.dk",
  phone: "72286316",
  address: "Sønderhøj 30, 8260 Viby J",
  position: "Senior Lecturer",
  department: "Multimedia Design",
  img: "https://www.baaa.dk/media/u4gorzsd/birgitte-kirk-iversen2.jpg"
},
{
  name: "Gertie Margrethe Kolding Jensen",
  initials: "gkj",
  mail: "gkj@baaa.dk",
  phone: "72286349",
  address: "Sønderhøj 30, 8260 Viby J",
  position: "Senior Lecturer",
  department: "Multimedia Design",
  img: "https://www.baaa.dk/media/iabpvdga/gertie-kolding.jpg"
},
// Kim
{
  name: "Kim Elkjær Marcher-Jepsen",
  initials: "kije",
  mail: "kije@baaa.dk",
  phone: "7228 6325",
  address: "Sønderhøj 30, 8260 Viby J",
  position: "Lecturer",
  department: "Multimedia Design",
  img: "https://www.baaa.dk/media/3zihz21l/kim-elkjaer-marcher-jepsen.jpg"
},
// Rasmus
{
  name: "Rasmus Cederdorff",
  initials: "race",
  mail: "race@baaa.dk",
  phone: "72286318",
  address: "Sønderhøj 30, 8260 Viby J",
  position: "Lecturer",
  department: "Programmes within Digital Communication and Multimedia",
  img: "https://www.baaa.dk/media/devlvvgj/rasmus-cederdorff.jpg"
}
];


function appendteachers(teachers){
for(let teacher of teachers){
  document.querySelector("#grid-teachers").innerHTML +=`
  <article>
<img src='${teacher.img}'>
  <h3> ${teacher.name}</h3>
${teacher.position}<br>
  <a href='mailto: ${teacher.mail}'> ${teacher.mail}</a>
  </article>
  `;
}
};

appendteachers(teachers);
