import "./SmallWidget.css"
import profile from "../Topbar/profile.jpg"
import { Visibility } from "@material-ui/icons"
import { useEffect,useState } from "react";
import { adminRequest } from "../../../Components/requestMethod/RequestMethod";

const SmallWidget=()=>{
    const [users,setUsers]=useState([])
    useEffect(()=>{
        const getUsers=async()=>{
            const res=await adminRequest.get("users/?new=true")
            setUsers(res.data)
        }
        getUsers()
    },[])

    return(
        <div className="smallWidget_container">
            <span className="smallWidget_title">New Joined Members</span>
            <ul className="smallWidget_ul">
                {users.map(user=>(
                <li className="smallWidget_item" key={user._id}>
                    <img src={user.img || profile} alt="" className="smallWidget_pic" />
                    <div className="smallWidget_user">
                        <span className="sw_name">{user.username}</span>
                        <span className="sw_title">Engineer</span>
                    </div>
                    <button className="smallWidget_user_button">
                        <Visibility className="sw_vis_icon"/> Display
                    </button>
                </li>
                ))}
            </ul>
        </div>
    )
}

export default SmallWidget