import { Timeline } from '@material-ui/icons'
import { PermIdentity } from '@material-ui/icons'
import { AttachMoney } from '@material-ui/icons'
import { MailOutline } from '@material-ui/icons'
import { ChatBubbleOutline } from '@material-ui/icons'
import { Report } from '@material-ui/icons'
import { WorkOutline } from '@material-ui/icons'
import { DynamicFeed } from '@material-ui/icons'
import { BarChart } from '@material-ui/icons'
import { Storefront } from '@material-ui/icons'
import { TrendingUp } from '@material-ui/icons'
import { LineStyle } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import './Sidebar.css'

const Sidebar=()=>{
    return(
        <div className="sidebar_wrapper">
            <div className="dashboard_wrapper">
            <div className="dashboard">Dashboard</div>
            <ul className="dashboard_ul">
                <li className="dashboard_items"><Link to="/" className='link'><LineStyle/>Home</Link></li>
                <li className="dashboard_items"><Timeline/> Analytics</li>
                <li className="dashboard_items"><TrendingUp/> Sales</li>
            </ul>
            </div>
            <div className="dashboard_wrapper">
            <div className="dashboard">Quick Menu</div>
            <ul className="dashboard_ul">
                <li className="dashboard_items"><Link to="/users" className='link'><PermIdentity/>Users</Link></li>
                <li className="dashboard_items"><Link to="/products" className='link'><Storefront/>Products</Link></li>
                <li className="dashboard_items"><AttachMoney/>Transcations</li>
                <li className="dashboard_items"><BarChart/>Reports</li>
            </ul>
            </div>
         <div className="dashboard_wrapper">
            <div className="dashboard">Notification</div>
            <ul className="dashboard_ul">
                <li className="dashboard_items"><MailOutline/>Mail</li>
                <li className="dashboard_items"><DynamicFeed/>Feedback</li>
                <li className="dashboard_items"><ChatBubbleOutline/>Messages</li>
            </ul>
            </div>
            <div className="dashboard_wrapper">
            <div className="dashboard">Staff</div>
            <ul className="dashboard_ul">
                <li className="dashboard_items"><WorkOutline/>Manage</li>
                <li className="dashboard_items"><Timeline/>Analytics</li>
                <li className="dashboard_items"><Report/>Reports</li>
            </ul>
            </div>
        </div>   
    )
}

export default Sidebar