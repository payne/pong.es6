class Game {
    constructor() {
        console.log('Game constructor');
    }
}

document.addEventListener("DOMContentLoaded", function(){
    console.log('About to new Game()');
    let g = new Game();
    console.log('Done with new Game()');
});
