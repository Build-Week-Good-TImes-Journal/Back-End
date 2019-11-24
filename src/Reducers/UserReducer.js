import { GET_USER_LOGIN, GET_USER_ACTIVITY, GET_USER_ACTIVITIES, SET_USER_REGISTER, SET_USER_ACTIVITIES } from "../Actions/UserAction";

const initialState = {
    username: "",
    password: "",
    activities: []
};

export function UserReducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_LOGIN:
            return {
                ...state,
                username: action.payload.username,
                password: action.payload.password
            };
        case GET_USER_ACTIVITIES:
            return {
                ...state,
                activities: action.payload
            }
        default:
            return state;
    }
}