const express = require("express");
const router = express.Router();
const Order = require ('../models/orders');
// Import Controller
const {createOrder,updateOrder,deleteOrder,getOrders,getOrder}=require('../controllers/orderController');


// APIs Routing Config
router.post('/order',createOrder);
router.put('/order/:id',updateOrder);
router.delete('/order/:id',deleteOrder);
router.get('/orders',getOrders);
router.get('/order/:id',getOrder);
// Export router
module.exports=router;
