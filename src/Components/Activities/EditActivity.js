import React, { useState, useEffect } from 'react';
import {connect} from "react-redux";
import { deleteActivity, editActivity, updateUserActivity} from "../../Actions/UserAction";
import api from "../../Utilites/api";

function EditActivity ({ name, editId, match, editInfo, editActivity, user_id, updateUserActivity, history }) {

   //id is from the react-router-dom path, and is set to the current id for the activity selected
  const id = match.params.id;
  //editData - is a boolean set to false, when set to true enables the update feature
  const [editData, setEditData] = useState(false);
  //actID - is the (id) listed above but turned from a string to a number
  const [actID] = useState({
      id: Number(id)
  });
  //newData - is the state which is track the user input and sent to a put request to update current activity
  const [newData, setNewData] = useState({
      name: "",
      description: "",
      id: actID.id,
      user_id: user_id
  });

  //useEffect is used with a get request including an (id) to get a single activity
   useEffect(() => {
        editActivity(name, actID.id)
   },[id]);

   //saveEdit - saves the changes from the user, and redirects them back to the (/myactivities) component
   const saveEdit = (e) => {
        e.preventDefault();
       updateUserActivity(name, newData);
       history.push("/myactivities")
   };

   //edit - editData is now true, and all changes are set to newData
    const edit = act => {
        setEditData(true);
        setNewData(act);
    };

    //Click handler is set to a (delete button) and runs a delete request with the current activity id
    function clickHandler(e) {
        e.preventDefault();
        api()
            .delete(`/api/activities/${name}`, {data: {
                id: editId
                }})
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err.message)
            });
        history.push("/myactivities")
    }

    return (
        <div>
            <div>
                <h1 onClick={() => edit(newData)} >{editInfo.name}</h1>
                <button onClick={clickHandler}>Delete Activity</button>
            </div>
            {/*editData is used in a ternary and when set to true displays the update feature*/}
    {editData && (
        <form onSubmit={saveEdit}>
            <legend>Update Activity</legend>
            <label>
                Name -
                <input
                    onChange={e => setNewData({ ...newData, name: e.target.value })} value={newData.name}/>
            </label>
            <label>
                Description -
                <input onChange={e => setNewData({...newData, description:  e.target.value})} value={newData.description}/>
            </label>
            <div className="button-row">
                <button type="submit">save</button>
                <button onClick={() => setEditData(false)}>cancel</button>
            </div>
        </form>
    )}
    </div>
    )}

//All functions is dispatch can be found in the UserAction.js
const mapDispatchToProps = {
    editActivity,
    updateUserActivity,
    deleteActivity
};

function mapStateToProps(state) {
    return {
        name: state.username,
        user_id: state.user_id,
        activity: state.activities,
        info: state,
        actId: state.activities.id,
        editInfo: state.editActivity,
        editId: state.editActivity.id
    }
}

export default connect (
    mapStateToProps,
    mapDispatchToProps)(EditActivity);