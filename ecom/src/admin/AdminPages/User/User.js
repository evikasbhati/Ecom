import Sidebar from '../../AdminComponents/Sidebar/Sidebar'
import Topbar from '../../AdminComponents/Topbar/Topbar'
import profile from "../../AdminComponents/Topbar/profile.jpg"
import './User.css'
import { PermIdentity } from '@material-ui/icons'
import { CalendarToday } from '@material-ui/icons'
import { Phone } from '@material-ui/icons'
import { MailOutline } from '@material-ui/icons'
import { LocationSearching } from '@material-ui/icons'
import { Publish } from '@material-ui/icons'
import { Link } from 'react-router-dom'

const User = () => {
    return (
        <>
            <Topbar />
            <div className="singleuser_container">
                <Sidebar />
                <div className="user_wrapper">
                    <div className="user_title_container">
                        <h1 className="user_title">Edit User</h1>
                    <Link to={"/adduser"}><button className="create_user_button">Create</button>
                    </Link>
                    </div>
                    <div className="profile_view_upadate_container">
                    <div className="user_profile_view">
                        <div className="user_profile_top_cont">
                            <img src={ profile } alt="" className="user_pro_pic" />
                            <div className="user_pro_top-details">
                            <span className="user_pro_name">Smith Tendulkar</span>
                            <span className="user_pro_designation">Engineer</span>
                            </div>
                        </div>
                        <div className="user_profile_bottom_cont">
                            <span className="user_details_title">Account Details</span>
                            <div className="user_details">
                                <PermIdentity className='user_pro_icon' />
                                <span className="user_details_item">smithTend</span>
                            </div>
                            <div className="user_details">
                                <CalendarToday className='user_pro_icon' />
                                <span className="user_details_item">15.05.2022</span>
                            </div>
                            <div className="user_details">
                                <Phone className='user_pro_icon' />
                                <span className="user_details_item">6843128635</span>
                            </div>
                            <div className="user_details">
                                <MailOutline className='user_pro_icon' />
                                <span className="user_details_item">SmithTend@gmail.com</span>
                            </div>
                            <div className="user_details">
                                <LocationSearching className='user_pro_icon' />
                                <span className="user_details_item">India</span>
                            </div>
                            <div className="user_details">
                                <PermIdentity className='user_pro_icon' />
                                <span className="user_details_item">Accountant</span>
                            </div>
                        </div>
                    </div>
                    <div className="user_profile_update">
                        <span className="user_update_title">Edit</span>
                        <form  className="user_update_form">
                            <div className="user_update_left">
                                <div className="user_update_item">
                                    <label>Username</label>
                                    <input type="text" placeholder='username' className='input_username_update'/>
                                </div>
                                <div className="user_update_item">
                                    <label>Fullname</label>
                                    <input type="text" placeholder='fullname' className='input_username_update'/>
                                </div>
                                <div className="user_update_item">
                                    <label>Address</label>
                                    <input type="text" placeholder='address' className='input_username_update'/>
                                </div>
                                <div className="user_update_item">
                                    <label>E-mail</label>
                                    <input type="text" placeholder='e-mail' className='input_username_update'/>
                                </div>
                                <div className="user_update_item">
                                    <label>Phone</label>
                                    <input type="text" placeholder='phone' className='input_username_update'/>
                                </div>
                            </div>
                            <div className="user_update_right">
                                <div className="user_update_img_cont">
                                    <img src={profile} alt="" className="user_update_img" />
                                    <label htmlFor="file"><div className="update_profile">Add Profile<Publish className="publish_update"/></div></label>
                                    <input type="file" id='file'  style={{display:"none"}}/>
                                </div>
                                <button className="user_update_button">Update</button>
                            </div>
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default User