export default class MyImpactPage {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector('#app').innerHTML += /*html*/ `
      <section id="my_impact" class="page">
        <header class="topbar">
          <h2>my impact</h2>
        </header> 
      </section>
    `;
  }
}