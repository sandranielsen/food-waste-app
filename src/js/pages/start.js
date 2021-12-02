export default class StartPage {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector('#app').innerHTML += /*html*/ `
      <section id="start" class="page">
        <header class="topbar">
          <h2>Start page</h2>
        </header> 
      </section>
    `;
  }
}