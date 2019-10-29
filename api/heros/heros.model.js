const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let herosSchema = new Schema({
    name :{
        type: String,
        unique : false,
        required : true
    },
    description : {
        type: String,
        unique : false,
        required : true
    }
}, {
    timestamps: true
});

module.exports = herosSchema;