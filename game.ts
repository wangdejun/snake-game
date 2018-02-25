///<reference path="snake.ts"/>

'use strict'

interface ObjectConstructor {
    observe(beingObserved: any, callback: (update: any) => any) : void;
}

module Game {
    const start : HTMLElement = document.getElementById('start')
    const score : HTMLElement = document.getElementById('core')
    const floor : Floor = new Floor({
        parent: document.getElementById('container')
    })

    floor.initialize();

    const snake : Snake = new Snake(floor, {speed:300})

    start.onclick = function(){
        snake.born()
        this.setAttribute('disabled', 'true')
    }

    const observer = (changes) => {
        changes.forEach((change) =>{
            console.log(change);
            console.log(change.object[change.name])
            if(change.name === 'score'){
                score.textContent = change.object[change.name]
            }
        })
    }

    Object.observe(snake, observer)
}