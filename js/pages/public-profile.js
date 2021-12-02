export default class PublicProfilePage {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector("#app").innerHTML += /*html*/ `
      <section id="public" class="page">
        <header class="topbar">
          <h2>Public profile</h2>
        </header> 
      </section>
    `;
  }
}
