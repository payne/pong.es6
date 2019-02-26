class Game {
  context;
  width; height;

  constructor(canvas) {
    this.context = canvas.getContext("2d")
    this.width = canvas.width
    this.height = canvas.height
    this.clear();
  }

  clear() {
    this.context.fillStyle = '#000'
    this.context.fillRect(0, 0, this.width, this.height)
  }

  start() {
    this.animationStep();
  }

  animationStep() {
    const self = this;
    // https://developer.mozilla.org/en/docs/Web/API/window.requestAnimationFrame
    requestAnimationFrame(function () {
      self.step();
      self.animationStep();
    })
  }

  step() {
    console.log('step');
  }
}

document.addEventListener("DOMContentLoaded", function () {
  let canvas = document.getElementById('game');
  let g = new Game(canvas);
  g.start();
});
