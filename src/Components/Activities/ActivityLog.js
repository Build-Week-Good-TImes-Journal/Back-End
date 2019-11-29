import React,{ useState,useEffect } from "react";
import { Link} from "react-router-dom";
import { connect } from 'react-redux';
import {deleteActivity, getUserActivities} from "../../Actions/UserAction";
import { Container, HeaderLogin, ActInfo, ActInfo2, ActInfo3 } from "../../Styles/StyledWidgets";


function ActivityLog({  name,  id,  activity, getUserActivities, deleteActivity, info }) {


    useEffect(() => {
        getUserActivities(name);
    }, [getUserActivities]);
console.log(activity);
        return (
            <Container>
                {/*<img className="Clogo" src={logo} alt="company logo" />*/}
                <HeaderLogin>Your Activities</HeaderLogin>


                <div>

                    {activity.map(activity => (
                        <div key={activity.id}>
                            <Link to={`/activity/${activity.name}`}>
                                <ActInfo>{activity.name}</ActInfo>
                            </Link>
                            <ActInfo2>{activity.description}</ActInfo2>
                            {/*<ActInfo3>{activity.created_at}</ActInfo3>*/}
                            {/*<ActInfo3>{activity.updated_at}</ActInfo3>*/}
                            <Link to={`/activity/${activity.id}`}>
                            <button>Update Activity</button>
                            </Link>
                            </div>

                    ))}
                </div>
            </Container>
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
        info: state
    }
}



export default connect (
    mapStateToProps,
    mapDispatchToProps)(ActivityLog);

