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
    location: {
        type: String,
        required:[true , 'please add  customer location'],
    },

    orderId: {
         type:[mongoose.Schema.Types.ObjectId ],
            required: true,
            ref: 'Order'
        
    }
},{
    timestamps:true
})
 module.exports = mongoose.model('Customer', customerSchema)