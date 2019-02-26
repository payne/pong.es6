class Game {
  context;
  width; height;

  constructor(canvas) {
    console.log('Game constructor canvas=');
    console.log(canvas);
    this.context = canvas.getContext("2d")
    this.width = canvas.width
    this.height = canvas.height
    this.context.fillStyle = '#000'
    this.context.fillRect(0, 0, this.width, this.height)
  }
}

document.addEventListener("DOMContentLoaded", function () {
  console.log('About to new Game()');
  let canvas = document.getElementById('game');
  console.log(canvas);
  let g = new Game(canvas);
  console.log('Done with new Game()');
});
