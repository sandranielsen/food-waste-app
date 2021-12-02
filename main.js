// import your hideAllPages
import HomePage from "./pages/home.js";
import PersonsPage from "./pages/aaapersons.js";
import FavouritesPage from "./pages/favourites.js";

// import your services
import spaService from "./services/spa.js";

// Declare and init pages
let homePage = new HomePage();
let personsPage = new PersonsPage();
let favouritesPage = new FavouritesPage();

// init services
spaService.init();

window.pageChange = () => spaService.pageChange();