export default class AddListingPage {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
      <section id="add" class="page">
        <header class="topbar">
          <h2>favourites</h2>
        </header> 
      </section>
    `;
  }
}
