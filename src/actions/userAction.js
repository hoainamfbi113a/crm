import * as userConstants from "../constants/userConstant";
export const fetchListUser = (params = {}) =>{
    return {
        type: userConstants.FETCH_LIST_USER,
        payload: {
            params
        }
    }
}

export const fetchListUserSuccess = data => {
    return {
        type: userConstants.FETCH_LIST_USER_SUCCESS,
        payload : {
            data,
        }
    }
}

export const fetchListUserFailed = error => {
    return {
        type: userConstants.FETCH_LIST_USER_FAILED,
        payload: {
            error
        }
    }
}