class App {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');
    document.body.appendChild(this.canvas);

    window.addEventListener('resize', this.resize.bind(this), false);
    this.resize();

    requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    // Double display : makes it looks good in Retina displays
    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;
  }

  // Make canvas clear
  animate(t) {
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
    requestAnimationFrame(this.animate.bind(this));
  }
}

// Generate App()
window.onload = () => {
  new App();
};
