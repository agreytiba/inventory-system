const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    orderNumber: {
        type: Number,
        required:[true,'please add  order number']
    },
    customerId: {
         type: mongoose.Schema.Types.ObjectId, 
            required: true,
            ref: 'Customer'
    },
    totalPrice: {
        type: Number,
        required:[true , 'please add total price'],
 
    },
    paidAmount: {
        type: Number,
        required:[true , 'please add  paid amount'],
    },

    paymentStatus: {
        type: String,
        required:[true , 'please add payment status'],
        
    },
    orderStatus: {
        type: Boolean,
        required:[true , 'please add order status'],
        
    }
},{
    timestamps:true
})
 module.exports = mongoose.model('Order', orderSchema)