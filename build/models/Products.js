"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Products = void 0;
class Products {
    constructor(id, name, price, qty_stok) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.qty_stok = qty_stok;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getPrice() {
        return this.price;
    }
    getQty() {
        this.qty_stok;
    }
}
exports.Products = Products;
