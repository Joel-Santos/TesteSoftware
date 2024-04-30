function cadastrarUser(){
    return {id: Math.random().toString(30).substring(2, 10), nome:Math.random().toString(30).substring(4, 10) }
}
//console.log(cadastrarUser());

module.exports = cadastrarUser;