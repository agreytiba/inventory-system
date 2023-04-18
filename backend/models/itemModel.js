const mongoose = require('mongoose')

const itemSchema = mongoose.Schema({
    
    itemName: {
        type: String,
        required:[true,'please add  item name']
    },
    itemDesc: {
        type: String,
        required: [true, 'please add desc of item'],
     
      
    },
    itemUnit: {
        type: String,
        required: [true, 'please add measurement of item'],
     
      
    },
    itemQuantity: {
        type: Number,
        required:[true , 'please add  quantity'],
 
    },
    itemCost: {
        type: Number,
        required:[true , 'please add  cost '],
    },
    costAcc: {
        type: Number,
        default:0
    },
    itemSellingPrice: {
        type: Number,
        required:[true , 'please add  paid selling price'],
    },
    sellingAcc:{
       type:Number,
       default:0
    },

    itemDiscount: {
        type:Number,
       
        default: 0
        
    },
    itemTax: {
        type:Number,
        default: 0
        
    },
    itemCategories: {
        type:String,
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