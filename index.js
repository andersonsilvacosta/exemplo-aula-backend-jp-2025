import express from "express"
import { exercicio1, exercicio2 } from "./services/exercicio.js"
 
const app = express()
 
// app.get('/exercicio1', (req, res) => {
//     const num1 = req.query.num1
//     const num2 = req.query.num2
//     console.log(req.params)
 
//     res.status(200).send("Hello "+ nome)
// })
   
// localhost:3000/exercicio1?num1=30&num2=45
app.get('/exercicio1', exercicio1)
 
// localhost:3000/exercicio2/10/2
app.get('/exercicio2/:valorHoras/:qtdeHoras', exercicio2)
 
app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})