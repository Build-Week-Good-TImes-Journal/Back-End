import React, { useEffect } from "react";
import { Container, ActInfo, ActInfo2, Select } from "../../Styles/StyledWidgets";
// import logo from "../../Styles/logo.png";
import { getReflections } from "../../Actions/UserAction";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

function ReflectionForm({ name, getReflections, reflection }) {

    //useEffect used for get request to grab all reflections for user signed it
    //The (name) is taken for the redux store
    useEffect(() => {
       getReflections(name)
    }, []);



    return (
        <Container>
            {/*Img commented out because I do not have access image*/}
            {/*<img className="Clogo" src={logo} />*/}

            {/*Reflection is from the redux store and is an array of all reflections for signed in user*/}
            {reflection.map(reflection => (
                <div key={reflection.id}>
                    <ActInfo2>{reflection.reflection}</ActInfo2>
                    <ActInfo2>{reflection.description}</ActInfo2>
                    <Link to={`/reflection/${reflection.id}`}>
                        <button>Update Reflection</button>
                    </Link>
                </div>
            ))}
        </Container>
    );
}

//getReflections is from UserAction.js and is a get request for reflections
const mapDispatchToProps = {
    getReflections
};

function mapStateToProps(state) {
    return {
        name: state.username,
        id: state.user_id,
        activity: state.activities,
        reflection: state.reflections
    }
}

export default connect (
    mapStateToProps,
    mapDispatchToProps)(ReflectionForm);
