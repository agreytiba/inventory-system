const asyncHandler = require('express-async-handler')
const Order =require('../models/orderModel')

// @desc Get orders
// @route GET /api/orders
// @access private
const getOrders =asyncHandler( async(req,res)=>{
  const orders = await Order.find({ user:req.user.id })
    res.status(200).json(orders)
}
) 


// @desc set orders
// @route POST /api/orders
// @access private
const setOrder = asyncHandler(async (req, res) => {
    if (req.body) {
        const order = await Order.create(req.body)
         res.status(200).json(order)
    }
    
}
)
// @desc update order
// @route PUT /api/orders/:id
// @access private
const updateOrder =asyncHandler( async(req,res)=>{
    const order = await Order.findById(req.params.id)
    // if (!order) {
    //      res.status(400)
    //      throw new Error ('order not found')
    // }
    // const user  = await User.findById(req.user.id)
   
    // // check for user
    // if (!user) {
    //     res.status(401)
    //     throw new Error('User not found')
    // }

    // //make sure the  logged in user matche r the order user
    // if (order.user.toString() !== user.id) {
    //     res.status(401)
    //     throw new Error('user not authorized')
    // }

    const updatedOrder =await Order.findByIdAndUpdate(req.params.id, req.body,{new: true,})
    res.status(200).json(updatedOrder)
})


// @desc  Delete order
// @route DELETE /api/orders/:id
// @access private

//the code not working (need to be rectified)
const deleteOrder = asyncHandler( async(req,res)=>{
    const order = await Order.findById(req.params.id)

    // // check for the order
    // if(!order){
    //     res.status(400)
    //     throw new Error('order not found')
    // }
    // const user  = await User.findById(req.user.id)
   
    // // check for user
    // if (!user) {
    //     res.status(401)
    //     throw new Error('User not found')
    // }

    // //make sure the  logged in user matche r the order user
    // if (order.user.toString() !== user.id) {
    //     res.status(401)
    //     throw new Error('user not authorized')
    // }
    await order.remove()
    res.status(200).json({id: req.params.id})
})
module.exports ={getOrders,setOrder,updateOrder,deleteOrder}