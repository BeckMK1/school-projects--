"use strict";
let familyMembers = [{
    name: "Peter Madsen",
    age: 52,
    hairColor: "blonde",
    relation: "dad",
    img: "img/dad.jpg"
  }, {
    name: "Ane Madsen",
    age: 51,
    hairColor: "brown",
    relation: "mom",
    img: "img/ane.jpg"
  }, {
    name: "Rasmus Madsen",
    age: 29,
    hairColor: "blonde",
    relation: "brother",
    img: "img/rasmus.jpg"
  }, {
    name: "Mie Madsen",
    age: 25,
    hairColor: "brown",
    relation: "sister",
    img: "img/mie.jpg"
  }, {
    name: "Mads Madsen",
    age: 18,
    hairColor: "dark",
    relation: "brother",
    img: "img/mads.jpg"
  }, {
    name: "Jens Madsen",
    age: 14,
    hairColor: "blonde",
    relation: "brother",
    img: "img/jenspeter.jpg"
  }];

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
 {
    name: "Rasmus Cederdorff",
    initials: "race",
    mail: "race@baaa.dk",
    phone: "72286318",
    address: "Sønderhøj 30, 8260 Viby J",
    position: "Lecturer",
    department: "Programmes within Digital Communication and Multimedia",
    img: "https://www.baaa.dk/media/devlvvgj/rasmus-cederdorff.jpg"
  }];

  console.log(familyMembers)
function appendperson(persons){
let persontempalt ="";
for(let person of persons){
persontempalt =`<article>
<img src="${person.img}">
<h2>${person.name}</h2>
<p>${person.age}</p>
<p>${person.hairColor}</p>
<p>${person.relation}</p>
</article>
`
document.querySelector("#persons").innerHTML+= persontempalt;
console.log(person)
}
}
appendperson(familyMembers);
function appendteacher(staffMembers){
let teachertemplat = "";
for(let staff of staffMembers){
teachertemplat =`<aticle>
<img src="${staff.img}">
<h2>${staff.name}</h2>
<p>${staff.position}</p>
<p>${staff.department}</p>
<a href="${staff.mail}">${staff.mail}</a>
<p>${staff.address}</p>
<p>${staff.phone}</p>
<p>${staff.initials}</p>
</articel>
`
document.querySelector("#staffMembers").innerHTML += teachertemplat;
}
}
appendteacher(teachers);