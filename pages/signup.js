export default class SignUpPage {
  constructor() {
    this.render();
  }

  render() {
    document.querySelector("#app").insertAdjacentHTML(
      "beforeend",
      /*html*/ `
      <section id="${this.id}" class="page">
        <header class="topbar">
          <h2>Sign up</h2>
        </header> 
      </section>
    `
    );
  }
  beforeShow(params) {
    console.log(params);
  }
}