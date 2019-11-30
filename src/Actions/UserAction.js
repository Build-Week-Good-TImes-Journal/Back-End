import api from "../Utilites/api";

//Dispatch for login and registration
export const GET_USER_LOGIN = "GET_USER_LOGIN";
export const SET_USER_REGISTER = "SET_USER_REGISTER";
//Dispatch for user reflection
export const GET_USER_REFLECTIONS = "GET_USER_REFLECTIONS";
export const ADD_USER_REFLECTIONS = "ADD_USER_REFLECTIONS";
export const UPDATE_USER_REFLECTION = "UPDATE_USER_REFLECTION";
export const EDIT_USER_REFLECTION = "EDIT_USER_REFLECTION";
//Dispatch for user activities
export const GET_USER_ACTIVITIES = "GET_USER_ACTIVITIES";
export const ADD_USER_ACTIVITIES = "ADD_USER_ACTIVITIES";
export const DELETE_USER_ACTIVITY = "DELETE_USER_ACTIVITY";
export const UPDATE_USER_ACTIVITY = "UPDATE_USER_ACTIVITY";
export const EDIT_USER_ACTIVITY = "EDIT_USER_ACTIVITY";
//Dispatch for user activity logs
export const EDIT_USER_ACTIVITY_lOG = "EDIT_USER_ACTIVITY_lOG";
export const GET_ACTIVITY_LOGS = "GET_ACTIVITY_LOGS";
export const ADD_USER_ACTIVITY_LOG = "ADD_USER_ACTIVITY_LOG";

//NOTE - FUNCTIONS ARE NOT IN ORDER OF DISPATCH
//IF YOU ARE LOOKING FOR ONE USER THE SEARCH ON YOUR IDE
//USE EITHER THE FUNCTION NAME OR DISPATCH TYPE

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

        api()
            .get(`/api/activities/${name}`)
            .then(res => {
                console.log(res.data);
                console.log("hey")
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
                console.log(res)
                console.log(activity)
                dispatch({ type: ADD_USER_ACTIVITIES })
            })
            .catch(err => {
                console.log(err.message);
                console.log(activity);
            });
    };
}

export function registerUser(user) {

    return dispatch => {
        api()
            .post('/api/auth/register', user)
            .then(res => {
                console.log(res);
                dispatch({ type: SET_USER_REGISTER })
            })
            .catch(err => {
                console.log(err.message)
            })
    }
}
export function deleteActivity(user, id) {

    return dispatch => {

        api()
            .delete(`/api/activity-logs/${user}`, id)
            .then(res => {
                dispatch({ type: DELETE_USER_ACTIVITY })
            })
            .catch(err => {
                console.log(id);
                console.log(user)
                console.log(err.message)
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

    return dispatch => {
        api()
        .post(`/api/reflection-logs/${user}`, reflection)
            .then(res => {
                console.log(res);
                dispatch({ type: ADD_USER_REFLECTIONS })
            })
            .catch(err => {
                console.log(err.message)
            })
    }}

    export function editActivity(name, id) {

        return dispatch => {

            api()
                .get(`/api/activities/${name}/${id}`)
                .then(res => {
                    console.log(res)
                   dispatch({ type: EDIT_USER_ACTIVITY, payload:{
                       data: res.data[0]
                       } })
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }

    export function updateUserActivity(name, data) {

        return dispatch => {

            api()
                .put(`/api/activities/${name}`, data)
                .then(res => {
                    console.log(res);
                    dispatch({ type: UPDATE_USER_ACTIVITY })
                })
                .catch(err => {
                    console.log(data)
                    console.log(err.message)
                })
        }
    }

export function editReflection(name, id) {

    return dispatch => {

        api()
            .get(`/api/reflection-logs/${name}/${id}`)
            .then(res => {
                console.log(res.data.reflectionLog)
                dispatch({ type: EDIT_USER_REFLECTION, payload:{
                        data: res.data.reflectionLog
                    } })
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export function updateUserReflection(name, id) {

    return dispatch => {

        api()
            .put(`/api/reflection-logs/${name}`, id)
            .then(res => {
                console.log(res);
                dispatch({ type: UPDATE_USER_REFLECTION })
            })
            .catch(err => {
                console.log(id);
                console.log(err.message)
            })
    }
}

export function activityLogs(name) {

    return dispatch => {

        api()
            .get(`/api/activity-logs/${name}`)
            .then(res => {
                console.log(res)
                dispatch({ type: GET_ACTIVITY_LOGS, payload: {
                    data: res.data
                    }})
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export function editActivityLogs(name, id) {

    return dispatch => {

        api()
            .get(`/api/activity-logs/${name}/${id}`)
            .then(res => {
                console.log(res)
                dispatch({ type: EDIT_USER_ACTIVITY_lOG, payload: {
                        data: res.data[0]
                    }})
            })
            .catch(err => {
                console.log(err)
            })
    }
}

export function updateUserActivityLog(name, data) {

    return dispatch => {

        api()
            .put(`/api/activity-Logs/${name}`, data)
            .then(res => {
                console.log(res);
                dispatch({ type: UPDATE_USER_ACTIVITY })
            })
            .catch(err => {
                console.log(data)
                console.log(err.message)
            })
    }
}

export function addUserActivityLog(name, data) {

    return dispatch => {

        api()
            .post(`/api/activity-logs/${name}`, data)
            .then(res => {
                console.log(res);
                dispatch({ type: ADD_USER_ACTIVITY_LOG })
            })
            .catch(err => {
                console.log(data)
                console.log(err.message)
            })
    }
}


