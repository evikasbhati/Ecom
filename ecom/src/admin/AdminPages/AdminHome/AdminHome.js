import Chart from "../../AdminComponents/Chart/Chart"
import Info from "../../AdminComponents/Info/Info"
import LargeWidget from "../../AdminComponents/LargeWidget/LargeWidget"
import Sidebar from "../../AdminComponents/Sidebar/Sidebar"
import SmallWidget from "../../AdminComponents/SmallWidget/SmallWidget"
import Topbar from "../../AdminComponents/Topbar/Topbar"
import "./AdminHome.css"

const AdminHome = () => {
    return (
        <div>
            <Topbar/>
            <div className="admin_home_container">
            <Sidebar/>
            <div className="adminHome">
                <Info />
                <Chart />
                <div className="widgets">
                    <SmallWidget />
                    <LargeWidget />
                </div>
            </div>
            </div>
        </div>
    )
}
export default AdminHome