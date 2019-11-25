import React,{ useState,useEffect } from "react";
import { Link} from "react-router-dom";
import { connect } from 'react-redux';
import { getUserActivities } from "../../Actions/UserAction";
import { Container, HeaderLogin, ActInfo, ActInfo2, ActInfo3 } from "../../Styles/StyledWidgets";


function UserDashboard({  name, id,  activity, getUserActivities }){

    useEffect((name)=>{
        getUserActivities(name)
    },[]);

    console.log(activity);
    return (

        <Container>
            {/*<img className="Clogo" src={logo} alt="company logo" />*/}
            <HeaderLogin>Your Activities</HeaderLogin>


            <div>


                {/*{user.activites.map(activity=>(*/}
                {/*    <div key={activity.id}>*/}
                {/*        <Link to={`/activity/${activity.name}`}>*/}
                {/*            <ActInfo>{activity.name}</ActInfo>*/}
                {/*        </Link>*/}
                {/*        <ActInfo2>{activity.description}</ActInfo2>*/}
                {/*        <ActInfo3>{activity.created_at}</ActInfo3>*/}
                {/*        <ActInfo3>{activity.updated_at}</ActInfo3>*/}
                {/*    </div>*/}

                {/*))}*/}
                <Link to={`/addactivity`}>Add Activity</Link>
            </div>
        </Container>
    )
}

 const mapDispatchToProps = {
     getUserActivities
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
    mapDispatchToProps)(UserDashboard);