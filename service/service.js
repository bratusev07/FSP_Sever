const model = require('../models/user-model')

class Service{
    async test() {
        return "Test accept";
    }

    async diskStatus() {
        return "Disk status accept";
    }

    async serverStatus() {
        return "Server status accept";
    }

    async addUser() {
        return "Add user accept";
    }

    async createDB(databaseName, databaseUser) {
        return (databaseName + " was created by " + databaseUser);
    }
}

module.exports = new Service();