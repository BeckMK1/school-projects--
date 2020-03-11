export default class NavBar {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
      <nav class="tabbar">
      <a href="#persons">persons</a>
      <a href="#home">Home</a>
      </nav>
    `;
  }
}