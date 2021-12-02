export default class FavouritesPage {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector('#app').innerHTML += /*html*/ `
      <section id="favourites" class="page">
        <header class="topbar">
          <h2>favourites</h2>
        </header> 
      </section>
    `;
  }
}