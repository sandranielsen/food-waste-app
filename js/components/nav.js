class Nav {
  constructor() {}

  render() {
    document.querySelector("#app").insertAdjacentHTML(
      "afterbegin",
      /*html*/ `
            <nav class="tabbar">
                <a href="#/" class="router-link"></a>
            </nav>
        `
    );
  }
}

const nav = new Nav();
export default nav;
