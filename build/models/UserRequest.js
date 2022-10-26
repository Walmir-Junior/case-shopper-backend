"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRequest = void 0;
class UserRequest {
    constructor(id, userId, productId, totalPrice) {
        this.id = id;
        this.userId = userId;
        this.productId = productId;
        this.totalPrice = totalPrice;
    }
    getId() {
        return this.id;
    }
    getUserId() {
        return this.userId;
    }
    getProductId() {
        return this.productId;
    }
    getTotalPrice() {
        return this.totalPrice;
    }
}
exports.UserRequest = UserRequest;
