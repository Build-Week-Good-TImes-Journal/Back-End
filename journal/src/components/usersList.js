import React,{useState, useEffect} from "react"
import api from "../utils/api"
import {Link} from "react-router-dom"
import Header from "./Header"
import {Contain} from "./StyledWidgits"
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

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
            <Header/>
            <h1>{message}</h1>
            {users.map(user=>(
                <div key={user.id}>
                    <Table>
                        <TableHead>
                         <Contain>
                            <TableRow>
                            {/* <p>User Name:</p> */}
                            <TableCell>User Name: <br/>{user.username}</TableCell>
                            {/* <p>Role:</p> */}
                            <TableCell>Role: <br/>{user.role}</TableCell>
                            {/* <p>Created At:</p> */}
                            <TableCell>Created at: <br/>{user.created_at}</TableCell>
                            </TableRow>
                        </Contain>  
                        </TableHead>
                    </Table>
                    
                    <Button onClick={(e)=>handleDelete(e, user.id)}>delete</Button>
                   <Button><Link to={`/users/${user.id}`}>Edit</Link></Button> <br/><br/><br/>
                    
                    
                </div>
            ))}
        </div>
    )
}

export default Users;