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
class SelectionSort {
    func(array, colors, draw, render) {
        return __awaiter(this, void 0, void 0, function* () {
            for (let i = 0; i < array.length; i++) {
                let minInd = i;
                colors[i] = '#ffc107';
                yield draw(array, colors, render);
                yield this.sleep(100);
                for (let j = i; j < array.length; j++) {
                    if (j != i) {
                        colors[j] = '#28a745';
                    }
                    yield draw(array, colors, render);
                    yield this.sleep(100);
                    let a = Number(array[minInd].getAttribute('aria-valuenow'));
                    let b = Number(array[j].getAttribute('aria-valuenow'));
                    if (a > b) {
                        minInd = j;
                        colors[j] = '#ffc107';
                        yield draw(array, colors, render);
                        yield this.sleep(100);
                        colors[j] = '#007bff';
                    }
                    if (j != i) {
                        colors[j] = '#007bff';
                    }
                }
                yield this.swap(array, i, minInd);
                colors[i] = '#007bff';
                yield draw(array, colors, render);
            }
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
exports.default = SelectionSort;
