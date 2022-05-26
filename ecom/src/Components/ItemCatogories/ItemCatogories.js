import { Link } from 'react-router-dom'
import {CatogoriesData} from './CatogoriesData'
import './ItemCatogories.css'

const ItemCatogories=()=>{
    return(
        <div className="cato_container">
            
            {CatogoriesData.map((item)=>(
                    <div className="items_container" key={item.id}>
                        <Link to={`Shop/${item.cat}`}>
                        <img className='item_img' src={item.img} alt="" />
                        <div className="info_cont">
                        <h3 className="item_title">{item.title}</h3>
                        <button className="item_button">Shop Now</button>
                        </div>
                        </Link>
                        
                    </div>
            ))}

            
        </div>
    )

}
export default ItemCatogories