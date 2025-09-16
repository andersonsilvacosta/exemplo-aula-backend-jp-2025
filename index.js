import express from 'express';

const app = express();

app.get('/api/pessoa/:id', (req, res) => {
  //query params
  //inicializa url depois do ?
  //loccalhost:3000/api?nome=joao&idade=10&=joinville&status=dead

const nome = req.query.nome
    
    res.status(200).send("hello"+ nome);
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});

app.get('/exercicio1/node/', (req, res) =>{
    const num1 = parseFloat(req.params.num1)
    const num2 = parseFloat(req.params.num2)
    console.log(req.params)
    const resultado = num1 + num2
    res.status(200).send(`Resultado ${resultado}`)
})