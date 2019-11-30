import React, { useState, useEffect } from 'react';
import {connect} from "react-redux";
import {
    DELETE_USER_ACTIVITY,
    deleteActivity,
    editActivity,
    editActivityLogs,
    updateUserActivity, updateUserActivityLog
} from "../../Actions/UserAction";
import api from "../../Utilites/api";

function EditActivityLog ({ name, actId, editId, activity,  match, editInfo, editActivityLogs, editActivityLog, user_id, updateUserActivityLog, history, deleteActivity }) {

    const id = match.params.id;
    const [editData, setEditData] = useState(false);
    const [actID] = useState({
        id: Number(id)
    });
    const [newData, setNewData] = useState({
        user_id: user_id,
        id: actID.id,
        date: Date.now(),
        outcomes: "it was super fun",
        activities: [{
            name: "tom",
            notes: "did this work",
            enjoyment: 5,
            engagement: 5,
            id: actID.id,
            activity_log_id: 1,
        }]
    });

    const [editLog, setEditLog] = useState({});

    useEffect(() => {
        editActivityLogs(name, actID.id);
        setEditLog(editActivityLog)
    },[id]);

    const saveEdit = (e) => {
        e.preventDefault();
        updateUserActivityLog(name, newData);
        history.push("/activitylogs")
    };

    const edit = act => {
        setEditData(true);
        setNewData(act);
    };

    console.log(editLog)
    function clickHandler(e) {
        e.preventDefault();
        api()
            .delete(`/api/activity-logs/${name}`, {data: {
                    id: editId
                }})
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err.message)
            });
        history.push("/activitylogs")
    }

    console.log(editActivityLog)
    return (
        <div>
            <div>
                <h1 onClick={() => edit(newData)} >{editActivityLog.outcomes}</h1>
                {/*{editActivityLog.activities.map((arr) => {*/}
                {/*    return  (*/}
                {/*        <div>*/}
                {/*            <h1>{arr.name}</h1>*/}
                {/*        </div>*/}
                {/*    )*/}
                {/*})}*/}
                <button onClick={clickHandler}>Delete Activity</button>
            </div>

            {editData && (
                <form onSubmit={saveEdit}>
                    <legend>Update Activity</legend>
                    <label>
                        Name:
                        <input
                            onChange={e =>
                                setNewData({ ...newData, [e.target.name]: e.target.value })}
                            name="outcomes"
                            // value={newData.outcomes}
                            placeholder="How was your day?"
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
    editActivityLogs,
    updateUserActivityLog,
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
        editId: state.editActivityLog.id,
        editActivityLog: state.editActivityLog
    }
}



export default connect (
    mapStateToProps,
    mapDispatchToProps)(EditActivityLog);