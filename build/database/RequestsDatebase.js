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
exports.RequestsDatabase = void 0;
const BaseDatabase_1 = __importDefault(require("./BaseDatabase"));
const StokDatabase_1 = require("./StokDatabase");
const TableNames_1 = require("./TableNames");
const stokDatabase = new StokDatabase_1.StokDatabase();
class RequestsDatabase extends BaseDatabase_1.default {
    addRequestInDB(requestBody) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const request = {
                    id: requestBody.id,
                    custumerName: requestBody.custumerName,
                    dueDate: requestBody.dueDate
                };
                yield RequestsDatabase.connection(TableNames_1.REQUESTS)
                    .insert(request);
                const purchases = requestBody.purchasesList.map((purchase) => {
                    return {
                        requestId: request.id,
                        productId: purchase.productId,
                        productQty: purchase.productQty
                    };
                });
                yield RequestsDatabase.connection(TableNames_1.PRODUCTS_REQUESTS)
                    .insert(purchases);
                purchases.map((purchase) => {
                    stokDatabase.manegeStok(purchase);
                });
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
}
exports.RequestsDatabase = RequestsDatabase;
