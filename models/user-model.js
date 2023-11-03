const {Schema, model} = require('mongoose');

const UserSchema = new Schema({
    tgId: {type: Number, unique: true, required: true},
    database: [{dbId: Number, dbName: String}]
})

module.exports = model('User', UserSchema);