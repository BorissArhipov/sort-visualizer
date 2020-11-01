import 'bootstrap-css-only';
import './app.css';

class Visualizer {
    private sizeInput: HTMLInputElement;
    // private randomizeBtn: HTMLButtonElement;
    // private sortType: HTMLSelectElement;
    // private sortBtn: HTMLButtonElement;
    private array: HTMLDivElement[];
    private render: HTMLDivElement;

    constructor() {
        this.sizeInput = document.querySelector('#size') as HTMLInputElement;
        // this.randomizeBtn = document.querySelector('#randomize') as HTMLButtonElement;
        // this.sortType = document.querySelector('#select') as HTMLSelectElement;
        // this.sortBtn = document.querySelector('#sort') as HTMLButtonElement;
        this.render = document.querySelector('.visualizer--render') as HTMLDivElement;

        this.array = [];

        this.fillArray(Number(this.sizeInput.value));

        this.draw();
    };

    fillArray(arraySize: number) {
        while(arraySize) {
            let div: HTMLDivElement  = document.createElement('div');
            let randomNum: number = Math.floor(Math.random() * 100);
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
        for(let i = 0; i < this.array.length; i++) {
            let progress: HTMLDivElement = document.createElement('div');
            progress.classList.add('progress');
            progress.appendChild(this.array[i]);
            this.render.appendChild(progress);
        }
    }
}

new Visualizer();