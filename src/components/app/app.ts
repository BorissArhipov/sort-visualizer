import QuickSort from '../quickSort/quickSort';
import BubbleSort from '../bubbleSort/bubbleSort';

import 'bootstrap-css-only';
import './app.css';

class Visualizer {
    private sizeInput: HTMLInputElement;
    private randomizeBtn: HTMLButtonElement;
    private sortType: HTMLSelectElement;
    private sortBtn: HTMLButtonElement;
    public array: HTMLDivElement[];
    public render: HTMLDivElement;
    public colors: string[];

    constructor() {
        this.sizeInput = document.querySelector('#size') as HTMLInputElement;
        this.randomizeBtn = document.querySelector('#randomize') as HTMLButtonElement;
        this.sortType = document.querySelector('#select') as HTMLSelectElement;
        this.sortBtn = document.querySelector('#sort') as HTMLButtonElement;
        this.render = document.querySelector('.visualizer--render') as HTMLDivElement;

        this.array = [];
        this.colors = [];

        this.fillArray(Number(this.sizeInput.value));
        this.draw(this.array, this.colors, this.render);
        this.arrayResize();
        this.arrayRandomize();
        this.sort();
    };

    fillArray(arraySize: number) {
        this.array = [];
        this.colors = [];
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
            this.colors.push('#007bff');
            arraySize--;
        }
    }

    async draw(array: HTMLDivElement[], colors: string[], render: HTMLDivElement) {
        render.innerHTML = '';
        for(let i = 0; i < array.length; i++) {
            let progress: HTMLDivElement = document.createElement('div');
            progress.classList.add('progress');
            array[i].style.backgroundColor = colors[i];
            progress.appendChild(array[i]);
            render.appendChild(progress);
        }
    }

    disactivateHud() {
        this.sizeInput.setAttribute('disabled', 'true');
        this.randomizeBtn.setAttribute('disabled', 'true');
        this.sortType.setAttribute('disabled', 'true');
        this.sortBtn.setAttribute('disabled', 'true');
    }

    activateHud() {
        this.sizeInput.removeAttribute('disabled');
        this.randomizeBtn.removeAttribute('disabled');
        this.sortType.removeAttribute('disabled');
        this.sortBtn.removeAttribute('disabled');
    }

    sort() {
        this.sortBtn.addEventListener('click', async () => {
            switch(this.sortType.value) {
                case "quick-sort":
                    this.disactivateHud();
                    await quickSort.func(this.array, 0, this.array.length - 1, this.colors, this.draw, this.render);
                    this.activateHud();
                case "bubble-sort": 
                this.disactivateHud();
                    await bubbleSort.func(this.array, this.colors, this.draw, this.render);
                    this.activateHud();
                default: 
                    return;
            }
        });
    }

    arrayResize() {
        this.sizeInput.addEventListener('change', () => {
            this.fillArray(Number(this.sizeInput.value));
            this.draw(this.array, this.colors, this.render);
        });
    }

    arrayRandomize() {
        this.randomizeBtn.addEventListener('click', () => {
            let j: number,
                x: HTMLDivElement, 
                i: number;
            for (i = this.array.length - 1; i > 0; i--) {
                j = Math.floor(Math.random() * (i + 1));
                x = this.array[i];
                this.array[i] = this.array[j];
                this.array[j] = x;
            }
            this.draw(this.array, this.colors, this.render);
        });
    }

}

const quickSort = new QuickSort();
const bubbleSort = new BubbleSort();
new Visualizer();

