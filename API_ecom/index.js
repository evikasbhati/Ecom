const express = require('express')
const app = express()
const mongoose = require('mongoose')
const userroute=require('./routes/user')
const authRoute=require('./routes/auth')
const productsRoute=require('./routes/product')
const cartRoute=require('./routes/cart')
const orderRoute=require('./routes/order')
const paymentRoute=require('./routes/payment')
const dotenv=require('dotenv')
const cors=require('cors')


dotenv.config()

////////DataBase connection/////////
mongoose.connect('mongodb://127.0.0.1:27017/ecom')
.then(()=>{console.log("DB is connected")})
.catch(()=>{console.log("can't connect")})
/////DB complete////

app.use(express.json())
app.use(cors())
app.use("/api/user/auth",authRoute)
app.use("/api/users",userroute)
app.use("/api/products",productsRoute)
app.use("/api/carts",cartRoute)
app.use("/api/orders",orderRoute)
app.use("/api/checkout",paymentRoute)


/////// server /////
app.listen(5000, () => {
    console.log("server is running")
})

