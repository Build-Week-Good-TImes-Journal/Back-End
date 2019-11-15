// import React,{useState, useEffect} from "react"
// import api from "../utils/api"

// function UpdateUser(props){
// const[user,setUser]=useState({
//     username:"",
//     role:"",
//     id:""
// })


// useEffect(()=>{
//     api()
//     .put(`/api/users/${props.match.params.id}`)
//     .then(res=>{
//         console.log(res)
//         setUser(res.data)
//     })
//     .catch(err=>{
//         console.log(err)
//     })
// },[props.match.params.id])


// }

//     return(
//          <div>
//              <h1>update</h1>
//              <h4>User Name: {user.username}</h4>
//             <h4>updated_at: {user.updated_at}</h4>
             
//          </div>
//     )


// export default UpdateUser;