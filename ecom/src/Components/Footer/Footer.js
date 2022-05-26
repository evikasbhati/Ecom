import { Facebook, Instagram, Twitter, YouTube } from '@material-ui/icons'
import './Footer.css'

const Footer=()=>{
    return(
        <div className="footer">
            <div className="about_us">
                <h2 className="footer_head">About us</h2>
                <a href="#" className="f_list">Blog</a>
                <a href="#" className="f_list">Investors</a>
                <a href="#" className="f_list">Policy</a>
                <a href="#" className="f_list">Terms and conditions</a>
            </div>
            <div className="get_in_touch">
            <h2 className="footer_head">Get in touch</h2>
                <a href="#" className="f_list">Support</a>
                <a href="#" className="f_list">Job</a>
                <a href="#" className="f_list">Complain</a>
                <a href="#" className="f_list">Contact</a>
            </div>
            <div className="follow_us">
            <h2 className="footer_head">Follow us</h2>
                <a href="#" className="f_icon"><Twitter/></a>
                <a href="#" className="f_icon"><Facebook/></a>
                <a href="#" className="f_icon"><Instagram/></a>
                <a href="#" className="f_icon"><YouTube/></a>
            </div>
            <div className="footer_banner">
                <p className="f_ban">© 2022 OhWoAttire</p>
            </div>
        </div>
    )
}
export default Footer