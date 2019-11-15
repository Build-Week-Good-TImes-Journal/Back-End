import React,{useState, useEffect} from "react"
import api from "../utils/api"



function User(props){
    const[user, setUser]=useState({
        username:"",
        role:"",
        id:""
    })

    const{id}=props.match.params
    useEffect(()=>{
        api()
        .get(`/api/users/${id}`)
        .then(res=>{
            setUser(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
    },[props.match.params.id])

    const handleChange=(e)=>{
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        api()
        .put(`/api/users/${user.id}`)
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
    }

   

    return(
        <div>
            <h4>User name: {user.username}</h4>
            <h4>updated_at: {user.updated_at}</h4>
             <form onSubmit={handleSubmit}>
                 <input type="text" name="username" value={user.username} onChange={handleChange}/>
                 <input type="number" name="role" value={user.role} onChange={handleChange}/>
                 <button type="submit">save</button>
             </form>
        </div>
    )
}

export default User