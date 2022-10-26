import { IPurchase } from "../models/Product";
import { IRequests } from "../models/Requests";
import BaseDatabase from "./BaseDatabase";
import { StokDatabase } from "./StokDatabase";
import { PRODUCTS_REQUESTS, REQUESTS } from "./TableNames";

const stokDatabase = new StokDatabase()


export class RequestsDatabase extends BaseDatabase {

    public async addRequestInDB(requestBody: IRequests) {

        try {

            const request = {
                id: requestBody.id,
                custumerName: requestBody.custumerName,
                dueDate: requestBody.dueDate
            }

            await RequestsDatabase.connection(REQUESTS)
                .insert(request)

            const purchases = requestBody.purchasesList.map((purchase): IPurchase => {
                return {
                    requestId: request.id,
                    productId: purchase.productId,
                    productQty: purchase.productQty
                }
            })


            await RequestsDatabase.connection(PRODUCTS_REQUESTS)
                .insert(purchases)

            purchases.map((purchase) => {
                stokDatabase.manegeStok(purchase)
            })


        } catch (error: any) {

            throw new Error(error.sqlMessage || error.message)
        }

    }
}