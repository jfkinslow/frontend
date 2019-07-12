import axios from 'axios';

export const LOGIN_START = "LOGIN_START";

export const login = creds => dispatch => {
    dispatch({ type: LOGIN_START });
    return axios
        .post('' /* endpoint for login */, creds)
        .then(res => {} /* save token to localStorage from res */)
        .catch(err => {} /* handle login error */);
}