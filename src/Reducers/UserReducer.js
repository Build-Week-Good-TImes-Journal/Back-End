import {
    GET_USER_LOGIN,
    GET_USER_ACTIVITY,
    GET_USER_ACTIVITIES,
    SET_USER_REGISTER,
    ADD_USER_ACTIVITIES,
    DELETE_USER_ACTIVITY,
    GET_USER_REFLECTIONS,
    ADD_USER_REFLECTIONS,
    EDIT_USER_ACTIVITY,
    UPDATE_USER_ACTIVITY,
    UPDATE_USER_REFLECTION,
    EDIT_USER_REFLECTION,
    GET_ACTIVITY_LOGS,
    EDIT_USER_ACTIVITY_lOG
} from "../Actions/UserAction";

const initialState = {
    username: "",
    password: "",
    user_id: "",
    activities: [],
    reflections: [],
    editActivity:{},
    editReflection:{},
    editActivityLog:{},
    activityLogs:[]
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
                reflections: action.payload.reflections.filter(arr => {
                    return arr.user_id === state.user_id
                })
            };
        case ADD_USER_REFLECTIONS:
            return {
                ...state
            };
        case EDIT_USER_ACTIVITY:
            return {
                ...state,
                editActivity: action.payload.data
            };
        case EDIT_USER_REFLECTION:
            return {
                ...state,
                editReflection: action.payload.data
            };
        case UPDATE_USER_ACTIVITY:
            return {
                ...state,
            };
        case UPDATE_USER_REFLECTION:
            return  {
                ...state
            };
        case GET_ACTIVITY_LOGS:
            return {
                ...state,
                activityLogs: action.payload.data.filter(arr => {
                    return arr.user_id === state.user_id
                })
            };
        case EDIT_USER_ACTIVITY_lOG:
            return {
                ...state,
                editActivityLog: action.payload.data
            };
        default:
            return state;
    }
}