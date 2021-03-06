export default class ChatPage {
  constructor() {
    this.render();
  }

  render() {
    document.querySelector("#app").insertAdjacentHTML(
      "beforeend",
      /*html*/ `
      <section id="${this.id}" class="page">
        <header class="topbar">
          <h2>Chat</h2>
        </header> 
      </section>
    `
    );
  }
  beforeShow(params) {
    console.log(params);
  }
}