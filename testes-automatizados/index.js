import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
const app = express();
const PORT = 3000;
// Definindo __dirname no contexto de ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
import {phone} from 'phone';
// app.get('/', (req, res) => {
// 	res.send('Olá mundo!');
// }),
app.use(express.static('public'));
app.use(express.json());
const users = {
    admin: 'password',
    flavio: 123
}
app.post('/login', (req, res)=>{
    const {username, password} = req.body;
    console.log(username, password)
    if(users[username] === password){
        res.json({sucess: true, message: 'Login realizado com sucesso'});
    }else{
        res.json({sucess: false, message: 'Login invalido.'});
    }
})

app.get('/cadastro', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public/cadastro.html'))
});

app.post('/cadastro', (req, res)=>{
    const {nome, idade, email, telefone, endereco} = req.body;
    if(nome && idade && email && telefone && endereco){
        console.log(phone(telefone))
        if(email){
            
            res.json({sucess: true, message: 'Cadastro realizado com sucesso'});
        }else{
            res.json({sucess: false, message: 'Cadastro invalido.'}); 
        }   
    }else{
        res.json({sucess: false, message: 'Cadastro invalido.'});
    }
})



app.listen(PORT, () => {
	console.log(`Running on PORT http://localhost:${PORT}`);
})
