import React, { useState, useEffect } from "react";
import api from '../../Utilites/api'

import {
    Container,
    ActInfo,
    ActInfo2,
    Select
} from "../../Styles/StyledWidgets";
// import logo from "../../Styles/logo.png";
import {getReflections, addReflections } from "../../Actions/UserAction";
import {connect} from "react-redux";

function ReflectionForm({ name, id, getReflections, addReflections, reflection }) {

    const [newReflection, setNewReflection] = useState({
        reflection: ""
    });

    useEffect(() => {
       getReflections(name)
    }, []);


    const handleChange = e => {
        setNewReflection({
            ...newReflection,
            [e.target.name]: e.target.value
        });
    };

    function handleSubmit(e) {
        e.preventDefault();
        addReflections(name, newReflection)
    }

    return (
        <Container>
            {/*<img className="Clogo" src={logo} />*/}
            <ActInfo>Add your reflections here!</ActInfo>
            <form onSubmit={handleSubmit}>
        <textarea
            className="textArea"
            name="reflection"
            value={newReflection.reflection}
            placeholder="How was your week?"
            onChange={handleChange}
        />
                <Select>
                    <option value="" hidden>
                        Pick One!
                    </option>
                    <option value="1">&#128515;</option>
                    <option value="2">&#128524;</option>
                    <option value="3">&#128532;</option>
                    <option value="4">&#128553;</option>
                </Select>

                <button className="refButton" type="submit">
                    Add Reflection
                </button>
            </form>

            {reflection.map(reflection => (
                <div key={reflection.id}>
                    <ActInfo2>{reflection.reflection}</ActInfo2>
                    <ActInfo2>{reflection.description}</ActInfo2>
                    {/*<button onClick={}>Delete</button>*/}
                </div>
            ))}
        </Container>
    );
}

const mapDispatchToProps = {
    getReflections,
    addReflections
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
