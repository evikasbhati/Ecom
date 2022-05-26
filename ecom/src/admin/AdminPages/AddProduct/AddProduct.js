import { useState } from 'react'
import Sidebar from '../../AdminComponents/Sidebar/Sidebar'
import Topbar from '../../AdminComponents/Topbar/Topbar'
import './AddProduct.css'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../../redux/apicall'

const AddProduct = () => {
    const [ input, setInput ] = useState({})
    const [ file, setfile ] = useState(null)
    const [ imgLink, setImgLink ] = useState(null)
    const [ InStock, setInStock ] = useState("true")
    const [ cat, setCat ] = useState([])
    const [ color, setColor ] = useState([])
    const [ size, setSize ] = useState([])


    const handleCat = (e) => {
        setCat(e.target.value.split(","))
    }

    const handleColor = (e) => {
        setColor(e.target.value.split(","))
    }

    const handleChange = (e) => {
        setInput(prev => {
            return { ...prev, [ e.target.name ]: e.target.value }
        })
    }

    const handleSize = (e) => {
        setSize(e.target.value.split(','))
    }

    const product = { ...input, img: imgLink, catogories: cat, size: size, color: color, instock: InStock }

    const dispatch = useDispatch()

    const handleClick = (e) => {
        e.preventDefault()
        //    const filename=new Date().getTime+file.name
        addProduct(product, dispatch)

    }
    
    console.log(InStock)
    return (
        <>
            <Topbar />
            <div className="add_product_container">
                <Sidebar />
                <div className="add_newproduct">
                    <h1 className="addproduct_title">Add Product</h1>
                    <form className="addproduct_form">
                        <div className="addproduct_image_container">
                            <div className="addproduct_item">
                                <label >Image</label>
                                <input type="file" id="file" onChange={ (e) => setfile(e.target.files[ 0 ]) } />
                            </div>
                            <div className="addproduct_item">
                                <label > Or Add Link </label>
                                <input type="text" name='img' className='addproduct_input' onChange={ (e) => setImgLink(e.target.value) } />
                            </div>
                        </div>
                        <div className="addproduct_item">
                            <label >Title</label>
                            <input name="title" type="text" placeholder='Title' className='addproduct_input' onChange={ handleChange } />
                        </div>
                        <div className="addproduct_item">
                            <label >Discription</label>
                            <input name="disc" type="text" placeholder='Discription' className='addproduct_input' onChange={ handleChange } />
                        </div>
                        <div className="addproduct_item">
                            <label >Price</label>
                            <input name="price" type="number" placeholder='Price' className='addproduct_input' onChange={ handleChange } />
                        </div>
                        <div className="addproduct_item">
                            <label >Size</label>
                            <input name="size" type="text" placeholder='Size' className='addproduct_input' onChange={ handleSize } />
                        </div>
                        <div className="addproduct_item">
                            <label >Color</label>
                            <input name="color" type="text" placeholder='Color' className='addproduct_input' onChange={ handleColor } />
                        </div>
                        <div className="addproduct_item">
                            <label >Catogories</label>
                            <input name="title" type="text" placeholder='Catogories' className='addproduct_input' onChange={ handleCat } />
                        </div>
                        <div className="addproduct_item">
                            <label >Stock</label>
                            <select className='addproduct_input' name="instock" onChange={ (e) => setInStock(e.target.value = e.target.name) }>
                                <option value="true">Yes</option>
                                <option value="false">No</option>
                            </select>
                        </div>
                    </form>
                    <div className="addproduct_item">
                        <button className="add_product_button" onClick={ handleClick }>Add Product</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddProduct