"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestRouter = void 0;
const express_1 = __importDefault(require("express"));
const createRequest_1 = require("../endpoints/createRequest");
exports.requestRouter = express_1.default.Router();
const custumerInfo = new createRequest_1.CustumerInfo();
exports.requestRouter.post("/requests", custumerInfo.createRequest);
