const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    // name:String,
    // cost:Number,
    // age:Number,
    // company:String

    lead_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Lead'
    },
    street:String,
    city:String,
    country:String,
    City:String,
    Zip_Code:String
},{
    versionKey: false
});

module.exports = mongoose.model("Address", addressSchema);