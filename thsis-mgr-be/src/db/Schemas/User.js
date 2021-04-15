const mongoose = require('mongoose');
const { getMate } = require('../helpers');

const UserSchema = new mongoose.Schema({
    account: String,
    password: String,

    // meta: {
    // creatAt: {
    //     type: Number,
    //     default: (new Date()).getTime(),
    // },
    // updateAt: {
    //     type: Number,
    //     default: (new Date()).getTime(),
    // },
    // }

    meta: getMate(),
})

mongoose.model('User', UserSchema);