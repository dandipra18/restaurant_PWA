import './app-bar.css';

class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <nav id="nav" class="menu shadow-bottom" style="background-color: black;">
    <h1>
      <a href="./" title="Navbar Brand">Dand's Resto</a>
    </h1>
    <button class="menu-button" title="off canvas button" aria-label="off canvas button">
        <i class="fas fa-times"></i>
        <i class="fas fa-bars"></i>
    </button>
    <ul class="menu-list">
        <li><a href="./" title="Link ke halaman home">Home</a></li>
        <li><a href="#/favorite" title="Link ke halaman favorite">Favorite</a></li>
        <li><a href="https://www.linkedin.com/in/dandi-prasetyo-967684286/" title="Link ke about us" target="_blank" rel="noreferrer">About
                Us</a></li>
    </ul>
  </nav>
      `;
  }
}

customElements.define('app-bar', AppBar);
