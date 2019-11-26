import React, { useState, useEffect } from "react";
import api from '../../Utilites/api'

import {
    Container,
    ActInfo,
    ActInfo2,
    Select
} from "../../Styles/StyledWidgets";
// import logo from "../../Styles/logo.png";
import {getUserActivities} from "../../Actions/UserAction";
import {connect} from "react-redux";

function ReflectionForm({ name, id }) {

    const [newReflection, setNewReflection] = useState({
        reflection: ""
    });
    const [reflection, setReflection] = useState([]);
    useEffect(() => {
        api()
            .get(`/api/reflection-logs/${name}`)
            .then(res => {
                console.log(res);
                setReflection(res.data.reflectionLogs);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);


    const handleChange = e => {
        setNewReflection({
            ...newReflection,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = e => {
        e.preventDefault();
        api()
            .post(`/api/reflection-logs/${name}`, newReflection)
            .then(res => {
                console.log(res);
                api()
                    .get(`/api/reflection-logs/${name}`)
                    .then(res => {
                        setReflection(res.data.reflectionLogs);
                        setNewReflection('')
                    })
                    .catch(err => {
                        console.log(err);
                    });
            })
            .catch(err => {
                console.log(err);
            });
    };
    console.log(reflection);
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
                </div>
            ))}
        </Container>
    );
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
    mapDispatchToProps)(ReflectionForm);
