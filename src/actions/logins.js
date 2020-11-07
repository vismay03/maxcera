import { FETCH_ADMIN } from './../constants/actionTypes';
import * as api from '../api/index.js';

export const getLogins = () => async(dipatch) => {
    try{
        const { data } = await api.fetchLogins();

        dipatch({ type: FETCH_ADMIN, payload: data });

    }
    catch(error) {
        console.log(error.message);
    }

};

