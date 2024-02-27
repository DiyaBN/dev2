const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
    // name:String,
    // cost:Number,
    // age:Number,
    // company:String

    l_owner:String,
    f_name:String,
    l_name:String,
    company:String,
    title:String,
    mobile:String,
    email:String,
    employees:Number
},{
    versionKey: false
});

module.exports = mongoose.model("Lead", leadSchema);