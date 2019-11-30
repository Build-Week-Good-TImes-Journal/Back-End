import React, { useState, useEffect } from 'react';
import {connect} from "react-redux";
import {DELETE_USER_ACTIVITY, deleteActivity, editActivity, updateUserActivity} from "../../Actions/UserAction";
import api from "../../Utilites/api";

function EditActivity ({ name, actId, editId, activity,  match, editInfo, editActivity, user_id, updateUserActivity, history, deleteActivity }) {

  const id = match.params.id;
  const [editData, setEditData] = useState(false);
  const [actID] = useState({
      id: Number(id)
  });
  const [newData, setNewData] = useState({
      name: "",
      description: "",
      id: actID.id,
      user_id: user_id
  });

   useEffect(() => {
        editActivity(name, actID.id)
   },[id]);

   const saveEdit = (e) => {
        e.preventDefault();
       updateUserActivity(name, newData);
       history.push("/myactivities")
   };

    const edit = act => {
        setEditData(true);
        setNewData(act);
    };

console.log(editInfo)
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

    {editData && (
        <form onSubmit={saveEdit}>
            <legend>Update Activity</legend>
            <label>
                Name:
                <input
                    onChange={e =>
                        setNewData({ ...newData, name: e.target.value })
                    }
                    value={newData.name}
                />
            </label>
            <label>
                Description:
                <input
                    onChange={e =>
                        setNewData({
                            ...newData,
                            description:  e.target.value
                        })
                    }
                    value={newData.description}
                />
            </label>
            <div className="button-row">
                <button type="submit">save</button>
                <button onClick={() => setEditData(false)}>cancel</button>
            </div>
        </form>
    )}
    </div>
    )}

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