"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
require("bootstrap-css-only");
require("./app.css");
class Visualizer {
    constructor() {
        this.sizeInput = document.querySelector('#size');
        this.randomizeBtn = document.querySelector('#randomize');
        this.sortType = document.querySelector('#select');
        this.sortBtn = document.querySelector('#sort');
        this.render = document.querySelector('.visualizer--render');
        this.array = [];
        this.fillArray(Number(this.sizeInput.value));
        this.draw(this.array);
        this.arrayResize();
        this.arrayRandomize();
        this.sort();
    }
    ;
    fillArray(arraySize) {
        this.array = [];
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
    draw(array) {
        this.render.innerHTML = '';
        for (let i = 0; i < array.length; i++) {
            let progress = document.createElement('div');
            progress.classList.add('progress');
            progress.appendChild(array[i]);
            this.render.appendChild(progress);
        }
    }
    sort() {
        this.sortBtn.addEventListener('click', () => {
            switch (this.sortType.value) {
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
            let j, x, i;
            for (i = this.array.length - 1; i > 0; i--) {
                j = Math.floor(Math.random() * (i + 1));
                x = this.array[i];
                this.array[i] = this.array[j];
                this.array[j] = x;
            }
            this.draw(this.array);
        });
    }
    quickSort(array, start, end) {
        return __awaiter(this, void 0, void 0, function* () {
            if (start >= end) {
                this.draw(array);
                return;
            }
            let index = yield this.partition(array, start, end);
            console.log(array.map(item => item.getAttribute('aria-valuenow')));
            yield Promise.all([
                this.quickSort(array, start, index - 1),
                this.quickSort(array, index + 1, end)
            ]);
        });
    }
    partition(array, start, end) {
        return __awaiter(this, void 0, void 0, function* () {
            let pivotIndex = start;
            let pivotValue = Number(array[end].getAttribute('aria-valuenow'));
            for (let i = start; i < end; i++) {
                if (Number(array[i].getAttribute('aria-valuenow')) < pivotValue) {
                    yield this.swap(array, i, pivotIndex);
                    pivotIndex++;
                }
                this.draw(array);
            }
            yield this.swap(array, pivotIndex, end);
            return pivotIndex;
        });
    }
    swap(arr, a, b) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.sleep(100);
            let temp = arr[a];
            arr[a] = arr[b];
            arr[b] = temp;
        });
    }
    sleep(ms) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(resolve => setTimeout(resolve, ms));
        });
    }
}
new Visualizer();
