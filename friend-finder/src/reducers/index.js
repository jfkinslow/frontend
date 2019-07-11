// import variable names from actions
import {
    LOGIN_START
} from '../actions';

const initialState = {
    loggingIn: false,
    error: ''
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_START:
            return {
                ...state,
                loggingIn: true
            };
        default:
            return state;
    };
};

export default rootReducer;