const AuthService = require('./AuthService');
const UserDataBase = require('./UserDataBase');

describe('Teste de autenticação e integração', ()=>{
    let database;
    let authService;

    beforeEach(()=>{
        database = new UserDataBase();
        database.addUser('user1', 'senha123');
        database.addUser('user2', 'senha123');
        database.addUser('user3', 'senha1234');
        authService = new AuthService(database);
    });
    test('Username e senha corretos', ()=>{
        const result = authService.login('user1','senha123');
        expect(result).toBe(true);
        expect(authService.isLoggedIn()).toBe('user1');
    });
    test('Username correto e senha incorreta', ()=>{
        const result = authService.login('user1','senha12');
        expect(result).toBe(false);
        expect(authService.isLoggedIn()).toBe(false);
    });
    test('Username incorreto', ()=>{
        const result = authService.login('user10','senha12');
        expect(result).toBe(false);
        expect(authService.isLoggedIn()).toBe(false);
    });
    test('Username vazio e senha', ()=>{
        const result = authService.login(' ',' ');
        expect(result).toBe(false);
        expect(authService.isLoggedIn()).toBe(false);
    });

});
