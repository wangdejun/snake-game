///<reference path="snake.ts"/>
'use strict';
// interface ObjectConstructor {
//     observe(beingObserved: any, callback: (update: any) => any) : void;
// }
var Game;
(function (Game) {
    const start = document.getElementById('start');
    const score = document.getElementById('core');
    const floor = new Game.Floor({
        parent: document.getElementById('container')
    });
    floor.initialize();
    const snake = new Game.Snake(floor, { speed: 300 });
    start.onclick = function () {
        snake.born();
        this.setAttribute('disabled', 'true');
    };
    // const observer = (changes) => {
    //     changes.forEach((change) =>{
    //         if(change.name === 'score'){
    //             score.textContent = change.object[change.name]
    //         }
    //     })
    // }
    // Object.observe(snake, observer)
})(Game || (Game = {}));
