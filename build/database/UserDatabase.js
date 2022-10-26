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
exports.UserDatabase = void 0;
const BaseDatabase_1 = __importDefault(require("./BaseDatabase"));
class UserDatabase extends BaseDatabase_1.default {
    constructor() {
        super(...arguments);
        this.TABLE_NAME = "Users";
    }
    getAllData() {
        const _super = Object.create(null, {
            getAllData: { get: () => super.getAllData }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return _super.getAllData.call(this);
        });
    }
    addData(user) {
        const _super = Object.create(null, {
            addData: { get: () => super.addData }
        });
        return __awaiter(this, void 0, void 0, function* () {
            return _super.addData.call(this, user);
        });
    }
}
exports.UserDatabase = UserDatabase;
