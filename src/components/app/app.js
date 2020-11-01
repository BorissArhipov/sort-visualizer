"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("bootstrap-css-only");
require("./app.css");
class Visualizer {
    constructor() {
        this.sizeInput = document.querySelector('#size');
        this.render = document.querySelector('.visualizer--render');
        this.array = [];
        this.fillArray(Number(this.sizeInput.value));
        this.draw();
    }
    ;
    fillArray(arraySize) {
        while (arraySize) {
            let div = document.createElement('div');
            let randomNum = Math.floor(Math.random() * 100);
            div.classList.add('progress-bar');
            div.setAttribute('role', "progressbar");
            div.setAttribute('aria-valuemin', "0");
            div.setAttribute('aria-valuemax', "100");
            div.setAttribute('aria-valuenow', String(randomNum));
            div.style.height = `${randomNum}%`;
            this.array.push(div);
            arraySize--;
        }
    }
    draw() {
        this.render.innerHTML = '';
        for (let i = 0; i < this.array.length; i++) {
            let progress = document.createElement('div');
            progress.classList.add('progress');
            progress.appendChild(this.array[i]);
            this.render.appendChild(progress);
        }
    }
}
new Visualizer();
