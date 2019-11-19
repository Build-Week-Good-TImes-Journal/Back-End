import React,{useState, useEffect} from "react"
import api from "../utils/api"
import {Link} from "react-router-dom"


function Users(props){
    
    const[users,setUsers]=useState([])
    const[message,setMessage]=useState("")
    const Store = JSON.parse(window.localStorage.getItem("message"))
    
    useEffect(()=>{
        api()
        .get("/api/users/")
        .then(res=>{
            setUsers(res.data.users)
            localStorage.setItem("Users",JSON.stringify(res.data.users))
            setMessage(Store)
        })
        .catch(err=>{
            console.log(err)
        })
    },[])

    const handleDelete=(event,id)=>{
        event.preventDefault()
        api()
        .delete(`api/users/${id}`)
        .then(res=>{
            console.log("user was deleted")
            setUsers(users.filter(user=>user.id!==id))
        })
        .catch(err=>{
            console.log(err)
        })
    }

    return(
        <div>
            <h1>{message}</h1>
            {users.map(user=>(
                <div key={user.id}>
                    <p>User Name: {user.username}  <br/>   Role: {user.role}  <br/> Created At: {user.created_at}</p> 
                    <button onClick={(e)=>handleDelete(e, user.id)}>delete</button>
                    <Link to={`/users/${user.id}`}>Edit</Link>
                    
                </div>
            ))}
        </div>
    )
}

export default Users;