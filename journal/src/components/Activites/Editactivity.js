import React, {useState, useEffect, useRef} from 'react';
import api from "../../utils/api";

function Editform (props) {
console.log(props);
    const user_name = JSON.parse(window.localStorage.getItem("username"));
    const allID = JSON.parse(window.localStorage.getItem("allActivites"));

    console.log(props.match.params);
    console.log(allID);
    const id =  allID.filter((item) => {
        return item.name === props.match.params
    });
console.log(id);
    const [editForm, setEditForm] = useState({});

    useEffect(() => {

        api()
            .get(`/api/activites/${user_name}`)
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