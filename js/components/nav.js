class Nav {
  constructor() {}

  render() {
    document.querySelector("#app").insertAdjacentHTML(
      "afterbegin",
      /*html*/ `
            <nav class="tabbar">
                <a href="#/" class="router-link">Home</a>
                <a href="#/add" class="router-link">Add</a>
            </nav>
        `
    );
  }
}

const nav = new Nav();
export default nav;
