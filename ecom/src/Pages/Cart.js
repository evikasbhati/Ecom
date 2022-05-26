import { Add, Remove } from "@material-ui/icons";
import React, { useState } from "react";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import "./Cart.css"
import { Badge } from '@material-ui/core';
import { useSelector } from "react-redux";
import StripeCheckout from 'react-stripe-checkout'
import { useEffect } from "react";
import { userRequest } from "../Components/requestMethod/RequestMethod";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const cart = useSelector(state => state.cart)
    const shipping_charge=60
    const total_charge=shipping_charge+cart.total
    const navigate=useNavigate()
    const[stripeToken,setStripeTokne]=useState(null)
    const ontoken=(token)=>{
        setStripeTokne(token)
    }
    useEffect(()=>{
        const makeRequest=async()=>{
            try{
                const res=await userRequest.post('/checkout/payment',{
                    tokenId:stripeToken.id,
                    amount:total_charge*100,
                })
                navigate("/success",{data:res.data})
                console.log(res.data)
            }catch{}
        }
        stripeToken && makeRequest()
    },[stripeToken,total_charge,navigate])
  
    return (
        <div>
            <Navbar />

            <div className="top_continer">
                <h1 className="title">Your Cart</h1>
                <div className="top_items">
                    <span className="span_text"><h3 className="h3"><Badge badgeContent={ cart.quantity } color="secondary">Cart</Badge></h3><h3 className="h3">Wishlist</h3></span>
                    <span className="span_text"></span>
                    <button className="top_button">Continue Shopping</button>
                </div>

            </div>
            <div className="cart_page_contanier">
                <div className="item_conatiner">
                    { cart.products.map(product => (
                        <div key={product._id}>
                            <div className="product_container">
                                <img src={ product.img } className="imgcheck" alt="" />
                                <div className="pro_det">
                                    <span className="pro_name"><b>Product: </b>  { product.title }</span>
                                    <span className="pro_name"><b>Product Id : </b> { product._id }</span>
                                    <span className="pro_name"><b>Colour :</b> { product.color }</span>
                                </div>
                                <div className="pro_add_cont">
                                    <div className="pro_but_add">
                                        <button className="add_pro"><Remove /></button>
                                        <button className="add_pr"><b>{ product.quantity }</b></button>
                                        <button className="add_pro"><Add /></button>
                                    </div>
                                    <div className="price_cont">
                                        <span className="price_st">₹{ product.price * product.quantity }</span>
                                    </div>

                                </div>
                            </div>
                            {/* <br />
                            <hr /> */}
                            <br />
                        </div>

                    )) }
                </div>
                <div className="checkout_contain">
                    <h2>Order Summary</h2>
                    <hr />
                    <h3>Subtotal: ₹ {cart.total} </h3>
                    <h3>Shipping charges: ₹ {shipping_charge} </h3>
                    <h3>Total: ₹ {total_charge} </h3>
                    <StripeCheckout
                     name="Ecom"
                     shippingAddress
                     amount={total_charge*100}
                     token={ontoken}
                     stripeKey={process.env.REACT_APP_STRIPE}
                      >
                    <button className="checkout_butt">Checkout</button>
                    </StripeCheckout>
                </div>
            </div>
            <Footer />

        </div>
    )
}

export default Cart