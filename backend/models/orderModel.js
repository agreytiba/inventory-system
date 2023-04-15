const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    orderNumber: {
        type: Number,
        required:[true,'please add  order number']
    },
    customerId: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true,"please add customer id"],
            ref: 'Customer'
    },
    items: {
         type: [
      {
        itemName: { type: String, required: true },
        quantity: { type: Number, required: true },
        sellingPrice: { type: Number, required: true },
        unit: { type:String, required: true },
      },
    ],
 
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
        
    },
    issuedBy: {
        type: String,
        required:[true , 'please add order status'],
        
    }
},{
    timestamps:true
})
 module.exports = mongoose.model('Order', orderSchema)