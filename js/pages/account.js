export default class AccountPage {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector('#app').innerHTML += /*html*/ `
      <section id="account" class="page">
        <header class="topbar">
          <h2>account</h2>
        </header> 
      </section>
    `;
  }
}