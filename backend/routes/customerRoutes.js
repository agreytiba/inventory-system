const  express = require('express')
const router =express.Router()
const {getCustomers,registerCustomer,deleteCustomer,updateCustomer} = require('../controllers/customerControllers')

router.post('/', registerCustomer)
router.get('/',getCustomers)
router.delete('/:id',deleteCustomer)
router.put('/:id',updateCustomer)
module.exports = router