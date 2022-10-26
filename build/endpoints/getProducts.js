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
exports.Catalog = void 0;
const ProductDatabase_1 = require("../database/ProductDatabase");
const productDatabase = new ProductDatabase_1.ProductDatabase();
class Catalog {
    getProducts(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield productDatabase.getProducts();
                res.status(200).send(result);
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
}
exports.Catalog = Catalog;
