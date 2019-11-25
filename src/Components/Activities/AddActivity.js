import React,{ useState } from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { HeaderLogin } from "../../Styles/StyledWidgets";
import {connect} from "react-redux";
import { addUserActivity } from "../../Actions/UserAction";


function Addactivity({ addUserActivity, name, id, history }){

    const[activity,setActivity]=useState({
        name:"",
        description:"",
        user_id:id,
    });

    const handleChange=(e)=>{
        setActivity({
            ...activity,
            [e.target.name]:e.target.value
        })
    };

    const handleSubmit = (e, name, activity) => {
        e.preventDefault();
        addUserActivity(name);
        history.push("/dashboard")
    };
    return(
        <div>
            <HeaderLogin>Add Activity</HeaderLogin>
            <br/><br/><form onSubmit={handleSubmit}>
            <span>Name of the activity : </span><TextField label="Name" type="text" name="name" value={activity.name} onChange={handleChange}/><br/><br/>
            <span>Description of the activity : </span><TextField label="Description" type="text" name="description" value={activity.description} onChange={handleChange}/><br/><br/>
                <Button type="submit">Add activity</Button>
            </form>
        </div>


    )
}

const mapDispatchToProps = {
    addUserActivity
};

function mapStateToProps(state) {
    return {
        name: state.username,
        id: state.user_id,
        activity: state.activities
    }
}



export default connect (
    mapStateToProps,
    mapDispatchToProps)(Addactivity);