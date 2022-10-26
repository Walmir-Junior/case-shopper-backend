import BaseDatabase from "../database/BaseDatabase";
import { IPurchase } from "../models/Product";
import { PRODUCTS_LIST } from "./TableNames";

export class StokDatabase extends BaseDatabase {
    public async manegeStok(purchase:IPurchase) {

        try {
            
            const [qtyStok] = await StokDatabase.connection(PRODUCTS_LIST)
            .select("qty_stok")
            .where({id: purchase.productId})

            const qtyTotalStok:number = (qtyStok.qty_stok - purchase.productQty)

            await StokDatabase.connection(PRODUCTS_LIST)
            .update({qty_stok: qtyTotalStok})
            .where({id: purchase.productId})


        } catch (error:any) {
           
            throw new Error(error.sqlMessage || error.message)
        }
    }
}