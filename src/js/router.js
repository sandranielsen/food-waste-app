import AddPage from "./pages/add.js";
import FavPage from "./pages/fav.js";
import ProfilePage from "./pages/profile.js";

class Router {
  constructor() {
    this.routes = [
      {
        path: "/",
        view: new AddPage("add"),
      },
      {
        path: "/fav",
        view: new FavPage("fav"),
      },
      {
        path: "/update/:id",
        view: new UpdatePage("update"),
      },
      {
        path: "/user/:id",
        view: new ProfilePage("profile"),
      },
    ];

    this.pages;
    this.navLinks;
  }

  /* Changing display to none for all pages */
  hideAllPages() {
    for (const page of this.pages) {
      page.style.display = "none";
    }
  }

  /* Navigating SPA to specific page by given path */
  navigateTo(path, props) {
    window.history.pushState({}, path, path);
    this.showPage(path, props);
  }

  showPage(path, props = {}) {
    this.hideAllPages(); // Hides all pages
    const route = this.matchRoute(path, props);
    route.view.beforeShow(props);
    document.getElementById(route.view.id).style.display = "block";
    this.setActiveTab(route.path);
  }

  matchRoute(path, props) {
    const route = this.routes.find((route) => {
      if (route.path.includes("/:id")) {
        const mainRoute = route.path.split("/:id")[0];
        if (path.includes(mainRoute)) {
          props.id = path.split("/").pop();
          return route;
        }
      } else if (route.path.includes(path)) {
        return route;
      }
    });

    return route;
  }

  /* Sets active menu item by given path */
  setActiveTab(path) {
    for (const link of this.navLinks) {
      if (path === link.getAttribute("href")) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    }
  }

  /* Attaching event to nav links and preventing default anchor link event */
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

  /* Initialising the router, calling attachNavLinkEvents(), popstate event and navigateTo() */
  init() {
    this.pages = document.querySelectorAll(".page");
    this.navLinks = document.querySelectorAll("nav a");
    this.attachNavLinkEvents();
    window.addEventListener("popstate", () => this.showPage(location.pathname)); // Change page when using back and forth in browser
    this.navigateTo(location.pathname);
  }
}

const router = new Router();
export default router;
