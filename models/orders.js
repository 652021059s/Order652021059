const mongoose = require("mongoose");
const orderSchema = require = new mongoose.Schema({

customer_name:{type: String, require : true},
product:{type: String, require : true},
quantity:{type: String, require : true},
order_date:{type: String, require : true},
status:{type: String, require : true},
},{ timestamps:true

});


module.exports=mongoose.model('Order',orderSchema);
