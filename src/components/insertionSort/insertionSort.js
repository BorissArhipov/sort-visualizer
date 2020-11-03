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
class InsertionSort {
    func(array, colors, draw, render) {
        return __awaiter(this, void 0, void 0, function* () {
            for (let i = 0; i < array.length; i++) {
                colors[i] = '#ffc107';
                yield draw(array, colors, render);
                yield this.sleep(100);
                for (let j = i; j > 0; j--) {
                    let a = Number(array[j].getAttribute('aria-valuenow'));
                    let b = Number(array[j - 1].getAttribute('aria-valuenow'));
                    if (a < b) {
                        if (j != i) {
                            colors[j] = '#28a745';
                        }
                        colors[j - 1] = '#28a745';
                        yield draw(array, colors, render);
                        yield this.sleep(100);
                        yield this.swap(array, j, j - 1);
                        if (j != i) {
                            colors[j] = '#007bff';
                        }
                        colors[j - 1] = '#007bff';
                        yield draw(array, colors, render);
                    }
                    else {
                        colors[j - 1] = '#ffc107';
                        yield draw(array, colors, render);
                        yield this.sleep(100);
                        colors[j - 1] = '#007bff';
                        yield draw(array, colors, render);
                        break;
                    }
                }
                colors[array.length - 1] = '#007bff';
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
exports.default = InsertionSort;
