"use strict"; // to enable strict mode and modern JavaScript functionality

// appends a string to the DOM
document.querySelector("#content").innerHTML = "Hi Frontenders!";

// declaring teacher objects
let teacher1 = {
  name: 'Birgitte',
  initials: 'bki',
  position: 'Senior Lecturer',
  department:'Programmes within Digital Communication and Multimedia',
  address:'Sønderhøj 30, 8260 Viby J',
  mail:'bki@baaa.dk',
  phone:'+45 7228 6316',
  img:'img/bergitte.PNG'

};

let teacher2 = {
  name: 'Rasmus',
  initials: 'race',
  position: 'Lecturer',
  department:'Programmes within Digital Communication and Multimedia',
  address:'Ringvej Syd 104, 8260 Viby J',
  mail:'race@baaa.dk',
  phone:'+45 7228 6318',
  linkedin:'Meet Rasmus Cederdorff on LinkedIn',
  img:'img/rasmus.PNG'
};
let teacher3 = {
  name:'Kim',
  initials:'kije',
  position: 'Lecturer',
  department:'Programmes within Digital Communication and Multimedia',
  address:'Ringvej Syd 104, 8260 Viby J',
  mail:'kije@baaa.dk',
  phone:'+45 7228 6325',
  linkedin:'Meet Kim Elkjær Marcher-Jepsen on LinkedIn',
  img:'img/kim.PNG'
};
// logs the teacher objects to the console
console.log(teacher1);
console.log(teacher2);

function showAlert() {
  alert('Open your Developer Console!');
}
// show teacher data

// teacher1
document.getElementsByClassName("image")[0].innerHTML="<img src='"+teacher1.img+"'>"
document.getElementsByClassName("name")[0].innerHTML = 'name:'+' '+teacher1.name;
document.getElementsByClassName("initials")[0].innerHTML = 'initials:'+' '+teacher1.initials;
document.getElementsByClassName("position")[0].innerHTML = 'position:'+' '+teacher1.position;
document.getElementsByClassName("department")[0].innerHTML = 'deparment:'+' '+teacher1.department;
document.getElementsByClassName("mail")[0].innerHTML = 'mail:'+' '+teacher1.mail;
document.getElementsByClassName("phone")[0].innerHTML = 'phone:'+' '+teacher1.phone;
// teacher2
document.getElementsByClassName("image")[1].innerHTML="<img src='"+teacher2.img+"'>"
document.getElementsByClassName("name")[1].innerHTML = 'name:'+' '+teacher2.name;
document.getElementsByClassName("initials")[1].innerHTML = 'initials:'+' '+teacher2.initials;
document.getElementsByClassName("position")[1].innerHTML = 'position:'+' '+teacher2.position;
document.getElementsByClassName("department")[1].innerHTML = 'deparment:'+' '+teacher2.department;
document.getElementsByClassName("mail")[1].innerHTML = 'mail:'+' '+teacher2.mail;
document.getElementsByClassName("phone")[1].innerHTML = 'phone:'+' '+teacher2.phone;
document.getElementsByClassName("linkedin")[0].innerHTML = 'linkedin:'+' '+teacher2.linkedin;
//teacher3
document.getElementsByClassName("image")[2].innerHTML="<img src='"+teacher3.img+"'>"
document.getElementsByClassName("name")[2].innerHTML = 'name:'+' '+teacher3.name;
document.getElementsByClassName("initials")[2].innerHTML = 'initials:'+' '+teacher3.initials;
document.getElementsByClassName("position")[2].innerHTML = 'position:'+' '+teacher3.position;
document.getElementsByClassName("department")[2].innerHTML = 'deparment:'+' '+teacher3.department;
document.getElementsByClassName("mail")[2].innerHTML = 'mail:'+' '+teacher3.mail;
document.getElementsByClassName("phone")[2].innerHTML = 'phone:'+' '+teacher3.phone;
document.getElementsByClassName("linkedin")[1].innerHTML = 'linkedin:'+' '+teacher3.linkedin;