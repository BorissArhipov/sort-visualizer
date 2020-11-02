import 'bootstrap-css-only';
import './app.css';

class Visualizer {
    private sizeInput: HTMLInputElement;
    private randomizeBtn: HTMLButtonElement;
    private sortType: HTMLSelectElement;
    private sortBtn: HTMLButtonElement;
    private array: HTMLDivElement[];
    private render: HTMLDivElement;

    constructor() {
        this.sizeInput = document.querySelector('#size') as HTMLInputElement;
        this.randomizeBtn = document.querySelector('#randomize') as HTMLButtonElement;
        this.sortType = document.querySelector('#select') as HTMLSelectElement;
        this.sortBtn = document.querySelector('#sort') as HTMLButtonElement;
        this.render = document.querySelector('.visualizer--render') as HTMLDivElement;

        this.array = [];

        this.fillArray(Number(this.sizeInput.value));
        this.draw(this.array);
        this.arrayResize();
        this.arrayRandomize();
        this.sort();
    };

    fillArray(arraySize: number) {
        this.array = [];
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

    draw(array: HTMLDivElement[]) {
        this.render.innerHTML = '';
        for(let i = 0; i < array.length; i++) {
            let progress: HTMLDivElement = document.createElement('div');
            progress.classList.add('progress');
            progress.appendChild(array[i]);
            this.render.appendChild(progress);
        }
    }

    sort() {
        this.sortBtn.addEventListener('click', () => {
            switch(this.sortType.value) {
                case "quick-sort":
                    this.quickSort(this.array, 0, this.array.length - 1);
                default: 
                    return;
            }
        });
    }

    arrayResize() {
        this.sizeInput.addEventListener('change', () => {
            this.fillArray(Number(this.sizeInput.value));
            this.draw(this.array);
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
            this.draw(this.array);
        });
    }

    async quickSort(array: HTMLDivElement[], start: number, end: number):Promise<any> {
        if (start >= end) {
            this.draw(array);
            return;
        }

        let index = await this.partition(array, start, end);
        console.log(array.map(item => item.getAttribute('aria-valuenow')));
        await Promise.all([
            this.quickSort(array, start, index - 1),
            this.quickSort(array, index + 1, end)
        ]);
        
    }

    async partition(array: HTMLDivElement[], start: number, end: number):Promise<any> {
        let pivotIndex: number = start;
        let pivotValue: number = Number(array[end].getAttribute('aria-valuenow'));

        for(let i = start; i < end; i++) {
            if(Number(array[i].getAttribute('aria-valuenow')) < pivotValue) {
                await this.swap(array, i, pivotIndex);
                pivotIndex++;
            }
            this.draw(array);
        }
        await this.swap(array, pivotIndex, end);
        return pivotIndex;
    }

    async swap(arr: HTMLDivElement[], a: number, b: number) {
        await this.sleep(100);
        let temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;  
    }

    async sleep(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

new Visualizer();

