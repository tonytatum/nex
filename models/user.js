const mongoose = require('mongoose');
var passportLocalMongoose = require("passport-local-mongoose");
// create an schema
const UserSchema =new mongoose.Schema({
            username: {type: String, required: true, unique: true},
            password:  String,
            email: {type: String, required: true},
            walletbal: {type: Number},
            staked: {type:Number},
            walletbitc: {type: Number},
            walleteth: {type: Number},
            walletbnb: {type: Number},
            walletdot: {type: Number},
            walletalgo: {type: Number},
            walletftm: {type: Number},
            walletshib: {type: Number},
            walletsol: {type: Number},
            wallettet: {type: Number},
            wallettrx: {type: Number},
            walletusd: {type: Number},
            walletdai: {type: Number},
            walletada: {type: Number},
            stakebtc:{type: Number},
            stakeeth:{type: Number},
            stakeada:{type: Number},
            stakealgo:{type: Number},
            stakebnb:{type: Number},
            stakeftm:{type: Number},
            stakedot:{type: Number},
            stakedai:{type: Number},
            stakeshib:{type: Number},
            stakesol:{type: Number},
            staketet:{type: Number},
            staketrx:{type: Number},
            stakeusd:{type: Number},
        });

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User',UserSchema);
