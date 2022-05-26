import { ArrowLeft, ArrowRight } from '@material-ui/icons'
import './Slidebar.css'
import { slidedata } from './slidedata'
import { useState } from 'react'

const Slidebar = () => {
    const [ index, setIndex ] = useState(0);
    const [ newclass, setClass ] = useState("wrapper_0")
    const move = (dir) => {
        if (dir === 1) {
            setIndex(index < 2 ? index + 1 : 0)
            if (index === 0) {
                setClass("wrapper_0")
            } else setClass(index === 1 ? "wrapper_1" : "wrapper_2")

        } else setIndex(index > 0 ? index - 1 : 2)
        if (index === 0) {
            setClass("wrapper_0")
        } else setClass(index === 1 ? "wrapper_1" : "wrapper_2")

    }

    return (
        <div className="slidebar_container"  >
            <button className='Arrow_right' onClick={ () => move(1) } ><ArrowRight style={ { fontSize: 50 } } /></button>
            <div className={ newclass }>
                { slidedata.map(item => (
                    <div className="slide " key={ item.id } style={ { backgroundColor: item.bgc } }>
                        <div className="img_container">
                            <img src={ item.img } alt="shop" className="img" />
                        </div>
                        <div className="info_container">
                            <h2 className="title">{ item.Title }</h2>
                            <p className="dis">{ item.des }</p>
                            <button className="button">Shop Now</button>
                        </div>
                    </div>
                )) }
            </div>
            <button className='Arrow_left' onClick={ () => move(0) }><ArrowLeft style={ { fontSize: 50 } } /></button>
        </div>
    )

}
export default Slidebar