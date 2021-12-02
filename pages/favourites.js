export default class FavouritesPage {
  constructor() {
    this.template();
  }

  template() {
    document.getElementById('content').innerHTML += /*html*/ `
      <section id="favourites" class="page">
        <header class="topbar">
          <h2>Favourites</h2>
        </header>
        <h3>SPA Template Modules Pages</h3>
        <p>tutututMy Single Page Web App Template</p>
      </section>
    `;
  }
}