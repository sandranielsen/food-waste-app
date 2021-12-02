export default class ChatPage {
  constructor() {
    this.template();
  }

  template() {
    document.querySelector('#app').innerHTML += /*html*/ `
      <section id="chat" class="page">
        <header class="topbar">
          <h2>chat</h2>
        </header> 
      </section>
    `;
  }
}