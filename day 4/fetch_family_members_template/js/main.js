/*
Fetches json data from the file persons.json
*/
fetch('json/persons.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    console.log(json);
    // TODO: call append functionality
    appendPersons(json);
  });

/*
Appends json data to the DOM
*/
function appendPersons(persons) {
let persontempalt="";
for(person of persons ){
  persontempalt =`<article>
  <img src="${person.img}">
  <h2>${person.name}</h2>
  <p>${person.age}</p>
  <p>${person.hairColor}</p>
  <p>${person.relation}</p>
  </article>`
  document.querySelector("#persons").innerHTML += persontempalt;
} 
  // TODO: loop trough persons and append to them DOM
}
