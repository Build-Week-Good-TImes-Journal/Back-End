import React,{useState,useEffect} from "react"
import api from "../utils/api"
import {Link} from "react-router-dom"

function UserDashboard(props){
    const user_id = JSON.parse(window.localStorage.getItem("user id"))
    const[message,setMessage]=useState("")
    const Store = JSON.parse(window.localStorage.getItem("user message"))
    
    
    const [user,setUser]=useState([])

    useEffect(()=>{
        api()
        .get(`/api/activities/user/${user_id}`)
        .then(res=>{
            console.log(res)
            setUser(res.data)
            setMessage(Store)
    
        })
        .catch(err=>{
            console.log(err)
        })
    },[user_id])
    
    return(
        <div>
            <h1>{message}</h1>
            {user.map(activity=>(
                <div key={activity.id}>
                 <h2>{activity.name}</h2>
                 <h2>{activity.description}</h2>
                </div>
                
            ))}
            <Link to={`/userdashboard/${user_id}/addactivity`}>Add Activity</Link>
        </div>
    )
}

export default UserDashboard;