import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getUserActivities } from "../../Actions/UserAction";
import {
  Container,
  HeaderLogin,
  ActInfo,
  ActInfo2,
  ActInfo3,
  Button
} from "../../Styles/StyledWidgets";


function ActivityLog({ name, activity, getUserActivities }) {
  //useEffect - used to grab all activities from current user
  useEffect(() => {
    getUserActivities(name);
  }, [getUserActivities, name]);

  return (
    <Container>
      <HeaderLogin>Your Activities</HeaderLogin>
      <div>
        {/*activity is from the redux store and is an array of activities for the current user*/}
        {activity.map(activity => (
          <div key={activity.id}>
            <ActInfo>{activity.name}</ActInfo>
            <ActInfo2>{activity.description}</ActInfo2>
            <ActInfo3>{activity.created_at}</ActInfo3>
            <ActInfo3>{activity.updated_at}</ActInfo3>
            <Link to={`/activity/${activity.id}`}>
              <Button>Update Activity</Button>
            </Link>
          </div>
        ))}
      </div>
    </Container>
  );
}

//getUserActivities can be found in UserAction.js and is a get request for all activities for current user
const mapDispatchToProps = {
  getUserActivities
};

function mapStateToProps(state) {
  return {
    name: state.username,
    id: state.user_id,
    activity: state.activities,
    info: state
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ActivityLog);
