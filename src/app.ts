import express, { Request, Response } from "express"
import { ProductRoutes } from "./modules/products/product.route"
import cors from 'cors';
const app = express()
app.use(cors());
// parser 
app.use(express.json());

app.use('/api/products',ProductRoutes)



app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!zruma')
})

export default app;