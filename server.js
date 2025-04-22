import express from 'express'//ir na package.json e criar "type":'module',

const app = express() //Aqui crio a variavel app para receber a função express.A função ira receber a biblioteca do express
app.use(express.json())//Para usar json

let users =[]

app.post('/users', (req, res) =>{//metodo para add usuário
    //console.log(req.body)// modo de add usuario com o json
    users.push(req.body)//colocando o usuario na constante users
    res.send('Usuário adicionado!')
})

app.get('/users', (req, res) =>{//(LISTAR)Rota do metodo GET() no endereço -> users

    res.json(users)//Aqui vem a resposta.
}) 

app.listen(3000)//porta do localhost