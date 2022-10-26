import express from "express"
import { CustumerInfo } from "../endpoints/createRequest"

export const requestRouter = express.Router()
const custumerInfo = new CustumerInfo()

requestRouter.post("/requests", custumerInfo.createRequest)

