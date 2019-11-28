import React, { useState } from 'react';
import {deleteActivity, getUserActivities} from "../../Actions/UserAction";
import {connect} from "react-redux";

function EditActivity (props) {

  const id = props.match.params.id;
  const edit = props.activity.map(arr => {
      return arr.id === id;
  });

  console.log(edit);
console.log(props.activity[id]);
    console.log(id);

    return (
        <div>
            hey you guys
        </div>
    )
}

const mapDispatchToProps = {
    getUserActivities,
    deleteActivity
};

function mapStateToProps(state) {
    return {
        name: state.username,
        id: state.user_id,
        activity: state.activities,
        info: state,
        actId: state.activities.id
    }
}



export default connect (
    mapStateToProps,
    mapDispatchToProps)(EditActivity);