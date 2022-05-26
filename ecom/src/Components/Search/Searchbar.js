import { Search } from '@material-ui/icons'
import './Searchbar.css'
const Searchbar=()=>{
    return (
        <div className="Searchbar">
            <input className='search_input' type="text" placeholder='Search here' /><button className='search_button'><Search/></button>
        </div>
    )

}
export default Searchbar