export default class MyListingsPage {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector('#app').innerHTML += /*html*/ `
      <section id="my_listings" class="page">
        <header class="topbar">
          <h2>my listings</h2>
        </header> 
      </section>
    `;
  }
}