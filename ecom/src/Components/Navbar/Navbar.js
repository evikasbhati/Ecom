import Searchbar from '../Search/Searchbar'
import './Navbar.css'
import { Person } from '@material-ui/icons'
import Banner from './Banner/Banner'
import { ShoppingCartOutlined } from '@material-ui/icons'
import { Badge } from '@material-ui/core'
import { useSelector } from 'react-redux'
import{ Link} from 'react-router-dom'

const Navbar = () => {
    const quantity=useSelector(state=>state.cart.quantity)
    return (
        <div>
            <div className="banner"><Banner /></div>
            <div className="navbar_box">
                {/* <div className="logo"><img src={logo}alt="logo" /></div> */ }
                <div className="menu_items">
                    <ul className="nav_ul">
                        <li className="nav_li"><a href="#" className="nav_li_a">Home</a></li>
                        <li className="nav_li"><a href="#" className="nav_li_a">About Us</a></li>
                        <li className="nav_li"><a href="#" className="nav_li_a">Contact us</a></li>
                    </ul>
                </div>
                <div className="Search"><Searchbar /></div>
                <div className="account"><button className="acc" ><Person /></button><Link to='/cart'><button className="cart_button" ><Badge badgeContent={quantity} color="secondary"><ShoppingCartOutlined/></Badge></button></Link></div>
            

            </div>
        </div>
    )
}
export default Navbar