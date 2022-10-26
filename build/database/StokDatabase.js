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
exports.StokDatabase = void 0;
const BaseDatabase_1 = __importDefault(require("../database/BaseDatabase"));
const TableNames_1 = require("./TableNames");
class StokDatabase extends BaseDatabase_1.default {
    manegeStok(purchase) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const [qtyStok] = yield StokDatabase.connection(TableNames_1.PRODUCTS_LIST)
                    .select("qty_stok")
                    .where({ id: purchase.productId });
                const qtyTotalStok = (qtyStok.qty_stok - purchase.productQty);
                yield StokDatabase.connection(TableNames_1.PRODUCTS_LIST)
                    .update({ qty_stok: qtyTotalStok })
                    .where({ id: purchase.productId });
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
}
exports.StokDatabase = StokDatabase;
