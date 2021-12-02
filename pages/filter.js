export default class FilterPage {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector('#app').innerHTML += /*html*/ `
      <section id="filter" class="page">
        <header class="topbar">
          <h2>filter</h2>
        </header> 
      </section>
    `;
  }
}