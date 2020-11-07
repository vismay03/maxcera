import { FETCH_ADMIN } from './../constants/actionTypes';

export default (logins = [], action) => {
    switch (action.type) {
        case FETCH_ADMIN:
            return action.payload
        default:
            return logins
    }
}