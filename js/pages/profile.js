export default class ProfilePage {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector('#app').innerHTML += /*html*/ `
      <section id="profile" class="page">
        <header class="topbar">
          <h2>profile</h2>
        </header> 
      </section>
    `;
  }
}