class AppFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <p>
        &copy; Copyright 2024 &dash; <a href="/">Dand's Resto</a> | 
        <a href="https://github.com/dandipra18/restaurant_PWA" target="_blank" >View on Github</a>
      </p>
      `;
  }
}

customElements.define('app-footer', AppFooter);
