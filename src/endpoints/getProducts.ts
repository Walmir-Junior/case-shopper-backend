import {Request, Response} from "express"
import { ProductDatabase } from "../database/ProductDatabase"


const productDatabase = new ProductDatabase()

export class Catalog {
    
    public async getProducts(req: Request, res: Response){

        try {
            
            const result = await productDatabase.getProducts()
    
            res.status(200).send( result)

        } catch (error:any) {
            
            throw new Error(error.sqlMessage || error.message)
            
        }

    }
}