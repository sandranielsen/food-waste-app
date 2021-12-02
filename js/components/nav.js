class Nav {
  constructor() {}

  render() {
    document.querySelector("#app").insertAdjacentHTML(
      "afterbegin",
      /*html*/ `
            <nav class="tabbar">
                <a href="#/" class="router-link">Home</a>
                <a href="#/chat" class="router-link">Chat</a>
                <a href="#/add" class="router-link">Add</a>
                <a href="#/favourites" class="router-link">Favourites</a>
                <a href="#/profile" class="router-link">Profile</a>
            </nav>
        `
    );
  }
}

const nav = new Nav();
export default nav;
