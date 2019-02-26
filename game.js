class Game {
  context;
  width; height;

  constructor(canvas) {
    this.context = canvas.getContext("2d")
    this.width = canvas.width
    this.height = canvas.height
    this.context.fillStyle = '#000'
    this.context.fillRect(0, 0, this.width, this.height)
  }
}

document.addEventListener("DOMContentLoaded", function () {
  let canvas = document.getElementById('game');
  let g = new Game(canvas);
});
