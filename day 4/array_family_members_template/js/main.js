/*
Fetches json data from the file persons.json
*/
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

console.log(familyMembers);

/*
Appends json data to the DOM
*/
function appendPersons(persons) {
  let htmlTemplate = "";
for ( let person of persons){
console.log(person)

  // TODO: implement loop appending the persons
htmlTemplate +=`<article>
<img src="${person.img}">
<h2>${person.name}</h2>
<p>age: ${person.age}</p>
<p>hair color: ${person.hairColor}</p>
<p>relation: ${person.relation}</p>
</article> `
  document.querySelector("#persons").innerHTML = htmlTemplate;
}
}

appendPersons(familyMembers);

/*
Search functionality: find objects by given searchValue
*/
function search(searchValue) {
  searchValue = searchValue.toLowerCase();
  console.log(searchValue);
let filteredpersons=[];
for(let person of familyMembers){
let name = person.name.toLocaleLowerCase();
if(name.includes(searchValue)){
filteredpersons.push(person);
}
}
console.log(filteredpersons);
appendPersons(filteredpersons);
  // TODO: implement search functionality
}

/*
Adds a new object to the array familyMembers 
*/
function add() {
  console.log("Add button clicked");

  let inputName = document.getElementById('inputName');
let inputage= document.getElementById('inputAge');
let inputhaircolor = document.getElementById('inputHairColor');
let inputrelaton = document.getElementById('inputRelation');
let inputimgurl = document.getElementById('inputImageUrl');
console.log(inputName.value, inputage.value, inputhaircolor.value, inputimgurl.value, inputrelaton.value);
let newperson ={
name: inputName.value,
age: inputage.value,
relation: inputrelaton,
hairColor: inputhaircolor,
img: inputimgurl
}
familyMembers.push(newperson);
appendPersons(familyMembers);
}