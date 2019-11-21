import React,{useState, useEffect} from "react"
import api from "../utils/api"
import { Button, HeaderLogin , Info, Container, ActInfo3 } from "../Styles/style-widgets"



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
        .put(`/api/users/${user.id}`)
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
        })
    }

   

    return(
        <Container>
            <ActInfo3>User name: {user.username}</ActInfo3>
            <ActInfo3>updated_at: {user.updated_at}</ActInfo3>
             <form onSubmit={handleSubmit}>
                 <Info type="text" name="username" value={user.username} onChange={handleChange}/>
                 <Info type="number" name="role" value={user.role} onChange={handleChange}/>
                 <Button type="submit">save</Button>
             </form>
        </Container>
    )
}

export default User