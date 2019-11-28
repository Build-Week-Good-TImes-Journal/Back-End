import api from "../Utilites/api";
import { login } from "../Utilites/api";

export const GET_USER_LOGIN = "GET_USER_LOGIN";
export const SET_USER_REGISTER = "SET_USER_REGISTER";
export const GET_USER_REFLECTIONS = "GET_USER_REFLECTIONS";
export const GET_USER_ACTIVITIES = "GET_USER_ACTIVITIES";
export const ADD_USER_ACTIVITIES = "ADD_USER_ACTIVITIES";
export const GET_USER_ACTIVITY = "GET_USER_ACTIVITY";
export const DELETE_USER_ACTIVITY = "DELETE_USER_ACTIVITY";

export function getUserLogin(param) {
    return dispatch => {

        api()
            .post('/api/auth/login', param)
            .then( res => {
                console.log(res);
                localStorage.setItem("token", res.data.token);
                dispatch({ type: GET_USER_LOGIN, payload: {
                    username: param.username,
                    password: param.password,
                    id: res.data.user_id
                    }});
            })
            .catch( err => {
                console.log(err)
            })
    }
};

export function getUserActivities(name) {
    return dispatch => {
        // dispatch({ type: GET_USER_ACTIVITIES });

        api()
            .get(`/api/activities/${name}`)
            .then(res => {
                console.log(res.data);
                dispatch({ type: GET_USER_ACTIVITIES, payload: {
                        activities: res.data
                    }})
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export function addUserActivity(name, activity) {
    return dispatch => {

        api()
            .post(`/api/activities/${name}`, activity)
            .then(res => {
                dispatch({ type: ADD_USER_ACTIVITIES })
            })
            .catch(err => {
                console.log(err);
                console.log(name);
                console.log(activity);
            });
    };
}

export function registerUser(user) {

        api()
            .post('/api/auth/register/', user)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err.message)
            })
    }

export function deleteActivity(user, act) {

    return dispatch => {

        api()
            .delete(`api/activities/${user}`, act.id)
            .then(res => {
                dispatch({ type: DELETE_USER_ACTIVITY })
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export function getReflections(user) {

    return dispatch => {

        api()
            .get(`/api/reflection-logs/${user}`)
            .then(res => {
                dispatch({ type: GET_USER_REFLECTIONS, payload: {
                        reflections: res.data.reflectionLogs
                    }})
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export function addReflections(user, reflection) {

        api(`/api/reflection-logs/${user}`, reflection)
            .post(res => {
                console.log(res);
                getReflections(user)
            })
            .catch(err => {
                console.log(err)
            })
    }

