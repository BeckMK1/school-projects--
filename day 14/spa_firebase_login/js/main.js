"use strict";

// ========== Firebase sign in functionality ========== //

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjS52TVxK14ooN1ptrWX7civV3V7ibuzw",
  authDomain: "crud-test-c4d82.firebaseapp.com",
  databaseURL: "https://crud-test-c4d82.firebaseio.com",
  projectId: "crud-test-c4d82",
  storageBucket: "crud-test-c4d82.appspot.com",
  messagingSenderId: "106164264030",
  appId: "1:106164264030:web:cdafdf8802780acd45a8cf"
};
// google login

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// ========== FIREBASE AUTH ========== //
// Listen on authentication state change
firebase.auth().onAuthStateChanged(function(user) {
  if (user) { // if user exists and is authenticated
    userAuthenticated(user);
  } else { // if user is not logged in
    userNotAuthenticated();
  }
});

function userAuthenticated(user) {
  appendUserData(user);
  hideTabbar(false);
  showLoader(false);
}

function userNotAuthenticated() {
  hideTabbar(true);
  showPage("login");

  // Firebase UI configuration
  const uiConfig = {
    credentialHelper: firebaseui.auth.CredentialHelper.NONE,
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID, firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    signInSuccessUrl: '#home'
  };
  // Init Firebase UI Authentication
  const ui = new firebaseui.auth.AuthUI(firebase.auth());
  ui.start('#firebaseui-auth-container', uiConfig);
  showLoader(false);
}

// show and hide tabbar
function hideTabbar(hide) {
  let tabbar = document.querySelector('#tabbar');
  if (hide) {
    tabbar.classList.add("hide");
  } else {
    tabbar.classList.remove("hide");
  }
}


// sign out user
function logout() {
  firebase.auth().signOut();
}


function appendUserData(user) {
  document.querySelector('#profile').innerHTML += `
    <h3>${user.displayName}</h3>
    <p>${user.email}</p>
  `;
}

function update(){
  var user = firebase.auth().currentUser;
  let updateName = document.querySelector("#name");
  let updatemail = document.querySelector("#mail")
  user.updateProfile({
    displayName: updateName.value,
  }).then(function() {
    // Update successful.
  }).catch(function(error) {
    // An error happened.
  });
user.updateEmail(
  {
    email: updatemail.value
  }).then(function() {
  // Update successful.
}).catch(function(error) {
  // An error happened.
});
}
