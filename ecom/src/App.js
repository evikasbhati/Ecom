import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import Product from "./Pages/Product";
import SignUp from "./Components/SignUp/SignUp";
import Cart from "./Pages/Cart"
import Success from "./Pages/Success";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./Components/Login/Login";
import { useSelector } from "react-redux";


const App=()=> {
  const user=useSelector((state)=>state.user.currentUser)
  return (
    
      <Router>
     <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/shop/:catogory" element={<Shop/>}/>
       <Route path="/product/:id" element={<Product/>}/>
       <Route path="/cart" element={<Cart/>}/>
       <Route path="/success" element={<Success/>}/>
       <Route path="/login" element={user?<Navigate to="/"/>:<Login/>}/>
       <Route path="/Register" element={<SignUp/>}/>
       <Route path="/shop:catogory" element={<Shop/>}/>
     </Routes>
      
      </Router>
      
  );
}

export default App;
