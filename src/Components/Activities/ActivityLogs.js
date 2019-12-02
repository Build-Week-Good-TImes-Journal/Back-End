import React, { useState, useEffect} from 'react';
import {activityLogs, addUserActivityLog} from "../../Actions/UserAction";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import { Button, HeaderLogin, Container, Info} from '../../Styles/StyledWidgets';

function ActivityLogs({ name, activityLogs, addUserActivityLog, logs, history, user_id }) {

    useEffect(() => {
        activityLogs(name)
    },[activityLogs, name]);

    const [newLog, setNewLog] = useState({
        user_id: user_id,
        date: Date.now(),
        outcomes: "",
        activities: [{
            name: "",
            notes: "",
            enjoyment: "",
            engagement: "",
            id: Math.random(),
        }]
    });

    const [newAct, setNewAct] = useState({
        name: "",
        notes: "",
        enjoyment: "",
        engagement: "",
    });

    const changeHandler = (e) => {
        setNewLog({
            ...newLog,
            [e.target.name]: e.target.value
        })
    };

    const changeHandlerAct = (e) => {
        setNewAct({
            ...newAct,
            [e.target.name]: e.target.value
        })
    };

    const submitHandler = (e) => {
        e.preventDefault();
        setNewLog({
            ...newLog,
            [newLog.activities[0].name]: newAct.name,
            [newLog.activities[0].notes]: newAct.notes,
            [newLog.activities[0].enjoyment]: newAct.enjoyment,
            [newLog.activities[0].engagement]: newAct.engagement
        });
        console.log(newLog);
        addUserActivityLog(name, newLog);
        history.push("/dashboard");
    };


    return (
        <Container>
            <HeaderLogin>Create New Activity Log</HeaderLogin>
            <form onSubmit={submitHandler}>
                <Info type="text" name="outcomes" placeholder="How has your day..." value={newLog.outcomes} onChange={changeHandler} />
                <Info type="text" name="name" placeholder="What was your activity?" value={newAct.name} onChange={changeHandlerAct} />
                <Info type="text" name={"notes"} placeholder="How was the activity?" value={newAct.notes} onChange={changeHandlerAct} />
                <Info type="number" name={"enjoyment"} placeholder="How would you rate your enjoyment?" value={newAct.enjoyment} onChange={changeHandlerAct} />
                <Info type="number" name={"engagement"} placeholder="How would you rate your engagement?" value={newAct.engagement} onChange={changeHandlerAct} />
                <Button type="submit">Submit</Button>
            </form>
        {logs.map((arr) => {
            return (
                <div key={arr.id}>
                <h1>{arr.outcomes}</h1>
                    <Link to={`/activitylog/${arr.id}`}>
                    <Button>Update</Button>
                    </Link>
                </div>
            )
            })}
        </Container>
    )
}

const mapDispatchToProps = {
    activityLogs,
    addUserActivityLog
};

function mapStateToProps(state) {
    return {
        name: state.username,
        user_id: state.user_id,
        logs: state.activityLogs
    }
}



export default connect (
    mapStateToProps,
    mapDispatchToProps)(ActivityLogs)