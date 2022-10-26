import express from "express"
import cors from "cors"
import dotenv from 'dotenv'
import { requestRouter } from "./Routes/RequestRouter"
import { productRouter } from "./Routes/ProductRouter"

dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())

app.use("/shopper", productRouter)
app.use("/shopper", requestRouter)

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`)
})

