export default class SignUpPage {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector('#app').innerHTML += /*html*/ `
      <section id="signup" class="page">
        <header class="topbar">
          <h2>Signup</h2>
        </header> 
        </a>
      </section>
    `;
  }
}