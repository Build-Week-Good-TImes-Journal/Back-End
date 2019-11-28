import {
    GET_USER_LOGIN,
    GET_USER_ACTIVITY,
    GET_USER_ACTIVITIES,
    SET_USER_REGISTER,
    ADD_USER_ACTIVITIES,
    DELETE_USER_ACTIVITY, GET_USER_REFLECTIONS
} from "../Actions/UserAction";

const initialState = {
    username: "",
    password: "",
    user_id: "",
    activities: [],
    reflections: []
};

export function UserReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_LOGIN:
            return {
                ...state,
                username: action.payload.username,
                password: action.payload.password,
                user_id: action.payload.id
            };
        case GET_USER_ACTIVITIES:
            return {
                ...state,
                activities: action.payload.activities.filter(arr => {
                    return arr.user_id === state.user_id;
                })
            };
        case ADD_USER_ACTIVITIES:
            return {
                ...state
            };
        case DELETE_USER_ACTIVITY:
            return {
                ...state,
                // activities: action.payload.activities.filter(act => {
                //     return act.id !===
                // })
            };
        case GET_USER_REFLECTIONS:
            return {
                ...state,
                reflections: action.payload.reflections
            };
        default:
            return state;
    }
}