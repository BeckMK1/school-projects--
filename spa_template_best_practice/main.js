// import your components, pages and services
import NavBar from "./components/navbar.js";
import HomePage from "./pages/home.js";
import PersonsPage from "./pages/persons.js";
import _spaService from "./services/spa.js";

// Declare and init
let navbar = new NavBar();
let homePage = new HomePage();
let personsPage = new PersonsPage();

// init services
_spaService.init();

window.pageChange = () => _spaService.pageChange();