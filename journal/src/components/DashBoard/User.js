import React,{useState, useEffect} from "react"
import api from "../../utils/api";
import {Link} from "react-router-dom"
import {Button, HeaderLogin, Info, Container, ActInfo3, ActInfo2, ActLink} from "../../Styles/style-widgets"
import logo from "../../Styles/logo.png"


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
        <Container>
              <Link className="Homelink"to="/">Home</Link>
              <img className="Clogo" src={logo}/>
            <br/><br/><HeaderLogin>User name: {user.username}</HeaderLogin>
            <ActInfo3>updated_at: {user.updated_at}</ActInfo3>
            <br/><form onSubmit={handleSubmit}>
                 <ActInfo2>Edit User</ActInfo2>
                 <Info label="User Name" type="text" name="username" placeholder="User Name" value={user.username} onChange={handleChange}/><br/><br/>
                 <Info label="Role" type="number" name="role" value={user.role} placeholder="Role"  onChange={handleChange}/><br/><br/>
                 <Button type="submit">save</Button>
             </form>
        </Container>
    )
}

export default User