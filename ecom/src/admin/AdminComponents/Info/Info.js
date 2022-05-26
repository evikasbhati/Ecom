import { ArrowUpward } from '@material-ui/icons'
import { ArrowDownward } from '@material-ui/icons'
import { adminRequest } from "../../../Components/requestMethod/RequestMethod";
import { useEffect,useState } from "react";
import './Info.css'

const Info=()=>{
    const [income,setIncome]=useState([])

    useEffect(()=>{
        const getIncome=async()=>{
            const res=await adminRequest.get("orders/income")
            setIncome(res.data)
        }
        getIncome()
    },[])
    console.log(income)
    return(
        <div className="info_wrapper">
            <div className="featuredItem">
                <span className="featured_title">Revenue</span>
                <div className="featuredMoney_container">
                    <span className="featuredMoney"> ₹ 2000000</span>
                    <span className="featuredMoney_rate">+10<ArrowUpward className='featured_icon'/></span>
                </div>
                <span className="featured_sub">Compare to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featured_title">Sales</span>
                <div className="featuredMoney_container">
                    <span className="featuredMoney">  500000</span>
                    <span className="featuredMoney_rate">+10<ArrowUpward className='featured_icon '/></span>
                </div>
                <span className="featured_sub">Compare to last month</span>
            </div>
            <div className="featuredItem">
                <span className="featured_title">Cost</span>
                <div className="featuredMoney_container">
                    <span className="featuredMoney"> ₹ 300000</span>
                    <span className="featuredMoney_rate">-10<ArrowDownward className='featured_icon negative'/></span>
                </div>
                <span className="featured_sub">Compare to last month</span>
            </div>
        </div>
    )
}

export default Info