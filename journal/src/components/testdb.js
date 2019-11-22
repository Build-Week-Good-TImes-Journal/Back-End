import React,{useEffect} from "react"
import api from "../utils/api"
import axios from "axios"


function Database(){
    useEffect(()=>{
        api().get("/testDb")
        .then(res=>{console.log(res)})
        .catch(err=>{console.log(err)})
    },[])
    return(
        <div></div>
    )
}
export default Database;