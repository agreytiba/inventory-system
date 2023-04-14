const asyncHandler = require('express-async-handler')
const Item =require('../models/itemModel')

// @desc Get items
// @route GET /api/items
// @access private
const getItems =asyncHandler( async(req,res)=>{
  const items = await Item.find()
    res.status(200).json(items)
}
) 


// @desc set items
// @route POST /api/items
// @access private
const setItem = asyncHandler(async (req, res) => {
    if (req.body) {
        const item = await Item.create(req.body)
         res.status(200).json(item)
    }
    
}
)
// @desc update item
// @route PUT /api/items/:id
// @access private
const updateItem =asyncHandler( async(req,res)=>{
    const item = await Item.findById(req.params.id)
    // if (!item) {
    //      res.status(400)
    //      throw new Error ('item not found')
    // }
    // const user  = await User.findById(req.user.id)
   
    // // check for user
    // if (!user) {
    //     res.status(401)
    //     throw new Error('User not found')
    // }

    // //make sure the  logged in user matche r the item user
    // if (item.user.toString() !== user.id) {
    //     res.status(401)
    //     throw new Error('user not authorized')
    // }

    const updateditem =await Item.findByIdAndUpdate(req.params.id, req.body,{new: true,})
    res.status(200).json(updateditem)
})


// @desc  Delete item
// @route DELETE /api/items/:id
// @access private

//the code not working (need to be rectified)
const deleteItem = asyncHandler( async(req,res)=>{
    const item = await Item.findById(req.params.id)

    // // check for the item
    // if(!item){
    //     res.status(400)
    //     throw new Error('item not found')
    // }
    // const user  = await User.findById(req.user.id)
   
    // // check for user
    // if (!user) {
    //     res.status(401)
    //     throw new Error('User not found')
    // }

    // //make sure the  logged in user matche r the item user
    // if (item.user.toString() !== user.id) {
    //     res.status(401)
    //     throw new Error('user not authorized')
    // }
    await item.remove()
    res.status(200).json({id: req.params.id})
})
module.exports ={getItems,setItem,updateItem,deleteItem}