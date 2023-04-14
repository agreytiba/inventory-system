const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required:[true,'please add a name']
    },
    email: {
        type: String,
        required:[true , 'please add an email'],
        unique:true
    },
    workerId: {
        type: Number,
        required:[true , 'please add worker id'],
        unique:true
    },
    position: {
        type: String,
        required:[true , 'please add  position'],
    },

      password: {
        type: String,
        required:[true , 'please add a password'],
        
    }
},{
    timestamps:true
})
 module.exports = mongoose.model('User', userSchema)