import React,{useState, useEffect} from "react";
import { withRouter } from 'react-router-dom';
import api from '../../utils/api';
// import Header from "./Header"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


function Addactivity(props){
    const user_name = JSON.parse(window.localStorage.getItem("username"));
    console.log(props.match.params.id)
    const id=props.match.params.id;
    
console.log(id);
    const[activity,setActivity]=useState({
        name:"",
        description:"",
        user_id:id,
    });

    const handleChange=(e)=>{
        setActivity({
            ...activity,
            [e.target.name]:e.target.value
        })
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        api()
            .post(`/api/activities/${user_name}`, activity)
            .then(res=>{
                console.log(res);
                // localStorage.setItem("add activity",JSON.stringify(res.data))
                props.history.push(`/userdashboard/${id}`)
            })

            .catch(err=>{
                console.log(err)
            })
    };
    return(
        <div>
            {/*<Header/>*/}
            <h1>Add Activity</h1>
            <br/><br/><form onSubmit={handleSubmit}>
            <span>Name of the activity : </span><TextField label="Name" type="text" name="name" value={activity.name} onChange={handleChange}/><br/><br/>
            <span>Description of the activity : </span><TextField label="Description" type="text" name="description" value={activity.description} onChange={handleChange}/><br/><br/>
            <Button type="submit">Add activity</Button>
        </form>
        </div>


    )
}

export default withRouter(Addactivity);