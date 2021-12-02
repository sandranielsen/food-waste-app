export default class ProductPage {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector('#app').innerHTML += /*html*/ `
      <section id="product_page" class="page">
        <header class="topbar">
          <h2>product page</h2>
        </header> 
      </section>
    `;
  }
}