export default class LogInPage {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector('#app').innerHTML += /*html*/ `
      <section id="login" class="page">
        <header class="topbar">
          <h2>LogIn</h2>
        </header> 
        </a>
      </section>
    `;
  }
}