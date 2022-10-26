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
exports.Migrations = void 0;
const BaseDatabase_1 = __importDefault(require("./BaseDatabase"));
const products_json_1 = __importDefault(require("./products.json"));
const TableNames_1 = require("./TableNames");
class Migrations extends BaseDatabase_1.default {
    constructor() {
        super(...arguments);
        this.createTables = () => __awaiter(this, void 0, void 0, function* () {
            yield BaseDatabase_1.default.connection.raw(`

            DROP TABLE IF EXISTS ${TableNames_1.PRODUCTS_LIST}, ${TableNames_1.REQUESTS}, ${TableNames_1.PRODUCTS_REQUESTS};

             CREATE TABLE IF NOT EXISTS ${TableNames_1.PRODUCTS_LIST}(
                id INT PRIMARY KEY,
                name VARCHAR(255) UNIQUE NOT NULL,
                price FLOAT NOT NULL,
                qty_stok INT NOT NULL
            );

             CREATE TABLE IF NOT EXISTS ${TableNames_1.REQUESTS}(
                id VARCHAR(255) NOT NULL PRIMARY KEY,
                custumerName VARCHAR(50) NOT NULL,
                dueDate DATE NOT NULL
            );

             CREATE TABLE IF NOT EXISTS ${TableNames_1.PRODUCTS_REQUESTS}(
                productId INT NOT NULL,
                requestId VARCHAR(255) NOT NULL,
                productQty INT NOT NULL,
                FOREIGN KEY (productId) REFERENCES ${TableNames_1.PRODUCTS_LIST}(id),
                FOREIGN KEY (requestId) REFERENCES ${TableNames_1.REQUESTS}(id)
            );
        `)
                .then(() => {
                console.log(`Tables created successfully!`);
                this.insertData();
            })
                .catch((error) => { this.printError(error); });
        });
        this.insertData = () => __awaiter(this, void 0, void 0, function* () {
            try {
                yield BaseDatabase_1.default.connection(TableNames_1.PRODUCTS_LIST)
                    .insert(products_json_1.default)
                    .then(() => console.log(`${TableNames_1.PRODUCTS_LIST} populated!`))
                    .catch((error) => this.printError(error));
            }
            catch (error) {
                console.log(error.sqlMessage || error.message);
            }
            finally {
                console.log("Ending BaseDatabase.connection!");
                return BaseDatabase_1.default.connection.destroy();
            }
        });
        this.printError = (error) => {
            console.log(error.sqlMessage || error.message);
        };
    }
}
exports.Migrations = Migrations;
const migrations = new Migrations();
migrations.createTables();
