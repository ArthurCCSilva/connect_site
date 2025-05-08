import express from 'express';//ir na package.json e criar "type":'module'. abaixo de version

const app = express();
app.use(express.json());//para os usuarios serem salvos em formato json

const users =[];

//rota de Usuários

//Rota para listar usuarios
app.get('/usuarios',(req,res)=> {//req - requisição / res- resposta

    res.send('deu certo')

})

//rota para criar usuarios
app.post('/usuarios', (req,res) =>{
    
    console.log(req.body)

    res.send("deu certo criar")
})


/*
//Rota para editar todo usuarios
app.put('/usuarios')

//Rota para deletar usuarios
app.delete('/usuarios') 
*/
app.listen(3000)//porta localhost do backend