import { Link, useLocation } from 'react-router-dom'
import Sidebar from '../../AdminComponents/Sidebar/Sidebar'
import Topbar from '../../AdminComponents/Topbar/Topbar'
import './Product.css'
import {  useSelector } from 'react-redux'
import { Publish } from '@material-ui/icons'
// import { updateProduct } from '../../../redux/apicall'
// import { useState } from 'react'


const Product = () => {
    const location = useLocation()
    const productId = location.pathname.split("/")[ 2 ]

    const product = useSelector((state) =>
        state.product.products.find((product) => product._id === productId))

        // const dispatch=useDispatch()
        // const [productName,setProductName]=useState('')
        // const [productDescription,setProductDescription]=useState('')
        // const [productPrice,setProductPrice]=useState('')
        // const handleUpdateProduct=(e)=>{
        //     e.preventDefault()
        //     updateProduct(productName,dispatch)
        // }
        // console.log(product.title)
    return (
        <>
            <Topbar />
            <div className="admin_product_container">
                <Sidebar />
                <div className="admin_product">
                    <div className="admin_product_title_cont">
                        <h1 className="admin_product_title">Product</h1>
                        <Link to={ "/addproduct" }><button className="admin_product_addproduct_button">Add Product</button></Link></div>
                    <div className="admin_product_top">
                        <div className="admin_product_left">
                            <div className="admin_product_left_top">
                                <img src={ product.img } alt={ product.title } className="admin_product_img" />
                                <h2 className="admin_product_left_title">{ product.title }</h2>
                            </div>
                            <div className="admin_product_left_bottom">
                                <div className="admin_product_left_id"><b>Id:</b>   { product._id }</div>
                                <div className="admin_product_left_id"><b>Price:</b>  { product.price }</div>
                                <div className="admin_product_left_id"><b>In stock:</b> { product.inStock }</div>
                            </div>
                        </div>
                        <div className="admin_product_right">
                            <div className="admin_product_right_desc">
                                <h3>Edit product</h3>
                                <div className="admin_product_right_item">
                                    <label >Product Name</label>
                                    <input type="text" placeholder={product.title}   className="admin_product_right_pro_name" />
                                </div>
                                <div className="admin_product_right_item">
                                    <label >Product Description</label>
                                    <input type="text" placeholder={product.disc} className="admin_product_right_pro_name" />
                                </div>
                                <div className="admin_product_right_item">
                                    <label >Price</label>
                                    <input type="text" placeholder={`₹${product.price} `} className="admin_product_right_pro_name" />
                                </div>
                                <div className="admin_product_right_item">
                                    <label >In Stock</label>
                                    <select name="inStock" id="idStock">
                                        <option value="True">Yes</option>
                                        <option value="false">No</option>
                                    </select>
                                </div>
                            </div>
                            <div className="admin_product_right_img_cont">
                            <img src={ product.img } alt="" className="admin_pro_img_update" />
                            <label htmlFor="file"><div className="update_product_img">Change Image<Publish className="publish_update"/></div></label>
                                    <input type="file" id='file'  style={{display:"none"}}/>
                            <button className="admin_pro_img_update_button" >Update</button>
                        </div>
                    </div>
                        </div>
                </div>
            </div>
        </>
    )
}

export default Product