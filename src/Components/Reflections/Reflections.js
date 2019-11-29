import React, { useEffect } from "react";

import {
    Container,
    ActInfo,
    ActInfo2,
    Select
} from "../../Styles/StyledWidgets";
// import logo from "../../Styles/logo.png";
import { getReflections } from "../../Actions/UserAction";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

function ReflectionForm({ name, getReflections, reflection }) {


    useEffect(() => {
       getReflections(name)
    }, []);



    return (
        <Container>
            {/*<img className="Clogo" src={logo} />*/}

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
