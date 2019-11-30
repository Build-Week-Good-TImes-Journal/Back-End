import React,{ useState,useEffect } from "react";
import { Link} from "react-router-dom";
import { connect } from 'react-redux';
import {Container, HeaderLogin, ActInfo, ActInfo2, ActInfo3, Select} from "../../Styles/StyledWidgets";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { addReflections, addUserActivity } from "../../Actions/UserAction";


function UserDashboard ({info, name, activity, id, addUserActivity, addReflections}) {

    const [arrayActivity, setArrayActivity] = useState([{
        name: "tom",
        notes: "",
        enjoyment: 0,
        engagement: 0,
        ala_id: 0
    }]);

    // const [newActivity, setNewActivity] = useState({
    //     user_id: id,
    //     date: Date.now(),
    //     outcomes: "",
    //     activities: [{
    //         name: "tom",
    //         notes: "did this work",
    //         enjoyment: 0,
    //         engagement: 0
    //     }]
    // });

    const [newActivity, setNewActivity] = useState({
        name: "",
        description: "",
        user_id: id,
        date: Date.now()
    });


    const [newReflection, setNewReflection] = useState({
        reflection: "",
        user_id: id,
        data: Date.now()
    });

    const handleSubmitActivity = (e) => {
        e.preventDefault();
        addUserActivity(name, newActivity);
    };

    const handleChangeActivity = (e) => {
        setNewActivity({
            ...newActivity,
            [e.target.name]: e.target.value
        });
    };

    const handleChangeActivities = (e) => {
        setArrayActivity({
            ...arrayActivity,
            [e.target.name]: e.target.value
        });
        // setNewActivity({
        //     ...newActivity,
        //     activities: {arrayActivity}
        // })
    };


    const handleSubmitReflection = (e) => {
        e.preventDefault();
        addReflections(name, newReflection);
        setNewReflection({
            reflection: ""
        });
    };

    const handleChangeReflection = (e) => {
        setNewReflection({
            ...newReflection,
            [e.target.name]: e.target.value
        });
    };
console.log(newActivity);
console.log(arrayActivity)
    return (
        <div>
        <HeaderLogin>Add Activity</HeaderLogin><br/><br/>
            <form onSubmit={handleSubmitActivity}>
                <span>Name of the activity - </span><TextField label="Name" type="text" name="name" value={newActivity.name} onChange={handleChangeActivity}/><br/><br/>
                <span>Description of the activity - </span><TextField label="Description" type="text" name="description" value={newActivity.description} onChange={handleChangeActivity}/><br/><br/>
                <span>Level of Enjoyment - </span><input type="number" name="enjoyment" value={arrayActivity.enjoyment} onChange={handleChangeActivities} /><br/><br/>
                <span>Level of Engagement - </span><input type="number" name="engagement" value={arrayActivity.engagement} onChange={handleChangeActivities} /><br/><br/>
                <Button type="submit">Add activity</Button>
            </form>

        <hr/>

            <ActInfo>Add your reflections here!</ActInfo>
            <form onSubmit={handleSubmitReflection}>
        <textarea
            className="textArea"
            name="reflection"
            value={newReflection.reflection}
            placeholder="How was your week?"
            onChange={handleChangeReflection}
        />
                {/*<Select>*/}
                {/*    <option value="" hidden>*/}
                {/*        Pick One!*/}
                {/*    </option>*/}
                {/*    <option value="1">&#128515;</option>*/}
                {/*    <option value="2">&#128524;</option>*/}
                {/*    <option value="3">&#128532;</option>*/}
                {/*    <option value="4">&#128553;</option>*/}
                {/*</Select>*/}

                <button className="refButton" type="submit">
                    Add Reflection
                </button>
            </form>

        </div>
    )
};

const mapDispatchToProps = {
    addUserActivity,
    addReflections
};

function mapStateToProps(state) {
    return {
        name: state.username,
        id: state.user_id,
        activity: state.activities,
        info: state
    }
}



export default connect (
    mapStateToProps,
    mapDispatchToProps)(UserDashboard)

