const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema ({
    username: String,
    password: String,
},{
    collection: 'admin'
});

const loginModel = mongoose.model('Login', loginSchema);
module.exports = loginModel;