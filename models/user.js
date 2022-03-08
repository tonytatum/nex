const mongoose = require('mongoose');
var passportLocalMongoose = require("passport-local-mongoose");
// create an schema
const UserSchema =new mongoose.Schema({
            username: {type: String, required: true, unique: true},
            password:  String,
            email: {type: String, required: true},
        });

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User',UserSchema);
