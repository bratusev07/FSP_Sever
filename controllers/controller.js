class Controller{

    async login(req, res, next){
        try{
            res.json(['123', '456'])
        }catch(e){

        }
    }

}

module.exports = new Controller();