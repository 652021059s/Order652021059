const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const orderRoutes =require ('./routes/orders');

const app = express();
app.use(express.json());
app.use('/api',orderRoutes);
dotenv.config();

mongoose.connect(process.env.MONGO_URI,{
    }).then(() => console.log('Mongo DB Connect'))

.catch(err => console.log(err));
// Routing Config

// Server Running
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running at http://localhost:" +PORT);
});


