import React,{ useState,useEffect } from "react";
import { Link} from "react-router-dom";
import { connect } from 'react-redux';
import { getUserActivities } from "../../Actions/UserAction";
import { Container, HeaderLogin, ActInfo, ActInfo2, ActInfo3 } from "../../Styles/StyledWidgets";


function UserDashboard() {
    return (
        <div>Hey you guys</div>
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

