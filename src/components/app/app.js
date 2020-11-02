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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const quickSort_1 = __importDefault(require("./quickSort/quickSort"));
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
        this.colors = [];
        this.fillArray(Number(this.sizeInput.value));
        this.draw(this.array, this.colors, this.render);
        this.arrayResize();
        this.arrayRandomize();
        this.sort();
    }
    ;
    fillArray(arraySize) {
        this.array = [];
        this.colors = [];
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
            this.colors.push('#007bff');
            arraySize--;
        }
    }
    draw(array, colors, render) {
        return __awaiter(this, void 0, void 0, function* () {
            render.innerHTML = '';
            for (let i = 0; i < array.length; i++) {
                let progress = document.createElement('div');
                progress.classList.add('progress');
                array[i].style.backgroundColor = colors[i];
                progress.appendChild(array[i]);
                render.appendChild(progress);
            }
        });
    }
    sort() {
        this.sortBtn.addEventListener('click', () => {
            switch (this.sortType.value) {
                case "quick-sort":
                    quickSort.func(this.array, 0, this.array.length - 1, this.colors, this.draw, this.render);
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
            let j, x, i;
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
const quickSort = new quickSort_1.default();
new Visualizer();
