import React, { useState, useEffect} from 'react';
import {activityLogs, addReflections, addUserActivity} from "../../Actions/UserAction";
import {connect} from "react-redux";
import api from "../../Utilites/api";
import {Link} from "react-router-dom";

function ActivityLogs({ name, activityLogs, logs, history }) {

    useEffect(() => {
        activityLogs(name)
    },[]);

    function clickHandler(e) {
        e.preventDefault();
        api()
            .delete(`/api/activity-logs/${name}`, {data: {
                    id: 2
                }})
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err.message)
            });
        history.push("/activitylogs")
    }

    return (
        <div>
        {logs.map((arr) => {
            return (
                <div key={arr.id}>
                <h1>{arr.outcomes}</h1>
                    <Link to={`/activitylog/${arr.id}`}>
                    <button>Update</button>
                    </Link>
                </div>
            )
            })}
        </div>
    )
}

const mapDispatchToProps = {
    activityLogs
};

function mapStateToProps(state) {
    return {
        name: state.username,
        id: state.user_id,
        logs: state.activityLogs
    }
}



export default connect (
    mapStateToProps,
    mapDispatchToProps)(ActivityLogs)