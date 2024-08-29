import axios from "axios";

const Axios = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,  // Should be http://localhost:9000
  withCredentials: true,
});

export default Axios;

