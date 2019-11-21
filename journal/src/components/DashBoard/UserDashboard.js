import React,{useState,useEffect} from "react";
import api from "../../utils/api";
import { Link, withRouter} from "react-router-dom"
import ProtectedRoute from "../Routes/ProtectedRoute";
// import Header from "./Header"


function UserDashboard(props){
    const name = localStorage.getItem("username");

    const[message,setMessage]=useState("");

    const Store = JSON.parse(window.localStorage.getItem("user message"));

    const [user,setUser]=useState({
        username: name,
        activites: []
    });
    const{id}=props.match.params;

    useEffect(()=>{
        api()
        .get(`/api/activities/${user.username}`)
        .then(res=>{
            console.log(res);
            setUser({
                ...user,
                activites: res.data
            });
            setMessage(Store)
        })
        .catch(err=>{
            console.log(err)
        })
    },[]);
    console.log(user.activites);
    return (
        <div>
            {/*<Header/>*/}
            {/*<h1>{message}</h1>*/}
            {user.activites.map(activity=>(
                <div key={activity.id}>
                 <Link to={`/activity/${activity.name}`}>
                 <h2>{activity.name}</h2>
                 </Link>
                 <h2>{activity.description}</h2>
                 <h3>{activity.created_at}</h3>
                 <h3>{activity.updated_at}</h3>
                </div>

            ))}
            <Link to={`/userdashboard/${id}/addactivity`}>Add Activity</Link>
        </div>
    )
}

export default withRouter(UserDashboard);