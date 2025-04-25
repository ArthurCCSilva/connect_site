import express from 'express'//ir na package.json e criar "type":'module',
import pkg from '@prisma/client';
const { PrismaClient } = pkg;

const prisma = new PrismaClient();
const app = express() //Aqui crio a variavel app para receber a função express.A função ira receber a biblioteca do express
app.use(express.json())//Para usar json





app.post('/users', async(req, res) =>{//metodo para add usuário
    //usuarios por conta do model em schema.prisma
    await prisma.usuarios.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })

    //console.log(req.body)// modo de add usuario com o json
    //users.push(req.body)//colocando o usuario na constante users
    res.status(201).json(req.body)//status 201 deu ok e criou o usuário
})

app.get('/users', (req, res) =>{//(LISTAR)Rota do metodo GET() no endereço -> users

    res.status(200).json(users)//Deu ok status 200
}) 

app.listen(3000)//porta do localhost