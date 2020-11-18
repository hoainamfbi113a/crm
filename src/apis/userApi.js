// import axiosUser from "./axios";
import axios from "axios"
const getListUser = (params = {}) => {
    return axios.get("http://localhost:3000/users",params)
}
export {
    getListUser
}