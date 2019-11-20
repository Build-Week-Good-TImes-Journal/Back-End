import React,{useState, useEffect} from "react"
import api from "../utils/api"
import Header from "./Header"
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function User(props){
    const{id}=props.match.params

    const[user, setUser]=useState({
        username:"",
        role:"",
        id:"",
    })

    useEffect(()=>{
        api()
        .get(`/api/users/${id}`)
        .then(res=>{
            setUser(res.data)
            console.log(res)
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
        .put(`/api/users/${id}`)
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
    }


    return(
        <div>
            <Header/>
            
            <br/><br/><h4>User name: {user.username}</h4>
            <h4>updated_at: {user.updated_at}</h4>
            <br/><form onSubmit={handleSubmit}>
                 <h3>Edit User</h3>
                 <TextField label="User Name" type="text" name="username" placeholder="User Name" value={user.username} onChange={handleChange}/><br/><br/>
                 <TextField label="Role" type="number" name="role" value={user.role} placeholder="Role"  onChange={handleChange}/><br/><br/>
                 <Button type="submit">save</Button>
             </form>
        </div>
    )
}

export default User