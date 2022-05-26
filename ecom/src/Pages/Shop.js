import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Footer from '../Components/Footer/Footer'
import Navbar from '../Components/Navbar/Navbar'
import ProductList from '../Components/ProductList/ProductList'
import './Shop.css'

const Shop = () => {

    const location=useLocation()
    const cat=location.pathname.split("/")[2]

    const[filters,setFilter]=useState({})
    const filterfunc=(e)=>{
        const value=e.target.value
        setFilter({
            ...filters,
             [e.target.name]:value
        })
    }
    

    const[sort,setSort]=useState("Newest")
      


    return (
        <div className="shop_container">
            <Navbar />
            <div className="shop_list">
                <div className="title_shop"><h1 className='shop_head'>{cat}</h1></div>
                <div className="filter_container">

                    <button className='fil_button'>
                        <div className="sort"><span className="filter_info">Sort Products</span>
                            <select name="Arrange" id="fill_option" onChange={(e)=>setSort(e.target.value)} >
                                <option  disabled>Sort</option>
                                <option value="Asending Price">Asending Price</option>
                                <option value="Descending Price">Descending Price</option>
                                <option value="Newest">Newest</option>
                            </select>
                        </div>
                    </button>
                    <button className='fil_button'> 
                        <div className="filter"><span className="filter_info">Filter</span>
                        <select  id="fill_option" name="color"  onChange={filterfunc} >
                                <option disabled>Colour</option>
                                <option value="blue">Blue</option>
                                <option value="black">Black</option>
                                <option value="white">White</option>
                                <option value="red">Red</option>
                                <option value="green">Green</option>
                            </select>
                           
                            <select  id="fill_option" name="Size"  onChange={filterfunc}>
                                <option disabled>Size</option>
                                <option value="XS">XS</option>
                                <option value="S">S</option>
                                <option value="M">M</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                            </select>
                        </div>
                    </button>
                </div>
                <ProductList cat={cat} filters={filters} sort={sort} />
            </div>
            <Footer />
        </div>
    )

}
export default Shop