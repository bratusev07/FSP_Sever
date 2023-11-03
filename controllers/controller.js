const service = require('../service/service');

class Controller{

    async test(req, res, next){
        try{
            const result = await service.test();
            res.json(result);
        }catch(e){
            res.json(e);
        }
    }

    async serverStatus(req, res, next){
        try{
            const result = await service.serverStatus();
            res.json(result);
        }catch(e){
            res.json(e);
        }
    }

    async diskStatus(req, res, next){
        try{
            const result = await service.diskStatus();
            res.json(result);
        }catch(e){
            res.json(e);
        }
    }

    async addUser(req, res, next){
        try{
            const result = await service.addUser();
            res.json(result);
        }catch(e){
            res.json(e);
        }
    }

    async help(req, res, next){
        try{
            const arr = ["test", "status", "disk_status", "add_user"];
            res.json(arr);
        }catch(e){
            res.json(e);
        }
    }

    async createDB(req, res, next){
        try{
            const { databaseName, databaseUser, databasePassword} = req.body;
            const result = await service.createDB(databaseName, databaseUser);
            res.json(result);
        }catch(e){
            res.json(e);
        }
    }
   
    async getUserDB(req, res, next){
        try{
            const result = await service.getUserDB();
            res.json(result);
        }catch(e){
            res.json(e);
        }
    }
}

module.exports = new Controller();