import React, {useState, useEffect, useRef} from 'react';
import api from "../../utils/api";

function Editform (props) {
console.log(props);
    const user_name = JSON.parse(window.localStorage.getItem("username"));


    const [editForm, setEditForm] = useState({});

    useEffect(() => {

        api()
            .get(`/api/activity-logs/${user_name}`)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err);
            })

    },[]);

    return (
        <h1>Hey you guys</h1>
    )

}

export default Editform;