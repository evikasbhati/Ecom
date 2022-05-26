import './Product.css'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import { Add, Remove } from '@material-ui/icons'
import { useLocation } from 'react-router-dom'
import { useState,useEffect } from 'react'
import {userRequest} from '../Components/requestMethod/RequestMethod'
import {useDispatch} from 'react-redux'
import {addProduct} from '../redux/cartRedux'
const SingleProduct = () => {
    const location=useLocation()
    const id=location.pathname.split("/")[2]
    
       /////  set Quantity /////
    const [quantity,setQuantity]=useState(1)
    const qunatFunc=(value)=>{
        value==="inc"?setQuantity(quantity+1):quantity>1? setQuantity(quantity-1):setQuantity(quantity)
    }

    ///// Get product //////
    const [product,setProduct]=useState({})
    useEffect(()=>{
        const getproduct=async()=>{
            try{
                const res=await userRequest.get("/products/find/"+id)
                setProduct(res.data)
            }catch(err){}
        }
        getproduct()
    },[id])

    ////// Add to cart /////
    const dispatch=useDispatch()
    const addCart=()=>{
    dispatch(addProduct({...product,quantity,price:product.price}))
    
    }

    
    return (
        <div className="Single_pro_container">
            <Navbar />
            <div className="single_pro">
                <div className="img_container_single">
                    <img src={ product.img } alt="" className="img_single" />
                </div>
                <div className="info_container_single">
                    <div className="title_single">
                        <h1 className="head_single">{ product.title }</h1>
                    </div>
                    <div className="disc_single">
                        <p className="para_single">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, temporibus ut ipsa aperiam reprehenderit sequi excepturi totam itaque cum, eos quidem deserunt quas voluptas vero numquam, dolores architecto at eum.
                            Porro maxime vel quam soluta reiciendis libero harum. Quis, dolores nostrum aperiam sequi ea molestias, quae nulla officiis dolor officia quos soluta quasi. Alias doloremque sequi nulla itaque delectus culpa.
                        </p>
                    </div>
                    <div className="pric_single">
                        <h3 className="price_single">Price ₹ { product.price*quantity}</h3>
                    </div>
                    <div className="filter_single_container">
                        <div className="add_container">
                           
                                <button className="inc" onClick={()=>qunatFunc("dec")}><Remove /></button>
                                <span className="no_of_item"><h2>{quantity}</h2></span>
                                <button className="inc" onClick={()=>qunatFunc("inc")}><Add  /></button>
                            
                        </div>
                        <div className="single_size_fil">
                            <button className="single_filter_but"><span className="single_span_fil">Size</span>
                                <select className="single_Size" id="Single_size" >
                                   {product.size?.map((si)=>(
                                       <option value={si} key={si} >{si}</option>
                                   ))}   
                                </select>
                            </button>
                        </div>
                    </div>
                    <div className="add_to_cart">
                        <button className="but_add_cart" onClick={addCart}>Add to cart</button>
                        <button className="buy_now">Buy now</button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>

    )
}
export default SingleProduct