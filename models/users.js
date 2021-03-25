const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    fullname: {
        type: String,
        required: true,
    },
    birthDate: {
        type: String,
        required: true,
    },
    nationality: {
        type: String,
        required: true,
    },
},{ timestamps: true, });

const User = mongoose.model('User', userSchema);

module.exports = User;