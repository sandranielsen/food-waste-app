import HomePage from "./pages/home.js";
import AddListingPage from "./pages/add-listing.js";
import AccountPage from "./pages/account.js";
import ChatPage from "./pages/chat.js";
import FavouritesPage from "./pages/favourites.js";
import FilterPage from "./pages/filter.js";
import LogInPage from "./pages/login.js";
import MyImpactPage from "./pages/my-impact";
import MyListingsPage from "./pages/my-listings.js";
import MyPurchasesPage from "./pages/my-purchases.js";
import ProductPage from "./pages/product-page.js";
import ProfilePage from "./pages/profile.js";
import PublicProfilePage from "./pages/public-profile";
import SignUpPage from "./pages/signup.js";
import StartPage from "./pages/start.js";

class Router {
  constructor() {
    this.routes = [
      {
        path: "#/",
        view: new HomePage("home"),
      },
      {
        path: "#/add",
        view: new AddListingPage("add"),
      },
      {
        path: "#/account",
        view: new AccountPage("account"),
      },
      {
        path: "#/chat",
        view: new ChatPage("chat"),
      },
      {
        path: "#/favourites",
        view: new FavouritesPage("favourites"),
      },
      {
        path: "#/filter",
        view: new FilterPage("filter"),
      },
      {
        path: "#/login",
        view: new LogInPage("login"),
      },
      {
        path: "#/impact",
        view: new MyImpactPage("impact"),
      },
      {
        path: "#/listings",
        view: new MyListingsPage("listings"),
      },
      {
        path: "#/purchases",
        view: new MyPurchasesPage("purchases"),
      },
      {
        path: "#/product",
        view: new ProductPage("product"),
      },
      {
        path: "#/profile",
        view: new ProfilePage("profile"),
      },
      {
        path: "#/public",
        view: new PublicProfilePage("public"),
      },
      {
        path: "#/signup",
        view: new SignUpPage("signup"),
      },
      {
        path: "#/start",
        view: new StartPage("start"),
      },

      {
        path: "#/update/:id",
        view: new UpdatePage("update"),
      },
      {
        path: "#/user/:id",
        view: new UserProfilePage("profile"),
      },
    ];

    this.basePath = location.pathname.replace("index.html", ""); // remove index.html from path
    this.pages;
    this.navLinks;
  }

  /**
   * Changing display to none for all pages
   */
  hideAllPages() {
    for (const page of this.pages) {
      page.style.display = "none";
    }
  }

  /**
   * Navigating SPA to specific page by given path
   */
  navigateTo(path, params = {}) {
    window.history.pushState({}, path, this.basePath + path);
    this.showPage(path, params);
  }

  showPage(path, params) {
    this.hideAllPages(); // hide all pages
    const route = this.matchRoute(path, params);
    route.view.beforeShow(params);
    document.getElementById(route.view.id).style.display = "block";
    this.setActiveTab(route.path);
  }

  matchRoute(path, params) {
    const route = this.routes.find((route) => {
      if (route.path.includes("/:id")) {
        const mainRoute = route.path.split("/:id")[0];
        if (path.includes(mainRoute)) {
          params.id = path.split("/").pop();
          return route;
        }
      } else if (route.path.includes(path)) {
        return route;
      }
    });

    return route;
  }

  /**
   * sets active menu item by given path
   */
  setActiveTab(path) {
    for (const link of this.navLinks) {
      if (path === link.getAttribute("href")) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    }
  }

  /**
   * Attaching event to nav links and preventing default anchor link event
   */
  attachNavLinkEvents() {
    const navLinks = document.querySelectorAll(".router-link");
    for (const link of navLinks) {
      link.addEventListener("click", (event) => {
        const path = link.getAttribute("href");
        this.navigateTo(path);
        event.preventDefault();
      });
    }
  }

  goBack() {
    history.back();
  }

  /**
   * Initialising the router, calling attachNavLinkEvents(), popstate event and navigateTo()
   */
  init() {
    this.pages = document.querySelectorAll(".page");
    this.navLinks = document.querySelectorAll("nav a");
    this.attachNavLinkEvents();
    window.addEventListener("popstate", () => this.showPage(location.hash)); // change page when using back and forth in browser
    this.navigateTo(location.hash);
  }
}

const router = new Router();
export default router;
