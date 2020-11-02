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
class BubbleSort {
    func(array, colors, draw, render) {
        return __awaiter(this, void 0, void 0, function* () {
            for (let i = 0; i < array.length; i++) {
                colors[i] = '#ffc107';
                let a = Number(array[i].getAttribute('aria-valuenow'));
                yield draw(array, colors, render);
                yield this.sleep(100);
                if (array[i + 1]) {
                    let b = Number(array[i + 1].getAttribute('aria-valuenow'));
                    colors[i + 1] = '#28a745';
                    if (a < b) {
                        yield draw(array, colors, render);
                        this.swap(array, i, i + 1);
                    }
                }
                colors[i] = '#007bff';
                colors[i + 1] = '#007bff';
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
exports.default = BubbleSort;
