import express from 'express';
const app = express();
const PORT = 3000;
app.use(express.json());
app.use(express.static('public'));
// app.get('/', (req, res) => {
// 	res.send('Olá mundo!');
// })
const users = {
    admin: 'password'
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




app.listen(PORT, () => {
	console.log(`Running on PORT http://localhost:${PORT}`);
})
