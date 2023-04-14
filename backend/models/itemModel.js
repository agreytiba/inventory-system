const mongoose = require('mongoose')

const itemSchema = mongoose.Schema({
    
    itemName: {
        type: String,
        required:[true,'please add  item name']
    },
    itemDesc: {
        type: String,
        required: [true, 'please add measurement of item'],
     
      
    },
    itemQuantity: {
        type: Number,
        required:[true , 'please add  quantity'],
 
    },
    itemPrice: {
        type: Number,
        required:[true , 'please add  paid amount'],
    },

    itemDiscount: {
        type:Number,
        required: [true, 'please add discount'],
        default: 0
        
    },
    itemStatus: {
        type: String,
        required:[true , 'please add order status'],
        
    }
},{
    timestamps:true
})
 module.exports = mongoose.model('Item', itemSchema)