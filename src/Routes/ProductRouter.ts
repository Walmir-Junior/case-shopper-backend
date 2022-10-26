import express from "express"
import { Catalog } from "../endpoints/getProducts"

export const productRouter = express.Router()
const catalog = new Catalog()

productRouter.get("/products", catalog.getProducts)