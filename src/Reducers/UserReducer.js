import {
    GET_USER_LOGIN,
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
    EDIT_USER_ACTIVITY_lOG,
    ADD_USER_ACTIVITY_LOG
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
        case SET_USER_REGISTER:
            return {
                ...state,
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
            };
        case GET_USER_REFLECTIONS:
            return {
                ...state,
                //Reflections.filter only returns reflections belonging to the current user
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
                //data.filter only returns activity-logs belonging to the current user
                activityLogs: action.payload.data.filter(arr => {
                    return arr.user_id === state.user_id
                })
            };
        case EDIT_USER_ACTIVITY_lOG:
            return {
                ...state,
                editActivityLog: action.payload.data
            };
        case ADD_USER_ACTIVITY_LOG:
            return {
                ...state,
            };
        default:
            return state;
    }
}