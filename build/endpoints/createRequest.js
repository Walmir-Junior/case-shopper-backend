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
exports.CustumerInfo = void 0;
const uuid_1 = require("uuid");
const RequestsDatebase_1 = require("../database/RequestsDatebase");
const requestDatabase = new RequestsDatebase_1.RequestsDatabase();
class CustumerInfo {
    createRequest(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let statusCode = 400;
            try {
                const { custumerName, dueDate, purchasesList } = req.body;
                if (!custumerName || !dueDate || !purchasesList) {
                    statusCode = 422;
                    throw new Error("Por favor, preencha todos os campos");
                }
                const requestBody = {
                    id: (0, uuid_1.v4)(),
                    custumerName,
                    dueDate,
                    purchasesList
                };
                yield requestDatabase.addRequestInDB(requestBody);
                res.status(201).send(requestBody);
            }
            catch (error) {
                res.status(statusCode).send(error.message);
            }
        });
    }
}
exports.CustumerInfo = CustumerInfo;
