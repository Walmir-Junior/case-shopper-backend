"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(id, name, delivery_date) {
        this.id = id;
        this.name = name;
        this.delivery_date = delivery_date;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getDeliveryDate() {
        return this.delivery_date;
    }
}
exports.User = User;
