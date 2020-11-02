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
class QuickSort {
    func(array, start, end, colors, draw, render) {
        return __awaiter(this, void 0, void 0, function* () {
            if (start >= end) {
                yield draw(array, colors, render);
                return;
            }
            let index = yield this.partition(array, start, end, colors, draw, render);
            colors[index] = '#007bff';
            yield Promise.all([
                this.func(array, start, index - 1, colors, draw, render),
                this.func(array, index + 1, end, colors, draw, render)
            ]);
        });
    }
    partition(array, start, end, colors, draw, render) {
        return __awaiter(this, void 0, void 0, function* () {
            for (let i = start; i < end; i++) {
                colors[i] = '#28a745';
            }
            let pivotIndex = start;
            let pivotValue = Number(array[end].getAttribute('aria-valuenow'));
            colors[pivotIndex] = '#ffc107';
            for (let i = start; i < end; i++) {
                if (Number(array[i].getAttribute('aria-valuenow')) < pivotValue) {
                    yield this.swap(array, i, pivotIndex);
                    colors[pivotIndex] = '#007bff';
                    pivotIndex++;
                    colors[pivotIndex] = '#ffc107';
                }
                yield draw(array, colors, render);
            }
            yield this.swap(array, pivotIndex, end);
            for (let i = start; i < end; i++) {
                colors[i] = '#007bff';
            }
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
exports.default = QuickSort;
