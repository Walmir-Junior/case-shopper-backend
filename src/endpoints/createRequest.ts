import { Request, Response } from "express"
import {v4 as generateId} from "uuid"
import { RequestsDatabase } from "../database/RequestsDatebase"
import { IRequests } from "../models/Requests"


const requestDatabase = new RequestsDatabase()


export class CustumerInfo {

    public async createRequest (req: Request, res: Response) {
        let statusCode = 400

        try {

            const {custumerName, dueDate, purchasesList} = req.body

            if(!custumerName || !dueDate || !purchasesList){
                statusCode = 422
                throw new Error("Por favor, preencha todos os campos");
            }

            const requestBody:IRequests = {
                id: generateId(),
                custumerName,
                dueDate,
                purchasesList
            }

            await requestDatabase.addRequestInDB(requestBody)
            
            res.status(201).send(requestBody)
            
        } catch (error: any) {
            
            res.status(statusCode).send(error.message)
        }
    }
}