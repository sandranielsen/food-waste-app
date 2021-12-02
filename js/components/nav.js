class Nav {
  constructor() {}

  render() {
    document.querySelector("#app").insertAdjacentHTML(
      "afterbegin",
      /*html*/ `
            <nav class="tabbar">
                <a href="/" class="router-link">Users</a>
                <a href="/create" class="router-link">Create</a>
            </nav>
        `
    );
  }
}

const nav = new Nav();
export default nav;
