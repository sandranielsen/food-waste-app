export default class MyPurchasesPage {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector('#app').innerHTML += /*html*/ `
      <section id="my_purchases" class="page">
        <header class="topbar">
          <h2>my purchases</h2>
        </header> 
      </section>
    `;
  }
}