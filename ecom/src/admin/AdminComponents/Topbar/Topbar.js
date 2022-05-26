import { Badge } from "@material-ui/core";
import { NotificationsNoneRounded, SettingsOutlined } from "@material-ui/icons";
import React from "react";
import './Topbar.css'
import profilepic from "./profile.jpg"

const Topbar=()=>{
    return(
        <div className="topbar_wrapper">
            <div className="top_left_wrap"><h2>Admin</h2></div>
            <div className="top_icons">
            <button className="noti_button"><Badge color="secondary" badgeContent={100}><NotificationsNoneRounded/></Badge></button>
            <button className="noti_button"><SettingsOutlined/></button>
            <button className="noti_button"><img className="profilepic" src={profilepic} alt="" /></button>
            </div>
        </div>
    )
}

export default Topbar