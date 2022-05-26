import './Chart.css'
import { LineChart, Line, XAxis, ResponsiveContainer, Tooltip, CartesianGrid } from 'recharts';
import { useState, useMemo } from 'react';
import { useEffect } from 'react';
import { adminRequest } from "../../../Components/requestMethod/RequestMethod";


const Chart = () => {
  const [ userstats, setUserstats ] = useState([])
  const months = useMemo(() =>
    [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ], [])

  useEffect(() => {
    const getstats = async () => {
      const res = await adminRequest.get("/users/stats")
      res.data.map(item => (
        setUserstats(prev => [
          ...prev, { name: months[ item._id-1 ], "Active users": item.total }
        ])
      ))
    }
    getstats()
  }, [ months ])
  return (
    <div className="chart_container">
      <h3 className="chart_title">Sales Analytics</h3>
      <ResponsiveContainer width="100%" aspect={ 4 / 1 } className="ResponsiveContainer">
        <LineChart data={ userstats }>
          <XAxis dataKey="name" />
          <CartesianGrid />
          <Line type="monotone" dataKey="Active users" stroke="#0f92d4" />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>

    </div>
  )
}

export default Chart