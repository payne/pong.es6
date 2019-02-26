class Game {
  context; width; height; x; y;
  keyName = {
    32: 'space',
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  }

  constructor(canvas) {
    this.context = canvas.getContext("2d")
    this.width = canvas.width
    this.height = canvas.height
    this.x = this.y = 0;
    this.clear();
  }

  clear() {
    this.context.fillStyle = 'red';
    this.context.fillRect(0, 0, this.width, this.height)
  }

  step() {
    console.log('step');
    this.clear(); // comment this out for line effect
    this.context.fillStyle = 'blue';
    this.context.fillRect(this.x++, this.y++, 10, 10);
    this.x %= 100;
    this.y %= 100;
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
}

document.addEventListener("DOMContentLoaded", function () {
  let canvas = document.getElementById('game');
  let g = new Game(canvas);
  g.start();
});
