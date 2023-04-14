const express = require("express")
const router = express.Router()
const { getItems,updateItem,deleteItem,setItem } = require('../controllers/itemControllers')
const { protect } = require("../middleware/authMiddleware")

// routes for get and post 
router.route('/').get( getItems).post( setItem)

// route for update anda delete 
router.route('/:id').put( updateItem).delete( deleteItem)

module.exports = router