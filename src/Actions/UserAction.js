import api from "../Utilites/api";

export const GET_USER_LOGIN = "GET_USER_LOGIN";
export const SET_USER_REGISTER = "SET_USER_REGISTER";
export const GET_USER_ACTIVITIES = "GET_USER_ACTIVITIES";
export const ADD_USER_ACTIVITIES = "ADD_USER_ACTIVITIES";
export const GET_USER_ACTIVITY = "GET_USER_ACTIVITY";

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
                console.log(res);
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
                console.log(res);
                dispatch({ type: ADD_USER_ACTIVITIES, payload: {
                    activities: res.data
                    } })
            })
            .catch(err => {
                console.log(err)
            });
    };
}