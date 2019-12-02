import React, { useState, useEffect } from 'react';
import {connect} from "react-redux";
import {editReflection, updateUserReflection} from "../../Actions/UserAction";
import api from "../../Utilites/api";
import { Button, Container, HeaderLogin } from '../../Styles/StyledWidgets';


function EditReflection ({ name, user_id, match, editInfo, editID,  editReflection, updateUserReflection, history }) {

    //(id is taken from react-router-dom route path)
    const id = match.params.id;
    //editData is a boolean that lets the user click to update reflection
    const [editData, setEditData] = useState(false);
    //newData is state to map the user updates and is used in the put request to update existing reflection
    const [newData, setNewData] = useState({
        reflection: "",
        date: Date.now(),
        user_id: user_id,
        id: id
    });

    //useEffect - used for get request with (id) to get a single reflection to update
    useEffect(() => {
        editReflection(name, id)
    },[id, editReflection, name]);

    //saveEdit - is used to take in the (newDate) and make a put request to update existing reflection
    //Once put request is ran the (history.push) will send the user back to the reflection component
    const saveEdit = (e) => {
        e.preventDefault();
        updateUserReflection(name, newData);
        history.push("/AddReflection")
    };

    //edit - used to turn on editing feature and record user input to newData
    const edit = refl => {
        setEditData(true);
        setNewData(refl);
    };

    //Handler click is mapped to a (delete button) and runs a delete request on the current reflection
    function clickHandler(e) {
        e.preventDefault();
        api()
            .delete(`/api/reflection-logs/${name}`, {data: {
                id:editID
        }})
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err.message)
            });
        history.push("/dashboard")
    }

    return (
        <Container>
            <div>
                <HeaderLogin onClick={() => edit(newData)} >{editInfo}</HeaderLogin>
                <Button onClick={clickHandler}>Delete Reflection</Button>
            </div>

            {/*editData is used in a ternary to display edit feature*/}
            {editData && (
                <form onSubmit={saveEdit}>
                    <legend>Update Reflection</legend>
                    <label>Reflection -
                        <input onChange={e => setNewData({ ...newData, reflection: e.target.value })} value={newData.reflection}/>
                    </label>
                    <div className="button-row">
                        <Button type="submit">save</Button>
                        <Button onClick={() => setEditData(false)}>cancel</Button>
                    </div>
                </form>
            )}
        </Container>
    )}

//editReflection and updateUserReflection can be found in UserAction.js
const mapDispatchToProps = {
  editReflection,
  updateUserReflection
};

function mapStateToProps(state) {
    return {
        name: state.username,
        user_id: state.user_id,
        reflection: state.reflections,
        editInfo: state.editReflection.reflection,
        editID: state.editReflection.id
    }
}

export default connect (
    mapStateToProps,
    mapDispatchToProps)(EditReflection);