const express = require("express")
const router = express.Router()
const { getOrders,updateOrder,deleteOrder,setOrder } = require('../controllers/orderControllers')
const { protect } = require("../middleware/authMiddleware")


// routes for get and post 
router.route('/').get( getOrders).post( setOrder)

// route for update anda delete 
router.route('/:id').put( updateOrder).delete( deleteOrder)

module.exports = router