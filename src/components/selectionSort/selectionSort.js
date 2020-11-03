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
const utils_1 = __importDefault(require("../utils/utils"));
class SelectionSort {
    func(array, colors, draw, render) {
        return __awaiter(this, void 0, void 0, function* () {
            for (let i = 0; i < array.length; i++) {
                let minInd = i;
                colors[i] = '#ffc107';
                yield draw(array, colors, render);
                yield utils_1.default.sleep(100);
                for (let j = i; j < array.length; j++) {
                    if (j != i) {
                        colors[j] = '#28a745';
                    }
                    yield draw(array, colors, render);
                    yield utils_1.default.sleep(100);
                    let a = Number(array[minInd].getAttribute('aria-valuenow'));
                    let b = Number(array[j].getAttribute('aria-valuenow'));
                    if (a > b) {
                        minInd = j;
                        colors[j] = '#ffc107';
                        yield draw(array, colors, render);
                        yield utils_1.default.sleep(100);
                        colors[j] = '#007bff';
                    }
                    if (j != i) {
                        colors[j] = '#007bff';
                    }
                }
                yield utils_1.default.swap(array, i, minInd);
                colors[i] = '#007bff';
                yield draw(array, colors, render);
            }
        });
    }
}
exports.default = SelectionSort;
