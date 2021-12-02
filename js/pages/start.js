export default class StartPage {
  constructor() {
    this.render();
  }

  render() {
    document.querySelector("#app").insertAdjacentHTML(
      "beforeend",
      /*html*/ `
      <section id="${this.id}" class="page">
        <header class="topbar">
          <h2>account</h2>
        </header> 
      </section>
    `
    );
  }
  beforeShow(params) {
    console.log(params);
  }
}