import React, { useState } from "react";
import { connect } from "react-redux";
import {
  Container,
  HeaderLogin,
  ActInfo,
  Button
, Info,
Select
} from "../../Styles/StyledWidgets";
// import TextField from "@material-ui/core/TextField";
import { addReflections, addUserActivity } from "../../Actions/UserAction";

function UserDashboard({ name, id, addUserActivity, addReflections }) {
  //State data to send on a post request for a new activity
  const [newActivity, setNewActivity] = useState({
    name: "",
    description: "",
    user_id: id,
    id: Date.now()
  });

  //State data to send on a post request for a new reflection
  const [newReflection, setNewReflection] = useState({
    reflection: "",
    user_id: id,
    data: Date.now()
  });

  //Submit handler to add new activity, resets the fields once created
  const handleSubmitActivity = e => {
    e.preventDefault();
    addUserActivity(name, newActivity);
    setNewActivity({
      ...newActivity,
      name: "",
      description: ""
    });
  };

  //Change handler to set user input to state above
  const handleChangeActivity = e => {
    setNewActivity({
      ...newActivity,
      [e.target.name]: e.target.value
    });
  };

  //Submit handler to send post request, also resets the text field for reflection
  const handleSubmitReflection = e => {
    e.preventDefault();
    addReflections(name, newReflection);
    setNewReflection({
      reflection: ""
    });
  };

  //Change handler for reflection text field, maps user input to state above
  const handleChangeReflection = e => {
    setNewReflection({
      ...newReflection,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Container>
      <HeaderLogin>Add Activity</HeaderLogin>
      <br />
      <br />
      <form onSubmit={handleSubmitActivity}>
        {/*dropdown menu for activity, needs to be reset on submit*/}
        <label className="actdescript" htmlFor="activity-select">Type of Activity - </label>
        <Select
          name="name"
          id="activity-select"
          onChange={handleChangeActivity}
        >
          <option value="">--Please choose an option--</option>
          <option value="Outdoor">Outdoor</option>
          <option value="Leisure">Leisure</option>
          <option value="Sport">Sport</option>
          <option value="Art">Art</option>
          <option value="Family">Family</option>
          <option value="Exercise">Exercise</option>
          <option value="Social">Social</option>
          <option value="Music">Music</option>
        </Select>
        <span className="actdescript">
          <textarea 
            className="textArea"
            label="Description"
            type="text"
            name="description"
            placeholder="Describe Your Activity"
            value={newActivity.description}
            onChange={handleChangeActivity}
          />
        </span>
        <br />
        <br />
        <Button type="submit">Add activity</Button>
      </form>
      <hr />

      <ActInfo>Add your reflections here!</ActInfo>
      <form onSubmit={handleSubmitReflection}>
        <textarea
          className="textArea"
          name="reflection"
          value={newReflection.reflection}
          placeholder="How was your week?"
          onChange={handleChangeReflection}
        />
        {/*Dropdown for reaction looks good, but the server does not take additional data*/}
        {/*<Select>*/}
        {/*    <option value="" hidden>*/}
        {/*        Pick One!*/}
        {/*    </option>*/}
        {/*    <option value="1">&#128515;</option>*/}
        {/*    <option value="2">&#128524;</option>*/}
        {/*    <option value="3">&#128532;</option>*/}
        {/*    <option value="4">&#128553;</option>*/}
        {/*</Select>*/}

        <Button type="submit">Add Reflection</Button>
      </form>
    </Container>
  );
}

//functions from UserActions.js for post requests for activity and reflections
const mapDispatchToProps = {
  addUserActivity,
  addReflections
};

//A few items pulled from the state store, console.log(info) to see the whole store
function mapStateToProps(state) {
  return {
    name: state.username,
    id: state.user_id,
    activity: state.activities,
    info: state
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDashboard);
