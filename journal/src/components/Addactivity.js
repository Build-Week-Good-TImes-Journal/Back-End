import React,{useState, useEffect} from "react"
import api from "../utils/api"
import { Container, HeaderLogin, Info, Button } from "../Styles/style-widgets";

function Addactivity(){
    const user_id = JSON.parse(window.localStorage.getItem("user id"))
    console.log(user_id)
    const[activity,setActivity]=useState({
        name:"",
        description:"",
        id:user_id
    })
    const user_name = JSON.parse(window.localStorage.getItem("username"))
    
    console.log(user_name)

    const handleChange=(e)=>{
        setActivity({
            ...activity,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        api()
        .post(`/api/activities/${user_name}`, activity)
        .then(res=>{
            console.log(res)
            localStorage.setItem("add activity",JSON.stringify(res.data))
        })
        .catch(err=>{
            console.log(err)
        })
    }
    return(
        <Container>
            <HeaderLogin>Add Activity</HeaderLogin>
            {/* <form onSubmit={handleSubmit}>
                <select name="activites" onChange={handleChange}>
                    <option value="outdoor">Outdoor</option>
                    <option value="leisure">Leisure</option>
                    <option value="sport">Sport</option>
                    <option value="art">Art</option>
                    <option value="family">Family</option>
                    <option value="exercise">Exercise</option>
                    <option value="social">Social</option>
                    <option value="music">Music</option>
                </select>
                <button type="submit">Add activity</button>
            </form> */}


            <form onSubmit={handleSubmit}>
                <Info type="text" name="name" value={activity.name} onChange={handleChange}/>
                <Info type="text" name="description" value={activity.description} onChange={handleChange}/>
                <Button type="submit">Add activity</Button>
            </form>
        </Container>
        
      
    )
}

export default Addactivity;