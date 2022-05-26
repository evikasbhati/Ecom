import "./LargeWidget.css"
import profile from "../Topbar/profile.jpg"
import { useEffect,useState } from "react";
import { adminRequest } from "../../../Components/requestMethod/RequestMethod";

const LargeWidget=()=>{
    const [orders,setOrders]=useState([])
    useEffect(()=>{
        const getorders=async()=>{
            const res=await adminRequest.get("orders/")
            setOrders(res.data)
        }
        getorders()
    },[])

    return(
        <div className="largeWidget_container">
            <h3 className="largeWidget_title">Latest Transcations</h3>
            <table className="largeWidget_table">
                <tbody>
                <tr className="lw_tr">
                    <th className="tr_lw_th">Customer</th>
                    <th className="tr_lw_th">Date</th>
                    <th className="tr_lw_th">Amount</th>
                    <th className="tr_lw_th">Status</th>
                </tr>
                {orders.map(order=>(
                <tr className="lw_tr" key={order._id}>
                    <td className="tr_lw_user">
                        <img src={order.img || profile} alt="" className="tr_lw_img" />
                        <span className="tr_lw_name"> {order.userId}</span>
                    </td>
                    <td className="tr_lw_date">{order.createdAt}</td>
                    <td className="tr_lw_amount">{order.Amount}</td>
                    <td className="tr_lw_status"><button className="tr_lw_button">Success</button></td>
                </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default LargeWidget