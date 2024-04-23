class UserDataBase{
    constructor(){
        this.users = new Map(); // simula um banco local
    }
    addUser(userName, password){
        this.users.set(userName,password);
    }
    getUserPassword(userName){
        return this.users.get(userName);
    }

    listUsers(){
        this.users.forEach((chave, key) =>{
            console.log(`${key} : ${chave}`);
        });
    }
}
module.exports = UserDataBase;