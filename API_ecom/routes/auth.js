const router = require('express').Router()
const User = require('../models/User')
const CryptoJS=require('crypto-js')
const JWT=require('jsonwebtoken')

///////   Registration  //////
router.post('/register', async (req, resp) => {

    const newUser = new User({
        username: req.body.username,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.pass_us_code).toString(),
        email: req.body.email,
    })
    try {
        const savedUser = await newUser.save()
        resp.status(201).json(savedUser)
    }
    catch (err) {
        resp.status(500).json(err)
    }

})

///////   Login  ////////
router.post('/login',async(req,resp)=>{
   try{
       /////  find user   ////////
    const user=await User.findOne({username:req.body.username})
    
///////  username is correect
    !user && resp.status(401).json("username or passwrod is incorrect")

/////// get and decrypt password
    const hashpassword=CryptoJS.AES.decrypt(user.password,process.env.pass_us_code)

    const realpassword=hashpassword.toString(CryptoJS.enc.Utf8)

    ///// verify password 
    realpassword!==req.body.password && resp.status(401).json("username or passwrod is incorrect")
    
    const accessToken=JWT.sign({
        id:user._id,
        isadmin:user.isadmin
    },process.env.JWT_SEC)

    ////not showing password on screen by destructuring
    const {password,...others}=user._doc

    resp.status(200).json({...others,accessToken})

   }catch(err){
       resp.status(500).json(err)
   } 
})

module.exports = router