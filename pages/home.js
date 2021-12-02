export default class HomePage {
  constructor() {
    this.render();
  }

  render() {
    document.querySelector("#app").insertAdjacentHTML(
      "beforeend",
      /*html*/ `
      <section id="${this.id}" class="page">
        <header class="topbar">
          <h2>Home</h2>
        </header> 
      </section>
    `
    );
  }
  beforeShow(params) {
    console.log(params);
  }
}
