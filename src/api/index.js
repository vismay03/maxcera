import axios from 'axios';
const url = "http://localhost:4000/adminlogin";

export const fetchLogins = () => axios.get(url);


