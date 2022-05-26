import Sidebar from '../../AdminComponents/Sidebar/Sidebar'
import Topbar from '../../AdminComponents/Topbar/Topbar'
import './ProductList.css'
import { DataGrid } from '@material-ui/data-grid'
import { Edit } from "@material-ui/icons"
import { Delete } from "@material-ui/icons"
import { Link } from "react-router-dom"
import {useDispatch,useSelector} from "react-redux"
import { useEffect } from 'react'
import { getProducts } from '../../../redux/apicall'
import { deleteProduct } from '../../../redux/apicall'


const ProductList=()=>{
    const dispatch=useDispatch()
    const products=useSelector((state)=>state.product.products)
    useEffect(()=>{
        getProducts(dispatch)
    },[dispatch])

    const handleProductDelete=(id)=>{
        deleteProduct(id,dispatch)
    }
    const columns = [
        { field: '_id', headerName: 'ID', width: 250 },
        {
            field: 'product',
            headerName: 'Product',
            width: 250,
            renderCell:(params)=>{
                return(
                    <div className="productlist_item">
                        <img src={params.row.img} alt="" className="productlist_img" />
                        <div className='productlist_row_title'>{params.row.title}</div>
                    </div>
                )
            }
        },
        {
            field: 'instock',
            headerName: 'Stock',
            width: 150,
        },
        {
            field: 'price',
            headerName: 'Price',
            type: 'number',
            width: 150,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 200,
            renderCell: (params) => {
                return (
                    <div>
                      <Link to={"/product/"+params.row._id}><Edit className="productlist_edit" /></Link>
                        <Delete className="productlist_delete" onClick={()=>handleProductDelete(params.row._id)}/>
                    </div>
                )
            }
        },
    ];
console.log(products)
    return(
        <>
        <Topbar/>
        <div className="productlist_container">
        <Sidebar/>
            <div className="productlist">
                <div className="produlist_title">Products</div>
            <div  className="productgrid_container">
                        <DataGrid key={(row)=>row._id}
                            rows={ products }
                            columns={ columns }
                            getRowId={(row)=>row._id}
                            disableSelectionOnClick
                            pageSize={10}
                            checkboxSelection
                        />
                    </div>
            </div>
        </div>
        </>
    )
}

export default ProductList