import Footer from "../Components/Footer/Footer"
import ItemCatogories from "../Components/ItemCatogories/ItemCatogories"
import Navbar from "../Components/Navbar/Navbar"
import ProductList from "../Components/ProductList/ProductList"
import Slidebar from "../Components/Slidebar/Slidebar"

const Home=()=>{
    return <div>
        <Navbar/>
        <Slidebar/>
        <ItemCatogories/>
        <ProductList/>
        <Footer/>
    </div>
}
export default Home