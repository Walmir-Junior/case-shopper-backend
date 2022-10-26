import BaseDatabase from "./BaseDatabase";
import { PRODUCTS_LIST } from "./TableNames";

export class ProductDatabase extends BaseDatabase {

    public async getProducts() {
        const result = await ProductDatabase.connection(PRODUCTS_LIST)
        .select()

        return result
    }
}