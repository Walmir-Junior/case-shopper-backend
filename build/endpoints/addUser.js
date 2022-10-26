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
exports.addUsers = void 0;
const UserDatabase_1 = require("../database/UserDatabase");
const uuid_1 = require("uuid");
const User_1 = require("../models/User");
const addUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let statusCode = 400;
    try {
        const { name, deliveyDate } = req.body;
        if (!name || !deliveyDate) {
            statusCode = 422;
            throw new Error("missing parameters!!");
        }
        const newUser = new User_1.User((0, uuid_1.v4)(), name, deliveyDate);
        const userDatabase = new UserDatabase_1.UserDatabase();
        const result = userDatabase.addData(newUser);
        res.status(200).send("registered user");
    }
    catch (error) {
        res.status(statusCode).send(error.message);
    }
});
exports.addUsers = addUsers;
