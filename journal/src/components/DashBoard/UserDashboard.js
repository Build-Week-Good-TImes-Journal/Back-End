import React,{useState,useEffect} from "react";
import api from "../../utils/api";
import { Link, withRouter} from "react-router-dom"
import ProtectedRoute from "../Routes/ProtectedRoute";
import { Container, HeaderLogin, ActInfo, ActInfo2, ActInfo3 } from "../../Styles/style-widgets";
import logo from "../../Images/Zone.png"

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
            localStorage.setItem("allActivites", JSON.stringify(res.data));
            setMessage(Store)
        })
        .catch(err=>{
            console.log(err)
        })
    },[]);
    console.log(user.activites);
    return (
        <Container>
            <img className="Clogo" src={logo} alt="company logo" />
            {/*<Header/>*/}
            <HeaderLogin>{message}</HeaderLogin>
            {user.activites.map(activity=>(
                <div key={activity.id}>
                 <Link to={`/activity/${activity.name}`}>
                 <ActInfo>{activity.name}</ActInfo>
                 </Link>
                 <ActInfo2>{activity.description}</ActInfo2>
                 <ActInfo3>{activity.created_at}</ActInfo3>
                 <ActInfo3>{activity.updated_at}</ActInfo3>
                </div>

            ))}
            <Link to={`/userdashboard/${id}/addactivity`}>Add Activity</Link>
        </Container>
    )
}

export default withRouter(UserDashboard);