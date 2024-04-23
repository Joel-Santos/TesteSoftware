class AuthService{

    constructor(database){
        this.database = database;
        this.loggedInUser = null;
    }
    login(userName, password){
        const passwordUser = this.database.getUserPassword(userName);
        if(passwordUser && passwordUser === password){
            this.loggedInUser = userName;
            return true;
        }else{
            return false;
        }
    }
    isLoggedIn(){
        if(this.loggedInUser == null){
            return false;
        }else{
            return this.loggedInUser;
        }
    }
    logout(){
        this.loggedInUser = null;
        console.log('Adeusssss');
    }
}
module.exports = AuthService;