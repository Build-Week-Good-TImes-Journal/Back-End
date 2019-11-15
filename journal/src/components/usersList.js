import React,{useState, useEffect} from "react"
import api from "../utils/api"
import {Link} from "react-router-dom"


function Users(){
    const[users,setUsers]=useState([])
    

    useEffect(()=>{
        api()
        .get("/api/users/")
        .then(res=>{
            setUsers(res.data.users)
            localStorage.setItem("Users",JSON.stringify(res.data.users))
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