const mongoose = require('mongoose')

const customerSchema = mongoose.Schema({
    customerName: {
        type: String,
        required:[true,'please add customer name']
    },
    customerEmail: {
        type: String,
        required:[true , 'please add customer  email'],
      
    },
    customerPhone: {
        type: Number,
        required:[true , 'please add customer phone number'],
 
    },
    customerBalance: {
        type: Number,
        required:[true , 'please add customer Balance'],
 
    },
    location: {
        type: String,
        required:[true , 'please add  customer location'],
    },


},{
    timestamps:true
})
 module.exports = mongoose.model('Customer', customerSchema)