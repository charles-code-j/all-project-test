const express = require('express');
const app = express();
const Produto = require('./models/Produto');



app.use(express.json());

app.get('/', (req, resp) => {
    Produto.findAll().then(res =>{
        resp.json(res);
        console.log(res)
    });
});


app.get('/:id', (req, resp) => {
    Produto.findByPk(req.params.id).then(res => {
        resp.json(res);
        console.log(res);
    });
});


app.post('/cadastro', (req,res) => {
    console.log(req.body)
Produto.create(req.body).then(() => {
    return res.json({
        erro: false,
        message: "Produto cadastrado!"
    });
});
});

app.listen(8080);