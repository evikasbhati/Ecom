import './ProductList.css'
import { Info, ShoppingCartOutlined, StarBorderOutlined } from '@material-ui/icons';
import { useState,useEffect  } from 'react';
import axios from 'axios'
import{ Link} from 'react-router-dom'

const ProductList=({cat,filters,sort})=>{
    const[products,setProducts]=useState([])
    const[filteredPoducts,setFilteredProducts]=useState([])

    useEffect(()=>{
        const getproducts=async()=>{
            try{
            const res=await axios.get(cat ? `http://localhost:5000/api/products?catogory=${cat}`:'http://localhost:5000/api/products')
            setProducts(res.data)
            }catch(err){}
        }
        getproducts()
    },[cat])

   useEffect(()=>{
     cat && setFilteredProducts(
            products.filter((item)=>Object.entries(filters).every(([key,value])=>item[key].includes(value)
            
            ))
        )

    },[cat,filters,products])
    
    useEffect(()=>{
        if(sort==="newest"){
            setFilteredProducts((prev)=>[...prev].sort((a,b)=>a.createdAt-b.createdAt))
        }
        else if (sort==="Asending Price"){
            setFilteredProducts((prev)=>[...prev].sort((a,b)=>a.price-b.price))
        }
        else setFilteredProducts((prev)=>[...prev].sort((a,b)=>b.price-a.price))
        
    },[sort])
    // console.log(filteredPoducts)
    // console.log(filters,cat)

    return(
        <div className="product_container">
            {/* <div className="pro_banner">
                <h2 className="pro_head">New Listed Products</h2>
            </div> */}
           {cat ? filteredPoducts.map((item)=>(
                <div className="div_product" key={item._id}>
                    <img src={item.img} alt="" className="pro_img" />
                    <div className="prod_info_container">
                        <div className="pro_icon"><Info/></div>
                        <div className="pro_icon"><StarBorderOutlined/></div>
                        <div className="pro_icon"><Link to={`/product/${item._id}`}><ShoppingCartOutlined/></Link></div>
                    </div>
                </div>

            ))
            :products.map((item)=>(
                <div className="div_product" key={item._id}>
                    <img src={item.img} alt="" className="pro_img" />
                    <div className="prod_info_container">
                        <div className="pro_icon"><Info/></div>
                        <div className="pro_icon"><StarBorderOutlined/></div>
                        <div className="pro_icon"><Link to={`/product/${item._id}`}><ShoppingCartOutlined/></Link></div>
                    </div>
                </div>

            ))}
        </div>
    )
}
export default ProductList