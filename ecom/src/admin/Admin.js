import './Admin.css'
import AdminHome from "./AdminPages/AdminHome/AdminHome";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import UserList from './AdminPages/UserList/UserList';
import User from './AdminPages/User/User';
import AddUser from './AdminPages/AddUser/AddUser';
import ProductList from './AdminPages/ProductList/ProductList';
import Product from './AdminPages/Product/Product';
import AddProduct from './AdminPages/AddProduct/AddProduct';

const Admin = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={ <AdminHome /> } />
                <Route path="/users" element={ <UserList/> } />
                <Route path="/user" element={ <User/> } />
                <Route path="/adduser" element={ <AddUser/> } />
                <Route path="/products" element={ <ProductList/> } />
                <Route path="/product/:productId" element={ <Product/> } />
                <Route path="/addproduct" element={ <AddProduct/> } />
            </Routes>
        </Router>
    )
}

export default Admin