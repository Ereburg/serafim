class App {
  constructor () {
    this.addEvents();
  }

  addEvents () {
    document.addEventListener('DOMContentLoaded', e => {
      this.initLibs();
      this.initModules();
    });
    document.documentElement.addEventListener('touchstart', e => {
      if (e.touches.length > 1) e.preventDefault();
    });
  }

  initLibs () {
    window.svg4everybody();
    // window.initSliders();
  }

  initModules () {
    disablingPreloader();
  }
}

const app = new App();

window.addEventListener('DOMContentLoaded', () => {
  window.initSliders();
});
