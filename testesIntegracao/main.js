const UserDataBase = require('./UserDataBase');
const AuthService = require('./AuthService');
let banco = new UserDataBase();
banco.addUser('ferrugem', 9090);
banco.addUser('ferro', 9090);
banco.addUser('bug', 190);
//console.log(banco.getUserPassword(190));
banco.listUsers();
let auth = new AuthService(banco);
console.log(auth.login('joaquim',123));
console.log(auth.login('ferro',909));
console.log(auth.isLoggedIn());

