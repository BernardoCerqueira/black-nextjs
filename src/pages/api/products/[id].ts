import { NextApiRequest, NextApiResponse } from "next";
import products from "../../../../database.json"

export default function handler(req: NextApiRequest, res: NextApiResponse){
    const {id} = req.query 
    const product = products.find(prod => prod.id === Number(id))
    if(!product) res.status(404).json({message: "product not found."})
    res.status(200).json(product)

    
}