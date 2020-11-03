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
class BubbleSort {
    func(array, colors, draw, render) {
        return __awaiter(this, void 0, void 0, function* () {
            let j = 0;
            let len = array.length;
            while (j < array.length) {
                for (let i = 0; i < len; i++) {
                    colors[i] = '#ffc107';
                    let a = Number(array[i].getAttribute('aria-valuenow'));
                    yield draw(array, colors, render);
                    yield utils_1.default.sleep(100);
                    if (array[i + 1]) {
                        let b = Number(array[i + 1].getAttribute('aria-valuenow'));
                        colors[i + 1] = '#28a745';
                        if (a > b) {
                            yield draw(array, colors, render);
                            utils_1.default.swap(array, i, i + 1);
                            i--;
                        }
                    }
                    colors[i] = '#007bff';
                    colors[i + 1] = '#007bff';
                }
                len--;
                j++;
            }
            colors[0] = '#007bff';
            yield draw(array, colors, render);
        });
    }
}
exports.default = BubbleSort;
