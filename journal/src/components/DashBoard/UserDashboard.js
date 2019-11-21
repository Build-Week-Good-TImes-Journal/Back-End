import React,{useState,useEffect} from "react"
import api from "../utils/api"
import {Link} from "react-router-dom"
import Header from "./Header"


function UserDashboard(props){
    const[message,setMessage]=useState("")
    const Store = JSON.parse(window.localStorage.getItem("user message"))
    const [user,setUser]=useState([])
    const{id}=props.match.params


    useEffect(()=>{
        api()
        .get(`/api/activities/user/${id}`)
        .then(res=>{
            console.log(res)
            setUser(res.data)
            setMessage(Store)
        })
        .catch(err=>{
            console.log(err)
        })
    },[id])
    
    return(
        <div>
            <Header/>
            <h1>{message}</h1>
            {user.map(activity=>(
                <div key={activity.id}>
                 <h2>{activity.name}</h2>
                 <h2>{activity.description}</h2>
                 <h3>{activity.created_at}</h3>
                 <h3>{activity.updated_at}</h3>
                </div>
                
            ))}
            <Link to={`/userdashboard/${id}/addactivity`}>Add Activity</Link>
        </div>
    )
}

export default UserDashboard;